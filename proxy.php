<?php
/* [CC-WALLET-007]
Complete ROT registration, operator messaging and passive proxy discovery.
Base: - Derived from CC-WALLET-006
Changes:
- [CC-WALLET-007] Bound registration capacity with a primary-coin reserve
- Preserve ROT nicknames and identify registrations only by coin and rotId
- Sign status acknowledgements and bounded operator-message delivery
- Record first failure, recovery and registration-state transitions in network.health
- Add passive proxyPing, proxyInfo and self-only proxyDirectory operations
- Keep wallet routing and same-origin browser behavior unchanged
- [CC-WALLET-005] Derive empty proxy ID and origin constants from validated SERVER_NAME
- Default the private data directory to the CC-PROXY sibling of the wallet directory
- Keep rot-registry.json, network.log and the reserved network.hour path together
- [CC-WALLET-004] Replace environment variables with four explicit source constants
- Normalize and validate proxy ID, absolute data directory and HTTPS wallet origin
- Fail closed on invalid configured values while retaining legacy server-to-server routing
- [CC-WALLET-003] Read the registry under a shared lock without rewriting it
- Write the registry only for actual registration, trust or health mutations
- Prevent client-controlled delta rejection from poisoning ROT backoff
- Mark stale registered ROTs RECOVERING and index-integrity failures QUARANTINED
- Clear accumulated transient failure state after a later successful exchange
- [CC-WALLET-002] Fix IPv6 routing, concurrent re-registration and ROT response projection
- Require stable control-plane configuration and keep registry secrets outside the webroot
- Anchor initial checkpoints to configured ROT endpoints and count one checkpoint vote per source IP
- Stabilize observer positions independently of nicknames and retain trusted membership for one hour
- Demote stale or lagging ROTs, add absolute request deadlines and apply technical-failure backoff
- Enforce same-origin browser requests while leaving public statistics to a separate service
- [CC-WALLET-001] Route EFL, AUR, CDN and DEM through one same-origin proxy.php
- Keep every hard-coded ROT available during the migration to registered ROTs
- Add a server-side ROT registry with CANDIDATE, READY, LEADING, RECOVERING, QUARANTINED and ENDED states
- Add HTTPS registration, registration verification, HMAC-SHA256 ROT messages and timestamp tolerance
- Keep ROT addresses, ports, authentication tokens and internal identifiers out of wallet responses
- Add proxy, coin, ROT nickname, ROT status and latency fields to technical logging
- [EFL-SLICE-048] Let the wallet query anonymous ROT positions independently for progressive observations
- Preserve the existing aggregate zero-confirmation route for backward compatibility
- [EFL-SLICE-044] Route one bounded address-history bootstrap through technical ROT failover
- Validate IN and OUT events, block timestamps, wallet ownership and unique transaction outputs
- Keep history separate from spendable state and zero-confirmation fan-out
- [EFL-SLICE-034] Reject duplicate outpoints within or across ROT address records
- Treat ROT index-integrity errors as technical and continue with the next ROT
- [EFL-SLICE-033] Fan zeroConfirmation requests out to every configured ROT and aggregate exact-output observations
- [EFL-SLICE-032] Raise raw-transaction and request limits for multi-tier legacy-input transactions
- [EFL-SLICE-031] Accept change index 0 plus Receive indices 1 through 50 in one atomic state request
- [EFL-SLICE-030] Route state, broadcast and transactionStatus through one PHP file
- Share ROT selection, request intake, socket transport, timing and byte logging
- Preserve operation-specific validation, technical retry behavior and wallet-visible outcomes
*/

/* Empty ID/origin values derive from the validated HTTPS virtual-host name. */
define('CC_PROXY_ID','');
define('CC_PROXY_DATA_DIR',dirname(__DIR__).'/CC-PROXY');
define('CC_PROXY_ORIGIN','');
define('CC_PROXY_ALLOW_HTTP_REGISTRATION',false);
define('CC_PROXY_PRIMARY_COIN','EFL');
define('CC_PROXY_MAX_REGISTRATIONS',100);
define('CC_PROXY_PRIMARY_RESERVE',20);
define('CC_PROXY_ACCEPTS_REGISTRATIONS',true);
define('CC_PROXY_BOOTSTRAP_URL','https://wallet.communitycoins.org/proxy.php');
define('CC_PROXY_DIRECTORY_MAX',10);

$coinConfiguration=[
    'EFL'=>[
        'versionByte'=>48,
        'maxHeightLag'=>3,
        'maxZeroConfirmationObservers'=>3,
        'legacyRots'=>[
            ['rotId'=>'legacy-efl-1','nickname'=>'EFL-1','host'=>'217.160.153.217','port'=>11014,'status'=>'LEADING','protocol'=>0,'trustedSeed'=>true,'observerPriority'=>0],
            ['rotId'=>'legacy-efl-2','nickname'=>'EFL-2','host'=>'82.165.219.225','port'=>11014,'status'=>'READY','protocol'=>0,'trustedSeed'=>true,'observerPriority'=>1],
            ['rotId'=>'legacy-efl-3','nickname'=>'EFL-3','host'=>'217.160.69.23','port'=>11014,'status'=>'READY','protocol'=>0,'trustedSeed'=>true,'observerPriority'=>2]
        ]
    ],
    'AUR'=>[
        'versionByte'=>23,
        'maxHeightLag'=>3,
        'maxZeroConfirmationObservers'=>1,
        'legacyRots'=>[
            ['rotId'=>'legacy-aur-1','nickname'=>'AUR-1','host'=>'217.160.153.217','port'=>10081,'status'=>'LEADING','protocol'=>0,'trustedSeed'=>true,'observerPriority'=>0]
        ]
    ],
    'CDN'=>[
        'versionByte'=>28,
        'maxHeightLag'=>3,
        'maxZeroConfirmationObservers'=>1,
        'legacyRots'=>[
            ['rotId'=>'legacy-cdn-1','nickname'=>'CDN-1','host'=>'217.160.153.217','port'=>34329,'status'=>'LEADING','protocol'=>0,'trustedSeed'=>true,'observerPriority'=>0]
        ]
    ],
    'DEM'=>[
        'versionByte'=>53,
        'maxHeightLag'=>3,
        'maxZeroConfirmationObservers'=>1,
        'legacyRots'=>[
            ['rotId'=>'legacy-dem-1','nickname'=>'DEM-1','host'=>'217.160.153.217','port'=>4554,'status'=>'LEADING','protocol'=>0,'trustedSeed'=>true,'observerPriority'=>0]
        ]
    ]
];

$configuredServerName=isset($_SERVER['SERVER_NAME'])?strtolower(trim((string)$_SERVER['SERVER_NAME'])):'';
if (!preg_match('/^(?=.{3,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/',$configuredServerName)) {$configuredServerName=false;}
$configuredProxyId=CC_PROXY_ID===''?$configuredServerName:CC_PROXY_ID;
if (!is_string($configuredProxyId) || !preg_match('/^[A-Za-z0-9._-]{3,64}$/',$configuredProxyId)) {$configuredProxyId=false;}
$configuredDataDirectory=CC_PROXY_DATA_DIR;
if (!is_string($configuredDataDirectory) || $configuredDataDirectory==='' || $configuredDataDirectory[0]!=='/' || strpos($configuredDataDirectory,"\0")!==false) {$configuredDataDirectory=false;}
if ($configuredDataDirectory!==false) {$configuredDataDirectory=rtrim($configuredDataDirectory,'/');}
if ($configuredDataDirectory==='') {$configuredDataDirectory=false;}
$configuredOrigin=normalizedOrigin(CC_PROXY_ORIGIN==='' && $configuredServerName!==false?'https://'.$configuredServerName:CC_PROXY_ORIGIN);
if ($configuredOrigin===false || strpos($configuredOrigin,'https://')!==0) {$configuredOrigin=false;}
$configuredPrimaryCoin=is_string(CC_PROXY_PRIMARY_COIN)?strtoupper(trim(CC_PROXY_PRIMARY_COIN)):'';
if ($configuredPrimaryCoin!=='' && !isset($coinConfiguration[$configuredPrimaryCoin])) {$configuredPrimaryCoin=false;}
$configuredPublicUrl=$configuredOrigin===false?false:$configuredOrigin.'/proxy.php';

$rots=[];
$gateway=[
    'proxyId'=>$configuredProxyId,
    'coin'=>'EFL',
    'versionByte'=>48,
    'maxAddresses'=>51,
    'maxZeroConfirmationObservers'=>3,
    'maxRequestBytes'=>65536,
    'maxRawTransactionHex'=>65000,
    'maxStateResponseBytes'=>2097152,
    'maxHistoryResponseBytes'=>2097152,
    'maxTransactionResponseBytes'=>16384,
    'connectTimeout'=>1.0,
    'stateReadTimeout'=>3,
    'historyReadTimeout'=>30,
    'transactionReadTimeout'=>8,
    'statusReadTimeout'=>5,
    'registrationLifetime'=>3600,
    'registrationRetention'=>86400,
    'statusFreshness'=>600,
    'primaryCoin'=>$configuredPrimaryCoin,
    'maxActiveRegistrations'=>max(1,(int)CC_PROXY_MAX_REGISTRATIONS),
    'primaryReserve'=>max(0,(int)CC_PROXY_PRIMARY_RESERVE),
    'maxActiveRegistrationsPerIp'=>16,
    'timestampTolerance'=>120,
    'quarantineSeconds'=>3600,
    'dataDirectory'=>$configuredDataDirectory,
    'registryFile'=>$configuredDataDirectory===false?false:$configuredDataDirectory.'/rot-registry.json',
    'origin'=>$configuredOrigin,
    'publicUrl'=>$configuredPublicUrl,
    'acceptsRegistrations'=>CC_PROXY_ACCEPTS_REGISTRATIONS===true,
    'bootstrapUrl'=>CC_PROXY_BOOTSTRAP_URL,
    'directoryMax'=>max(1,min(10,(int)CC_PROXY_DIRECTORY_MAX)),
    'networkLog'=>$configuredDataDirectory===false?false:$configuredDataDirectory.'/network.log',
    'networkHour'=>$configuredDataDirectory===false?false:$configuredDataDirectory.'/network.hour',
    'networkHealth'=>$configuredDataDirectory===false?false:$configuredDataDirectory.'/network.health'
];
$networkEvent=null;
$requestDeadline=null;

function canonicalCoin($value) {
    global $coinConfiguration;

    if (!is_string($value)) {
        return false;
    }
    $coin=strtoupper(trim($value));
    return isset($coinConfiguration[$coin])?$coin:false;
}

function validateRegistryConfiguration(&$error) {
    global $gateway;

    $error='';
    if ($gateway['proxyId']===false) {
        $error='PROXY_ID_NOT_CONFIGURED';
        return false;
    }
    $directory=$gateway['dataDirectory'];
    if ($directory===false) {
        $error='DATA_DIRECTORY_NOT_CONFIGURED';
        return false;
    }
    if (!is_dir($directory) && !@mkdir($directory,0700,true) && !is_dir($directory)) {
        $error='REGISTRY_DIRECTORY_UNAVAILABLE';
        return false;
    }
    $resolvedDirectory=realpath($directory);
    $documentRoot=isset($_SERVER['DOCUMENT_ROOT'])?realpath($_SERVER['DOCUMENT_ROOT']):false;
    if ($resolvedDirectory===false || $documentRoot===false) {
        $error='REGISTRY_PATH_UNVERIFIED';
        return false;
    }
    $resolvedDirectory=rtrim(str_replace('\\','/',$resolvedDirectory),'/');
    $documentRoot=rtrim(str_replace('\\','/',$documentRoot),'/');
    if ($resolvedDirectory===$documentRoot || strpos($resolvedDirectory,$documentRoot.'/')===0) {
        $error='REGISTRY_INSIDE_WEBROOT';
        return false;
    }
    if (!is_writable($resolvedDirectory)) {
        $error='REGISTRY_DIRECTORY_UNAVAILABLE';
        return false;
    }
    return true;
}

function newRegistry() {
    return [
        'version'=>1,
        'updatedAt'=>time(),
        'rots'=>[],
        'coins'=>[],
        'legacyHealth'=>[],
        'ipFailures'=>[]
    ];
}

function normalizeRegistry($registry) {
    if (!is_array($registry)) {
        $registry=newRegistry();
    }
    if (!isset($registry['version']) || $registry['version']!==1) {$registry['version']=1;}
    if (!isset($registry['rots']) || !is_array($registry['rots'])) {$registry['rots']=[];}
    if (!isset($registry['coins']) || !is_array($registry['coins'])) {$registry['coins']=[];}
    if (!isset($registry['legacyHealth']) || !is_array($registry['legacyHealth'])) {$registry['legacyHealth']=[];}
    if (!isset($registry['ipFailures']) || !is_array($registry['ipFailures'])) {$registry['ipFailures']=[];}
    return $registry;
}

function readRegistry($callback,&$error) {
    global $gateway;

    $error='';
    if (!validateRegistryConfiguration($error)) {
        return false;
    }
    $handle=@fopen($gateway['registryFile'],'r');
    if ($handle===false) {
        $error='REGISTRY_UNAVAILABLE';
        return false;
    }
    if (!flock($handle,LOCK_SH)) {
        fclose($handle);
        $error='REGISTRY_LOCK_FAILED';
        return false;
    }
    $raw=stream_get_contents($handle);
    flock($handle,LOCK_UN);
    fclose($handle);
    $decoded=$raw===''?null:json_decode($raw,true);
    if ($raw!=='' && !is_array($decoded)) {
        $error='REGISTRY_CORRUPT';
        return false;
    }
    $registry=normalizeRegistry($decoded);
    expireRegistryRecords($registry,time(),false);
    return call_user_func_array($callback,[&$registry]);
}

function changeRegistry($callback,&$error) {
    global $gateway;

    $error='';
    if (!validateRegistryConfiguration($error)) {
        return false;
    }
    $handle=@fopen($gateway['registryFile'],'c+');
    if ($handle===false) {
        $error='REGISTRY_UNAVAILABLE';
        return false;
    }
    @chmod($gateway['registryFile'],0600);
    if (!flock($handle,LOCK_EX)) {
        fclose($handle);
        $error='REGISTRY_LOCK_FAILED';
        return false;
    }
    rewind($handle);
    $raw=stream_get_contents($handle);
    $decoded=$raw===''?null:json_decode($raw,true);
    if ($raw!=='' && !is_array($decoded)) {
        flock($handle,LOCK_UN);
        fclose($handle);
        $error='REGISTRY_CORRUPT';
        return false;
    }
    $registry=normalizeRegistry($decoded);
    $beforeChange=json_encode($registry,JSON_UNESCAPED_SLASHES);
    expireRegistryRecords($registry,time(),true);
    $result=call_user_func_array($callback,[&$registry]);
    $afterChange=json_encode($registry,JSON_UNESCAPED_SLASHES);
    if ($beforeChange!==false && $afterChange!==false && hash_equals($beforeChange,$afterChange)) {
        flock($handle,LOCK_UN);
        fclose($handle);
        return $result;
    }
    $registry['updatedAt']=time();
    $encoded=json_encode($registry,JSON_UNESCAPED_SLASHES|JSON_PRETTY_PRINT);
    if ($encoded===false) {
        flock($handle,LOCK_UN);
        fclose($handle);
        $error='REGISTRY_ENCODE_FAILED';
        return false;
    }
    rewind($handle);
    if (!ftruncate($handle,0) || fwrite($handle,$encoded."\n")===false || !fflush($handle)) {
        flock($handle,LOCK_UN);
        fclose($handle);
        $error='REGISTRY_WRITE_FAILED';
        return false;
    }
    flock($handle,LOCK_UN);
    fclose($handle);
    return $result;
}

function expireRegistryRecords(array &$registry,$now,$recordEvents=false) {
    global $gateway;

    foreach ($registry['rots'] as $key=>&$record) {
        if (!is_array($record)) {
            unset($registry['rots'][$key]);
            continue;
        }
        if (isset($record['expiresAt']) && $record['expiresAt']<$now && (!isset($record['status']) || $record['status']!=='ENDED')) {
            $oldStatus=isset($record['status'])?$record['status']:'CANDIDATE';
            $record['status']='ENDED';
            $record['endedAt']=$now;
            $record['endedReason']='REGISTRATION_EXPIRED';
            if ($recordEvents) {
                queueRotMessage($record,'ROT_ENDED','Proxy ended the ROT registration: REGISTRATION_EXPIRED',$now);
                writeHealthEvent(['kind'=>'ROT_STATUS','coin'=>isset($record['coin'])?$record['coin']:null,'rotId'=>isset($record['rotId'])?$record['rotId']:null,'nickname'=>isset($record['nickname'])?$record['nickname']:null,'from'=>$oldStatus,'to'=>'ENDED','reason'=>'REGISTRATION_EXPIRED']);
            }
        }
        if (isset($record['endedAt']) && $record['endedAt']+$gateway['registrationRetention']<$now) {
            unset($registry['rots'][$key]);
        }
    }
    unset($record);
    foreach ($registry['ipFailures'] as $ip=>&$failure) {
        if (!is_array($failure) || !isset($failure['lastFailureAt']) || $failure['lastFailureAt']+86400<$now) {
            unset($registry['ipFailures'][$ip]);
        }
    }
    unset($failure);
}

function registryKey($coin,$rotId) {
    return $coin.'|'.$rotId;
}

function endpointKey($host,$port) {
    return $host.'|'.(int)$port;
}

function legacyRotMatch($coin,$host,$port) {
    global $coinConfiguration;

    if (!isset($coinConfiguration[$coin]['legacyRots'])) {return false;}
    foreach ($coinConfiguration[$coin]['legacyRots'] as $legacy) {
        if ($legacy['host']===$host && $legacy['port']===$port) {return $legacy;}
    }
    return false;
}

function requestSourceIp() {
    $value=isset($_SERVER['REMOTE_ADDR'])?$_SERVER['REMOTE_ADDR']:'';
    return is_string($value) && filter_var($value,FILTER_VALIDATE_IP)!==false?$value:false;
}

function isSecureRequest() {
    if (CC_PROXY_ALLOW_HTTP_REGISTRATION===true) {
        return true;
    }
    return isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']!=='' && strtolower((string)$_SERVER['HTTPS'])!=='off';
}

function recordIpFailure($ip) {
    if ($ip===false) {return;}
    $error='';
    changeRegistry(function(&$registry) use ($ip) {
        $now=time();
        $current=isset($registry['ipFailures'][$ip]) && is_array($registry['ipFailures'][$ip])?$registry['ipFailures'][$ip]:[];
        $failures=isset($current['failures'])?(int)$current['failures']+1:1;
        $exponent=min(8,max(0,$failures-1));
        $seconds=min(86400,300*(2**$exponent));
        $registry['ipFailures'][$ip]=['failures'=>$failures,'lastFailureAt'=>$now,'until'=>$now+$seconds];
        if (count($registry['ipFailures'])>4096) {
            uasort($registry['ipFailures'],function($left,$right) {
                if ($left['lastFailureAt']===$right['lastFailureAt']) {return 0;}
                return $left['lastFailureAt']<$right['lastFailureAt']?-1:1;
            });
            while (count($registry['ipFailures'])>4096) {array_shift($registry['ipFailures']);}
        }
        return true;
    },$error);
}

function clearIpFailure(array &$registry,$ip) {
    if (isset($registry['ipFailures'][$ip])) {
        unset($registry['ipFailures'][$ip]);
    }
}

function ipCooldown(array $registry,$ip,$now) {
    if (!isset($registry['ipFailures'][$ip]) || !is_array($registry['ipFailures'][$ip])) {
        return 0;
    }
    $until=isset($registry['ipFailures'][$ip]['until'])?(int)$registry['ipFailures'][$ip]['until']:0;
    return max(0,$until-$now);
}

function safeRotId($value) {
    return is_string($value) && preg_match('/^[A-Za-z0-9._-]{8,64}$/',$value)?$value:false;
}

function safeNickname($value) {
    return is_string($value) && preg_match('/^[A-Za-z0-9._-]{1,32}$/',$value)?$value:false;
}

function writeHealthEvent(array $event) {
    global $gateway;

    if ($gateway['networkHealth']===false) {return false;}
    $event=array_merge(['time'=>gmdate('c')],$event);
    unset($event['host'],$event['port'],$event['authToken']);
    $json=json_encode($event,JSON_UNESCAPED_SLASHES);
    return $json!==false && @file_put_contents($gateway['networkHealth'],$json."\n",FILE_APPEND|LOCK_EX)!==false;
}

function nextMessageSequence(array $record) {
    return isset($record['nextMessageSequence']) && is_int($record['nextMessageSequence']) && $record['nextMessageSequence']>0?$record['nextMessageSequence']:1;
}

function queueRotMessage(array &$record,$code,$text,$now=null) {
    if (!is_string($code) || !preg_match('/^[A-Z0-9_]{3,48}$/',$code)) {return false;}
    $text=substr(trim((string)$text),0,256);
    if ($text==='') {return false;}
    $now=is_int($now)?$now:time();
    if (!isset($record['messages']) || !is_array($record['messages'])) {$record['messages']=[];}
    if (count($record['messages'])>=32) {
        array_shift($record['messages']);
        $sequence=nextMessageSequence($record);
        $record['nextMessageSequence']=$sequence+1;
        $record['messages'][]=['sequence'=>$sequence,'time'=>$now,'code'=>'MESSAGE_OVERFLOW','text'=>'Earlier proxy messages were discarded by the bounded queue'];
        return true;
    }
    $sequence=nextMessageSequence($record);
    $record['nextMessageSequence']=$sequence+1;
    $record['messages'][]=['sequence'=>$sequence,'time'=>$now,'code'=>$code,'text'=>$text];
    return true;
}

function acknowledgeRotMessages(array &$record,$sequence) {
    if (!is_int($sequence) || $sequence<0) {return false;}
    $currentAck=isset($record['ackSequence'])?(int)$record['ackSequence']:0;
    if ($sequence<$currentAck) {$sequence=$currentAck;}
    $lastIssued=nextMessageSequence($record)-1;
    if ($sequence>$lastIssued) {return false;}
    if (!isset($record['messages']) || !is_array($record['messages'])) {$record['messages']=[];}
    $record['messages']=array_values(array_filter($record['messages'],function($message) use ($sequence) {
        return !is_array($message) || !isset($message['sequence']) || (int)$message['sequence']>$sequence;
    }));
    $record['ackSequence']=$sequence;
    return true;
}

function pendingRotMessages(array $record) {
    $messages=isset($record['messages']) && is_array($record['messages'])?array_slice(array_values($record['messages']),0,16):[];
    $result=[];
    foreach ($messages as $message) {
        if (!is_array($message) || !isset($message['sequence'],$message['time'],$message['code'],$message['text'])) {continue;}
        $item=[
            'sequence'=>(int)$message['sequence'],
            'time'=>(int)$message['time'],
            'code'=>substr((string)$message['code'],0,48),
            'text'=>substr((string)$message['text'],0,256)
        ];
        if (isset($message['count'])) {$item['count']=max(1,(int)$message['count']);}
        if (isset($message['lastTime'])) {$item['lastTime']=(int)$message['lastTime'];}
        $result[]=$item;
    }
    return $result;
}

function transitionMessage($from,$to,$reason) {
    if ($from===$to) {return false;}
    $code='ROT_'.$to;
    $text='Proxy changed ROT status from '.$from.' to '.$to;
    if (is_string($reason) && $reason!=='') {$text.=': '.$reason;}
    return ['code'=>$code,'text'=>$text];
}

function makeAuthToken() {
    try {
        return bin2hex(random_bytes(32));
    } catch (Exception $exception) {
        return false;
    }
}

function runRotRegisterOperation(array $input) {
    global $gateway,$networkEvent;

    $networkEvent['route']='rotRegister';
    if (!$gateway['acceptsRegistrations']) {
        sendJson(['ok'=>false,'error'=>'REGISTRATION_DISABLED'],503);
        return;
    }
    $sourceIp=requestSourceIp();
    $configurationError='';
    if (!validateRegistryConfiguration($configurationError)) {
        sendJson(['ok'=>false,'error'=>$configurationError],503);
        return;
    }
    if (!isSecureRequest()) {
        recordIpFailure($sourceIp);
        sendJson(['ok'=>false,'error'=>'HTTPS_REQUIRED'],426);
        return;
    }
    $coin=canonicalCoin(isset($input['coin'])?$input['coin']:null);
    $rotId=safeRotId(isset($input['rotId'])?$input['rotId']:null);
    $nickname=safeNickname(isset($input['nickname'])?$input['nickname']:null);
    $port=isset($input['port'])?$input['port']:null;
    if ($coin===false || $rotId===false || $nickname===false || !is_int($port) || $port<1 || $port>65535 || $sourceIp===false || !isset($input['protocol']) || $input['protocol']!==1) {
        recordIpFailure($sourceIp);
        sendJson(['ok'=>false,'error'=>'INVALID_REGISTRATION'],400);
        return;
    }
    $authToken=makeAuthToken();
    $registrationVersion=makeAuthToken();
    if ($authToken===false || $registrationVersion===false) {
        sendJson(['ok'=>false,'error'=>'AUTH_TOKEN_FAILED'],500);
        return;
    }
    $legacy=legacyRotMatch($coin,$sourceIp,$port);
    $error='';
    $result=changeRegistry(function(&$registry) use ($coin,$rotId,$nickname,$port,$sourceIp,$authToken,$registrationVersion,$legacy,$gateway) {
        $now=time();
        $cooldown=ipCooldown($registry,$sourceIp,$now);
        if ($cooldown>0) {
            return ['cooldown'=>$cooldown];
        }
        $key=registryKey($coin,$rotId);
        $previous=isset($registry['rots'][$key]) && is_array($registry['rots'][$key])?$registry['rots'][$key]:[];
        if (isset($previous['status'],$previous['host']) && $previous['status']!=='ENDED' && $previous['host']!==$sourceIp) {
            return ['abuse'=>true];
        }
        $activeTotal=0;
        $activeForIp=0;
        foreach ($registry['rots'] as $existingKey=>$existing) {
            if (!is_array($existing) || !isset($existing['status']) || $existing['status']==='ENDED') {continue;}
            $activeTotal++;
            if (isset($existing['host']) && $existing['host']===$sourceIp && $existingKey!==$key) {$activeForIp++;}
        }
        $isExisting=isset($registry['rots'][$key]);
        $withinPrimaryReserve=$gateway['primaryCoin']!==false && $gateway['primaryCoin']!=='' && $coin===$gateway['primaryCoin'] && $activeTotal<$gateway['maxActiveRegistrations']+$gateway['primaryReserve'];
        $withinGeneralCapacity=$activeTotal<$gateway['maxActiveRegistrations'];
        if (!$isExisting && ((!$withinGeneralCapacity && !$withinPrimaryReserve) || $activeForIp>=$gateway['maxActiveRegistrationsPerIp'])) {
            return ['abuse'=>true];
        }
        $registry['rots'][$key]=[
            'protocol'=>1,
            'coin'=>$coin,
            'rotId'=>$rotId,
            'nickname'=>$nickname,
            'host'=>$sourceIp,
            'port'=>$port,
            'authToken'=>$authToken,
            'registrationVersion'=>$registrationVersion,
            'trustedSeed'=>$legacy!==false,
            'observerPriority'=>$legacy!==false?$legacy['observerPriority']:1000,
            'status'=>'CANDIDATE',
            'registeredAt'=>$now,
            'lastSeenAt'=>$now,
            'lastStatusAt'=>0,
            'readyUntil'=>0,
            'expiresAt'=>$now+$gateway['registrationLifetime'],
            'statusLatencyMs'=>isset($previous['statusLatencyMs'])?$previous['statusLatencyMs']:null,
            'statusSamples'=>isset($previous['statusSamples'])?(int)$previous['statusSamples']:0,
            'checkpoints'=>isset($previous['checkpoints']) && is_array($previous['checkpoints'])?$previous['checkpoints']:[],
            'checkpointFailures'=>isset($previous['checkpointFailures'])?(int)$previous['checkpointFailures']:0,
            'retryAt'=>0,
            'backoffUntil'=>0,
            'consecutiveFailures'=>0,
            'messages'=>isset($previous['messages']) && is_array($previous['messages'])?$previous['messages']:[],
            'nextMessageSequence'=>isset($previous['nextMessageSequence'])?(int)$previous['nextMessageSequence']:1,
            'ackSequence'=>isset($previous['ackSequence'])?(int)$previous['ackSequence']:0
        ];
        clearIpFailure($registry,$sourceIp);
        return ['record'=>$registry['rots'][$key]];
    },$error);
    if ($result===false) {
        sendJson(['ok'=>false,'error'=>$error],503);
        return;
    }
    if (isset($result['cooldown'])) {
        sendJson(['ok'=>false,'error'=>'REGISTRATION_COOLDOWN','retryAfter'=>$result['cooldown']],429);
        return;
    }
    if (isset($result['abuse'])) {
        recordIpFailure($sourceIp);
        sendJson(['ok'=>false,'error'=>'REGISTRATION_LIMIT'],429);
        return;
    }
    $record=$result['record'];
    $networkEvent['rotNickname']=$record['nickname'];
    $networkEvent['rotStatus']=$record['status'];
    $networkEvent['outcome']='CANDIDATE';
    sendJson([
        'ok'=>true,
        'protocol'=>1,
        'proxyId'=>$gateway['proxyId'],
        'rotId'=>$rotId,
        'nickname'=>$record['nickname'],
        'coin'=>$coin,
        'status'=>'CANDIDATE',
        'authToken'=>$authToken,
        'expiresIn'=>$gateway['registrationLifetime'],
        'timestampTolerance'=>$gateway['timestampTolerance']
    ],201);
}

function registrationRequestMac(array $record,$timestamp,$ackSequence) {
    global $gateway;

    $message='CCP1|REGISTRATION|'.$gateway['proxyId'].'|'.$record['rotId'].'|'.$record['coin'].'|'.$timestamp.'|'.$ackSequence;
    return hash_hmac('sha256',$message,$record['authToken']);
}

function registrationMessagesDigest(array $messages) {
    $json=json_encode(array_values($messages),JSON_UNESCAPED_SLASHES);
    return hash('sha256',$json===false?'[]':$json);
}

function signedRegistrationResponse(array $record,array $body) {
    global $gateway;

    $timestamp=time();
    $body['timestamp']=$timestamp;
    if (!isset($body['messages']) || !is_array($body['messages'])) {$body['messages']=[];}
    if (!isset($body['messageSequence']) || !is_int($body['messageSequence'])) {$body['messageSequence']=0;}
    $ok=!empty($body['ok'])?'1':'0';
    $error=isset($body['error'])?(string)$body['error']:'';
    $nickname=isset($body['nickname'])?(string)$body['nickname']:'';
    $latency=isset($body['statusLatencyMs']) && is_int($body['statusLatencyMs'])?(string)$body['statusLatencyMs']:'';
    $serverTime=isset($body['serverTime']) && is_int($body['serverTime'])?(string)$body['serverTime']:'';
    $message='CCP1|REGISTRATION-RES|'.$gateway['proxyId'].'|'.$record['rotId'].'|'.$record['coin'].'|'.$timestamp.'|'.$ok.'|'.$body['status'].'|'.$error.'|'.$nickname.'|'.$body['expiresIn'].'|'.$body['retryAfter'].'|'.$latency.'|'.$body['messageSequence'].'|'.registrationMessagesDigest($body['messages']).'|'.$serverTime;
    $body['mac']=hash_hmac('sha256',$message,$record['authToken']);
    return $body;
}

function getRegistryRecord($coin,$rotId,&$error) {
    $key=registryKey($coin,$rotId);
    return readRegistry(function(&$registry) use ($key) {
        return isset($registry['rots'][$key]) && is_array($registry['rots'][$key])?$registry['rots'][$key]:null;
    },$error);
}

function runRotRegistrationStatusOperation(array $input) {
    global $gateway,$networkEvent;

    $networkEvent['route']='rotRegistrationStatus';
    $sourceIp=requestSourceIp();
    $configurationError='';
    if (!validateRegistryConfiguration($configurationError)) {
        sendJson(['ok'=>false,'error'=>$configurationError],503);
        return;
    }
    $coin=canonicalCoin(isset($input['coin'])?$input['coin']:null);
    $rotId=safeRotId(isset($input['rotId'])?$input['rotId']:null);
    $timestamp=isset($input['timestamp'])?$input['timestamp']:null;
    $ackSequence=isset($input['ackSequence'])?$input['ackSequence']:null;
    $mac=isset($input['mac'])?$input['mac']:null;
    if ($coin===false || $rotId===false || !is_int($timestamp) || !is_int($ackSequence) || $ackSequence<0 || !is_string($mac) || !preg_match('/^[0-9a-f]{64}$/',$mac)) {
        recordIpFailure($sourceIp);
        sendJson(['ok'=>false,'error'=>'INVALID_REGISTRATION_AUTH'],401);
        return;
    }
    $error='';
    $record=getRegistryRecord($coin,$rotId,$error);
    if ($record===false) {
        sendJson(['ok'=>false,'error'=>$error],503);
        return;
    }
    if (!is_array($record) || !isset($record['authToken'],$record['host']) || $sourceIp===false || !hash_equals($record['host'],$sourceIp) || !hash_equals(registrationRequestMac($record,$timestamp,$ackSequence),$mac)) {
        recordIpFailure($sourceIp);
        sendJson(['ok'=>false,'error'=>'INVALID_REGISTRATION_AUTH'],401);
        return;
    }
    if ($ackSequence>nextMessageSequence($record)-1) {
        recordIpFailure($sourceIp);
        sendJson(['ok'=>false,'error'=>'INVALID_MESSAGE_ACK'],400);
        return;
    }
    $now=time();
    if (abs($now-$timestamp)>$gateway['timestampTolerance']) {
        $body=[
            'ok'=>false,
            'protocol'=>1,
            'proxyId'=>$gateway['proxyId'],
            'rotId'=>$record['rotId'],
            'coin'=>$record['coin'],
            'status'=>$record['status'],
            'error'=>'CLOCK_SKEW',
            'serverTime'=>$now,
            'expiresIn'=>$record['status']==='ENDED'?0:max(0,$record['expiresAt']-$now),
            'retryAfter'=>0,
            'messageSequence'=>$ackSequence,
            'messages'=>[]
        ];
        $networkEvent['outcome']='CLOCK_SKEW';
        sendJson(signedRegistrationResponse($record,$body),409);
        return;
    }
    $retryDue=!isset($record['retryAt']) || $record['retryAt']<=$now;
    $shouldProbe=(in_array($record['status'],['CANDIDATE','RECOVERING','QUARANTINED'],true) && $retryDue) || (in_array($record['status'],['LEADING','READY'],true) && isset($record['lastStatusAt']) && $record['lastStatusAt']+300<=$now);
    if ($record['status']!=='ENDED' && $shouldProbe) {
        $record=probeRegisteredRot($record);
    }
    $error='';
    $updated=changeRegistry(function(&$registry) use ($record,$now,$gateway,$ackSequence) {
        $key=registryKey($record['coin'],$record['rotId']);
        if (!isset($registry['rots'][$key]) || !is_array($registry['rots'][$key])) {return ['missing'=>true];}
        $current=&$registry['rots'][$key];
        if (!isset($current['registrationVersion'],$record['registrationVersion']) || !hash_equals($current['registrationVersion'],$record['registrationVersion'])) {return ['changed'=>true];}
        if (!acknowledgeRotMessages($current,$ackSequence)) {return ['invalidAck'=>true];}
        $oldStatus=isset($current['status'])?$current['status']:'CANDIDATE';
        $probeFields=['status','statusReason','lastStatusAt','readyUntil','retryAt','statusLatencyMs','statusSamples','lastHeight','lastBlockHash','heightReference','checkpoints','checkpointFailures','consecutiveFailures','backoffUntil','endedAt','endedReason'];
        foreach ($probeFields as $field) {
            if (array_key_exists($field,$record)) {$current[$field]=$record[$field];}
        }
        $current['lastSeenAt']=$now;
        if ($current['status']!=='ENDED') {$current['expiresAt']=$now+$gateway['registrationLifetime'];}
        $newStatus=isset($current['status'])?$current['status']:$oldStatus;
        $reason=isset($current['statusReason']) && $current['statusReason']!==''?$current['statusReason']:(isset($current['endedReason'])?$current['endedReason']:'');
        $message=transitionMessage($oldStatus,$newStatus,$reason);
        if ($message!==false) {queueRotMessage($current,$message['code'],$message['text'],$now);}
        return ['record'=>$current,'transition'=>$message===false?null:['from'=>$oldStatus,'to'=>$newStatus,'reason'=>$reason]];
    },$error);
    if ($updated===false) {
        sendJson(['ok'=>false,'error'=>$error],503);
        return;
    }
    if (isset($updated['changed'])) {
        sendJson(['ok'=>false,'error'=>'REGISTRATION_CHANGED'],409);
        return;
    }
    if (isset($updated['invalidAck'])) {
        sendJson(['ok'=>false,'error'=>'INVALID_MESSAGE_ACK'],400);
        return;
    }
    if (isset($updated['missing']) || !isset($updated['record']) || !is_array($updated['record'])) {
        sendJson(['ok'=>false,'error'=>'REGISTRATION_NOT_FOUND'],404);
        return;
    }
    $transition=isset($updated['transition'])?$updated['transition']:null;
    $updated=$updated['record'];
    if (is_array($transition)) {
        writeHealthEvent(['kind'=>'ROT_STATUS','coin'=>$updated['coin'],'rotId'=>$updated['rotId'],'nickname'=>$updated['nickname'],'from'=>$transition['from'],'to'=>$transition['to'],'reason'=>$transition['reason']]);
    }
    $messages=pendingRotMessages($updated);
    $messageSequence=count($messages)>0?(int)$messages[count($messages)-1]['sequence']:$ackSequence;
    $body=[
        'ok'=>true,
        'protocol'=>1,
        'proxyId'=>$gateway['proxyId'],
        'rotId'=>$updated['rotId'],
        'nickname'=>$updated['nickname'],
        'coin'=>$updated['coin'],
        'status'=>$updated['status'],
        'expiresIn'=>$updated['status']==='ENDED'?0:max(0,$updated['expiresAt']-$now),
        'retryAfter'=>isset($updated['retryAt'])?max(0,$updated['retryAt']-$now):0,
        'statusLatencyMs'=>isset($updated['statusLatencyMs'])?$updated['statusLatencyMs']:null,
        'messageSequence'=>$messageSequence,
        'messages'=>$messages
    ];
    $networkEvent['rotNickname']=$updated['nickname'];
    $networkEvent['rotStatus']=$updated['status'];
    $networkEvent['statusLatencyMs']=isset($updated['statusLatencyMs'])?$updated['statusLatencyMs']:null;
    $networkEvent['outcome']=$updated['status'];
    sendJson(signedRegistrationResponse($updated,$body),200);
}

function registeredRotsForCoin($coin) {
    global $gateway;

    $error='';
    $records=readRegistry(function(&$registry) use ($coin,$gateway) {
        $result=[];
        $now=time();
        foreach ($registry['rots'] as $record) {
            $fresh=isset($record['readyUntil'])?$record['readyUntil']>=$now:(isset($record['lastStatusAt']) && $record['lastStatusAt']+$gateway['statusFreshness']>=$now);
            $available=!isset($record['backoffUntil']) || $record['backoffUntil']<=$now;
            if (is_array($record) && isset($record['coin'],$record['status']) && $record['coin']===$coin && in_array($record['status'],['LEADING','READY'],true) && $fresh && $available) {
                $result[]=$record;
            }
        }
        return $result;
    },$error);
    return is_array($records)?$records:[];
}

function legacyHealthForCoin($coin) {
    $error='';
    $health=readRegistry(function(&$registry) use ($coin) {
        $prefix=$coin.'|';
        $result=[];
        foreach ($registry['legacyHealth'] as $key=>$value) {
            if (strpos($key,$prefix)===0 && is_array($value)) {$result[$key]=$value;}
        }
        return $result;
    },$error);
    return is_array($health)?$health:[];
}

function rotsForCoin($coin) {
    global $coinConfiguration;

    $registered=registeredRotsForCoin($coin);
    $registeredByEndpoint=[];
    $additional=[];
    $deferred=[];
    $legacyHealth=legacyHealthForCoin($coin);
    $now=time();
    foreach ($registered as $rot) {$registeredByEndpoint[endpointKey($rot['host'],$rot['port'])]=$rot;}
    $rots=[];
    foreach ($coinConfiguration[$coin]['legacyRots'] as $rot) {
        $key=endpointKey($rot['host'],$rot['port']);
        if (isset($registeredByEndpoint[$key])) {
            $replacement=$registeredByEndpoint[$key];
            $replacement['observerPriority']=$rot['observerPriority'];
            $rots[]=$replacement;
            unset($registeredByEndpoint[$key]);
        } else {
            $rot['coin']=$coin;
            $healthKey=$coin.'|'.$key;
            if (isset($legacyHealth[$healthKey]['backoffUntil']) && $legacyHealth[$healthKey]['backoffUntil']>$now) {
                $rot['backoffUntil']=$legacyHealth[$healthKey]['backoffUntil'];
                $rot['consecutiveFailures']=isset($legacyHealth[$healthKey]['consecutiveFailures'])?(int)$legacyHealth[$healthKey]['consecutiveFailures']:0;
                $deferred[]=$rot;
            } else {
                if (isset($legacyHealth[$healthKey]['consecutiveFailures'])) {$rot['consecutiveFailures']=(int)$legacyHealth[$healthKey]['consecutiveFailures'];}
                $rots[]=$rot;
            }
        }
    }
    foreach ($registeredByEndpoint as $rot) {$additional[]=$rot;}
    usort($additional,function($left,$right) {
        $leftTime=isset($left['registeredAt'])?(int)$left['registeredAt']:0;
        $rightTime=isset($right['registeredAt'])?(int)$right['registeredAt']:0;
        if ($leftTime===$rightTime) {return strcmp($left['rotId'],$right['rotId']);}
        return $leftTime<$rightTime?-1:1;
    });
    foreach ($additional as $rot) {$rots[]=$rot;}
    if (count($rots)===0 && count($deferred)>0) {
        usort($deferred,function($left,$right) {return $left['backoffUntil']<$right['backoffUntil']?-1:1;});
        $rots[]=$deferred[0];
    }
    return $rots;
}

function configureCoin($coin) {
    global $coinConfiguration,$gateway,$rots;

    if (!isset($coinConfiguration[$coin])) {return false;}
    $gateway['coin']=$coin;
    $gateway['versionByte']=$coinConfiguration[$coin]['versionByte'];
    $gateway['maxZeroConfirmationObservers']=$coinConfiguration[$coin]['maxZeroConfirmationObservers'];
    $rots=rotsForCoin($coin);
    return true;
}

function routeableRotCount($coin) {
    global $coinConfiguration;

    if (!isset($coinConfiguration[$coin])) {return 0;}
    $registered=registeredRotsForCoin($coin);
    $endpoints=[];
    foreach ($registered as $rot) {
        if (isset($rot['host'],$rot['port'])) {$endpoints[endpointKey($rot['host'],$rot['port'])]=true;}
    }
    $health=legacyHealthForCoin($coin);
    $now=time();
    foreach ($coinConfiguration[$coin]['legacyRots'] as $rot) {
        $endpoint=endpointKey($rot['host'],$rot['port']);
        if (isset($endpoints[$endpoint])) {continue;}
        $key=$coin.'|'.$endpoint;
        if (isset($health[$key]['backoffUntil']) && (int)$health[$key]['backoffUntil']>$now) {continue;}
        $endpoints[$endpoint]=true;
    }
    return count($endpoints);
}

function publicProxyInfo() {
    global $gateway,$coinConfiguration;

    if ($gateway['proxyId']===false || $gateway['publicUrl']===false) {return false;}
    $counts=[];
    foreach (array_keys($coinConfiguration) as $coin) {$counts[$coin]=routeableRotCount($coin);}
    return [
        'proxyId'=>$gateway['proxyId'],
        'proxyUrl'=>$gateway['publicUrl'],
        'walletOrigin'=>$gateway['origin'],
        'acceptsRegistrations'=>$gateway['acceptsRegistrations'],
        'acceptedCoins'=>array_values(array_keys($coinConfiguration)),
        'routeableRots'=>$counts,
        'observedAt'=>time()
    ];
}

function runProxyPingOperation(array $input) {
    global $gateway,$networkEvent;

    $networkEvent['route']='proxyPing';
    $nonce=isset($input['nonce'])?$input['nonce']:null;
    if (!isset($input['protocol']) || $input['protocol']!==1 || !is_string($nonce) || !preg_match('/^[0-9a-f]{32}$/',$nonce) || $gateway['proxyId']===false) {
        sendJson(['ok'=>false,'error'=>'INVALID_PROXY_PING'],400);
        return;
    }
    $networkEvent['outcome']='OK';
    sendJson(['ok'=>true,'protocol'=>1,'proxyId'=>$gateway['proxyId'],'nonce'=>$nonce]);
}

function runProxyInfoOperation() {
    global $networkEvent;

    $networkEvent['route']='proxyInfo';
    $info=publicProxyInfo();
    if ($info===false) {
        sendJson(['ok'=>false,'error'=>'PROXY_INFO_UNAVAILABLE'],503);
        return;
    }
    $networkEvent['outcome']='OK';
    sendJson(array_merge(['ok'=>true,'protocol'=>1],$info));
}

function runProxyDirectoryOperation() {
    global $gateway,$networkEvent;

    $networkEvent['route']='proxyDirectory';
    $info=publicProxyInfo();
    if ($info===false) {
        sendJson(['ok'=>false,'error'=>'PROXY_DIRECTORY_UNAVAILABLE'],503);
        return;
    }
    $now=time();
    $networkEvent['outcome']='SELF_ONLY';
    sendJson([
        'ok'=>true,
        'protocol'=>1,
        'generatedAt'=>$now,
        'expiresAt'=>$now+86400,
        'bootstrap'=>$gateway['proxyId'],
        'proxies'=>[array_merge($info,['observedAt'=>$now])]
    ]);
}

function orderRotsForRouting(array $rots) {
    $ranked=[];
    $best=null;
    foreach ($rots as $rot) {
        if (isset($rot['statusLatencyMs']) && is_numeric($rot['statusLatencyMs']) && $rot['statusLatencyMs']>0) {
            $best=$best===null?(float)$rot['statusLatencyMs']:min($best,(float)$rot['statusLatencyMs']);
        }
    }
    foreach ($rots as $rot) {
        $latency=isset($rot['statusLatencyMs']) && is_numeric($rot['statusLatencyMs'])?(float)$rot['statusLatencyMs']:0;
        $weight=1.0;
        if ($best!==null && $latency>$best*1.25+20) {$weight=max(0.15,$best/$latency);}
        $random=max(1,mt_rand())/mt_getrandmax();
        $ranked[]=['score'=>-log($random)/$weight,'rot'=>$rot];
    }
    usort($ranked,function($left,$right) {
        if ($left['score']===$right['score']) {return 0;}
        return $left['score']<$right['score']?-1:1;
    });
    return array_map(function($item) {return $item['rot'];},$ranked);
}

function writeNetworkLog($json,$status) {
    global $gateway,$networkEvent;

    if (!is_array($networkEvent) || !is_file($gateway['networkLog']) || !is_writable($gateway['networkLog'])) {
        return;
    }
    $entry=$networkEvent;
    $entry['proxyId']=$gateway['proxyId'];
    $entry['coin']=$gateway['coin'];
    $entry['clientResponseBytes']=strlen($json);
    $entry['payloadBytesTotal']=$entry['clientRequestBytes']+$entry['clientResponseBytes']+$entry['rotRequestBytes']+$entry['rotResponseBytes'];
    $entry['httpStatus']=$status;
    $entry['relayMs']=(int)round((microtime(true)-$entry['started'])*1000);
    $entry['outcome']=isset($entry['outcome'])?$entry['outcome']:'ERROR';
    unset($entry['started']);
    $line=json_encode($entry,JSON_UNESCAPED_SLASHES);
    if ($line!==false) {
        @file_put_contents($gateway['networkLog'],$line."\n",FILE_APPEND|LOCK_EX);
    }
}

function normalizedOrigin($value) {
    if (!is_string($value) || $value==='') {return false;}
    $parts=parse_url($value);
    if (!is_array($parts) || !isset($parts['scheme'],$parts['host']) || isset($parts['user']) || isset($parts['pass']) || isset($parts['path']) && $parts['path']!=='') {return false;}
    $scheme=strtolower($parts['scheme']);
    if ($scheme!=='http' && $scheme!=='https') {return false;}
    $origin=$scheme.'://'.strtolower($parts['host']);
    if (isset($parts['port']) && !(($scheme==='https' && $parts['port']===443) || ($scheme==='http' && $parts['port']===80))) {$origin.=':'.$parts['port'];}
    return $origin;
}

function browserRequestAllowed() {
    global $gateway;

    $fetchSite=isset($_SERVER['HTTP_SEC_FETCH_SITE'])?strtolower((string)$_SERVER['HTTP_SEC_FETCH_SITE']):'';
    if ($fetchSite==='cross-site') {return false;}
    if (!isset($_SERVER['HTTP_ORIGIN']) || $_SERVER['HTTP_ORIGIN']==='') {return true;}
    $origin=normalizedOrigin($_SERVER['HTTP_ORIGIN']);
    $expected=$gateway['origin'];
    return $origin!==false && $expected!==false && hash_equals($expected,$origin);
}

function sendJson(array $body,$status=200) {
    if (!headers_sent()) {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
        header('Pragma: no-cache');
    }
    $json=json_encode($body,JSON_UNESCAPED_SLASHES);
    if ($json===false) {
        $json='{"ok":false,"error":"JSON_ENCODE_FAILED"}';
    }
    writeNetworkLog($json,$status);
    echo $json;
}

function writeSocketRequest($socket,$request,&$bytesWritten,$deadline=null) {
    $bytesWritten=0;
    $offset=0;
    $length=strlen($request);
    while ($offset<$length) {
        if ($deadline!==null) {
            $remaining=$deadline-microtime(true);
            if ($remaining<=0) {return false;}
            setSocketTimeRemaining($socket,$remaining);
        }
        $written=@fwrite($socket,substr($request,$offset));
        if ($written===false || $written===0) {
            return false;
        }
        $offset+=$written;
        $bytesWritten+=$written;
    }
    return true;
}

function setRequestBudget($operation) {
    global $requestDeadline;

    $seconds=7;
    if ($operation==='history') {$seconds=40;}
    elseif ($operation==='broadcast' || $operation==='transactionStatus' || $operation==='zeroConfirmation') {$seconds=20;}
    elseif ($operation==='rotRegister' || $operation==='rotRegistrationStatus') {$seconds=15;}
    elseif ($operation==='proxyPing' || $operation==='proxyInfo' || $operation==='proxyDirectory') {$seconds=5;}
    $requestDeadline=microtime(true)+$seconds;
}

function remainingRequestTime() {
    global $requestDeadline;

    if (!is_float($requestDeadline) && !is_int($requestDeadline)) {return 60.0;}
    return max(0.0,$requestDeadline-microtime(true));
}

function setSocketTimeRemaining($socket,$seconds) {
    $seconds=max(0.001,$seconds);
    $whole=(int)floor($seconds);
    $microseconds=(int)floor(($seconds-$whole)*1000000);
    return stream_set_timeout($socket,$whole,$microseconds);
}

function rotIdentity(array $rot) {
    return [
        'rotId'=>isset($rot['rotId'])?$rot['rotId']:null,
        'rotCoin'=>isset($rot['coin'])?$rot['coin']:null,
        'rotHost'=>isset($rot['host'])?$rot['host']:null,
        'rotPort'=>isset($rot['port'])?$rot['port']:null,
        'rotProtocol'=>isset($rot['protocol'])?$rot['protocol']:0,
        'registrationVersion'=>isset($rot['registrationVersion'])?$rot['registrationVersion']:null,
        'rotNickname'=>isset($rot['nickname'])?$rot['nickname']:null,
        'rotStatus'=>isset($rot['status'])?$rot['status']:null,
        'statusLatencyMs'=>isset($rot['statusLatencyMs'])?$rot['statusLatencyMs']:null,
        'hadFailures'=>isset($rot['consecutiveFailures']) && (int)$rot['consecutiveFailures']>0
    ];
}

function wrapRotRequest(array $rot,$body) {
    global $gateway;

    if (!isset($rot['protocol']) || $rot['protocol']!==1) {return $body;}
    if (!isset($rot['rotId'],$rot['authToken'])) {return false;}
    $body=rtrim($body,"\r\n");
    $timestamp=time();
    $mac=hash_hmac('sha256','CCP1|REQ|'.$gateway['proxyId'].'|'.$rot['rotId'].'|'.$timestamp.'|'.$body,$rot['authToken']);
    return 'CCP1|'.$gateway['proxyId'].'|'.$rot['rotId'].'|'.$timestamp.'|'.$mac.'|'.$body."\n";
}

function unwrapRotResponse(array $rot,$raw) {
    global $gateway;

    if (!isset($rot['protocol']) || $rot['protocol']!==1) {return $raw;}
    if (!isset($rot['rotId'],$rot['authToken'])) {return false;}
    $parts=explode('|',$raw,6);
    if (count($parts)!==6 || $parts[0]!=='CCP1' || !hash_equals($gateway['proxyId'],$parts[1]) || !hash_equals($rot['rotId'],$parts[2]) || !preg_match('/^-?[0-9]+$/',$parts[3]) || !preg_match('/^[0-9a-f]{64}$/',$parts[4])) {
        return false;
    }
    $timestamp=(int)$parts[3];
    if (abs(time()-$timestamp)>$gateway['timestampTolerance']) {return false;}
    $expected=hash_hmac('sha256','CCP1|RES|'.$gateway['proxyId'].'|'.$rot['rotId'].'|'.$timestamp.'|'.$parts[5],$rot['authToken']);
    return hash_equals($expected,$parts[4])?$parts[5]:false;
}

function exchangeWithRot(array $rot,$request,$readTimeout,$maxResponseBytes) {
    global $gateway;

    $started=microtime(true);
    $requestBytes=0;
    $responseBytes=0;
    $request=wrapRotRequest($rot,$request);
    if ($request===false) {
        return array_merge(['technical'=>true,'submitted'=>false,'requestBytes'=>0,'responseBytes'=>0,'roundTripMs'=>0],rotIdentity($rot));
    }
    $remaining=remainingRequestTime();
    if ($remaining<=0) {
        return array_merge(['technical'=>true,'submitted'=>false,'skipFailure'=>true,'requestBytes'=>0,'responseBytes'=>0,'roundTripMs'=>0],rotIdentity($rot));
    }
    $host=strpos($rot['host'],':')===false?$rot['host']:'['.$rot['host'].']';
    $endpoint='tcp://'.$host.':'.$rot['port'];
    $absoluteDeadline=min($started+$readTimeout,microtime(true)+$remaining);
    $errorNumber=0;
    $errorMessage='';
    $socket=@stream_socket_client(
        $endpoint,
        $errorNumber,
        $errorMessage,
        min($gateway['connectTimeout'],$remaining),
        STREAM_CLIENT_CONNECT
    );
    if ($socket===false) {
        return array_merge(['technical'=>true,'submitted'=>false,'requestBytes'=>0,'responseBytes'=>0,'roundTripMs'=>(int)round((microtime(true)-$started)*1000)],rotIdentity($rot));
    }

    setSocketTimeRemaining($socket,max(0.001,$absoluteDeadline-microtime(true)));
    if (!writeSocketRequest($socket,$request,$requestBytes,$absoluteDeadline)) {
        fclose($socket);
        return array_merge(['technical'=>true,'submitted'=>$requestBytes>0,'requestBytes'=>$requestBytes,'responseBytes'=>0,'roundTripMs'=>(int)round((microtime(true)-$started)*1000)],rotIdentity($rot));
    }

    $raw='';
    while (!feof($socket)) {
        $remaining=$absoluteDeadline-microtime(true);
        if ($remaining<=0) {
            fclose($socket);
            return array_merge(['technical'=>true,'submitted'=>true,'requestBytes'=>$requestBytes,'responseBytes'=>$responseBytes,'roundTripMs'=>(int)round((microtime(true)-$started)*1000)],rotIdentity($rot));
        }
        setSocketTimeRemaining($socket,$remaining);
        $chunk=fread($socket,8192);
        if ($chunk===false) {
            fclose($socket);
            return array_merge(['technical'=>true,'submitted'=>true,'requestBytes'=>$requestBytes,'responseBytes'=>$responseBytes,'roundTripMs'=>(int)round((microtime(true)-$started)*1000)],rotIdentity($rot));
        }
        $raw.=$chunk;
        $responseBytes+=strlen($chunk);
        if (strlen($raw)>$maxResponseBytes) {
            fclose($socket);
            return array_merge(['technical'=>true,'submitted'=>true,'requestBytes'=>$requestBytes,'responseBytes'=>$responseBytes,'roundTripMs'=>(int)round((microtime(true)-$started)*1000)],rotIdentity($rot));
        }
        $metadata=stream_get_meta_data($socket);
        if (!empty($metadata['timed_out'])) {
            fclose($socket);
            return array_merge(['technical'=>true,'submitted'=>true,'requestBytes'=>$requestBytes,'responseBytes'=>$responseBytes,'roundTripMs'=>(int)round((microtime(true)-$started)*1000)],rotIdentity($rot));
        }
    }
    fclose($socket);

    $unwrapped=unwrapRotResponse($rot,trim($raw));
    if ($unwrapped===false) {
        return array_merge(['technical'=>true,'submitted'=>true,'requestBytes'=>$requestBytes,'responseBytes'=>$responseBytes,'roundTripMs'=>(int)round((microtime(true)-$started)*1000)],rotIdentity($rot));
    }
    return array_merge([
        'technical'=>false,
        'submitted'=>true,
        'decoded'=>json_decode(trim($unwrapped),true),
        'requestBytes'=>$requestBytes,
        'responseBytes'=>$responseBytes,
        'roundTripMs'=>(int)round((microtime(true)-$started)*1000)
    ],rotIdentity($rot));
}

function validateRotStatusResponse($response,$requestId,$coin) {
    if (!is_array($response) || !isset($response['ok'],$response['id'],$response['coin'],$response['ready'],$response['recovering'],$response['height'],$response['blockHash'],$response['checkpoints'])) {return false;}
    if ($response['ok']!==true || !is_string($response['id']) || !hash_equals($requestId,$response['id']) || $response['coin']!==$coin || !is_bool($response['ready']) || !is_bool($response['recovering'])) {return false;}
    if (!isNonNegativeInteger($response['height']) || !is_string($response['blockHash']) || !preg_match('/^[0-9a-f]{64}$/',$response['blockHash']) || !is_array($response['checkpoints']) || count($response['checkpoints'])<1 || count($response['checkpoints'])>8) {return false;}
    $checkpoints=[];
    foreach ($response['checkpoints'] as $height=>$hash) {
        if (!preg_match('/^[0-9]+$/',(string)$height) || (int)$height<1 || (int)$height>$response['height'] || !is_string($hash) || !preg_match('/^[0-9a-f]{64}$/',$hash)) {return false;}
        $checkpoints[(string)(int)$height]=$hash;
    }
    ksort($checkpoints,SORT_NUMERIC);
    $response['checkpoints']=$checkpoints;
    return $response;
}

function statusCheckpointHeights($coin) {
    $error='';
    $heights=readRegistry(function(&$registry) use ($coin) {
        if (!isset($registry['coins'][$coin]['checkpoints']) || !is_array($registry['coins'][$coin]['checkpoints'])) {return [];}
        return array_keys($registry['coins'][$coin]['checkpoints']);
    },$error);
    return is_array($heights)?array_slice($heights,-8):[];
}

function queryRegisteredRotStatus(array $record) {
    global $gateway;

    $requestId=newRequestId();
    if ($requestId===false) {return ['technical'=>true,'roundTripMs'=>0];}
    $parameters=$record['coin'];
    $heights=statusCheckpointHeights($record['coin']);
    if (count($heights)>0) {$parameters.=','.implode(',',$heights);}
    $result=exchangeWithRot($record,$requestId.'|status|'.$parameters."\n",$gateway['statusReadTimeout'],$gateway['maxTransactionResponseBytes']);
    if ($result['technical']) {return $result;}
    $validated=validateRotStatusResponse($result['decoded'],$requestId,$record['coin']);
    if ($validated===false) {$result['technical']=true;return $result;}
    $result['response']=$validated;
    return $result;
}

function checkpointVerdict(array &$registry,array $record,array $checkpoints) {
    $coin=$record['coin'];
    $coinState=isset($registry['coins'][$coin]) && is_array($registry['coins'][$coin])?$registry['coins'][$coin]:[];
    $accepted=isset($coinState['checkpoints']) && is_array($coinState['checkpoints'])?$coinState['checkpoints']:[];
    $leadingRotId=isset($coinState['leadingRotId'])?$coinState['leadingRotId']:null;
    $refreshedAt=isset($coinState['refreshedAt'])?(int)$coinState['refreshedAt']:0;
    if (count($accepted)===0) {
        if (empty($record['trustedSeed'])) {return 'CANDIDATE';}
        $registry['coins'][$coin]=['leadingRotId'=>$record['rotId'],'checkpoints'=>$checkpoints,'refreshedAt'=>time()];
        return 'LEADING';
    }

    $operators=[];
    foreach ($registry['rots'] as $other) {
        $acceptedStatus=is_array($other) && isset($other['status']) && in_array($other['status'],['LEADING','READY'],true);
        $trustedEvidence=is_array($other) && !empty($other['trustedSeed']) && isset($other['status']) && in_array($other['status'],['CANDIDATE','RECOVERING','QUARANTINED'],true);
        if (!is_array($other) || !isset($other['coin'],$other['rotId'],$other['host'],$other['checkpoints']) || $other['coin']!==$coin || $other['rotId']===$record['rotId'] || (!$acceptedStatus && !$trustedEvidence)) {continue;}
        $host=$other['host'];
        $currentStatusAt=isset($operators[$host]['lastStatusAt'])?(int)$operators[$host]['lastStatusAt']:0;
        if (!isset($operators[$host]) || (isset($other['lastStatusAt']) && $other['lastStatusAt']>$currentStatusAt)) {
            $operators[$host]=$other;
        }
    }
    $operators[$record['host']]=array_merge($record,['checkpoints'=>$checkpoints]);
    $compared=0;
    $mismatch=false;

    foreach ($accepted as $height=>$acceptedHash) {
        if (!isset($checkpoints[$height])) {continue;}
        $votes=[];
        foreach ($operators as $operator) {
            if (!isset($operator['checkpoints'][$height])) {continue;}
            $hash=$operator['checkpoints'][$height];
            $votes[$hash]=isset($votes[$hash])?$votes[$hash]+1:1;
        }
        $referenceHash=$acceptedHash;
        $total=array_sum($votes);
        if ($total>=3) {
            arsort($votes,SORT_NUMERIC);
            $majorityHash=(string)key($votes);
            if ((int)current($votes)>intdiv($total,2)) {$referenceHash=$majorityHash;$accepted[$height]=$majorityHash;}
        }
        $compared++;
        if (!hash_equals($referenceHash,$checkpoints[$height])) {$mismatch=true;}
    }
    if (!$mismatch && $refreshedAt+86400<=time()) {
        foreach ($checkpoints as $height=>$hash) {
            if (isset($accepted[$height])) {continue;}
            $votes=[];
            foreach ($operators as $operator) {
                if (!isset($operator['checkpoints'][$height])) {continue;}
                $operatorHash=$operator['checkpoints'][$height];
                $votes[$operatorHash]=isset($votes[$operatorHash])?$votes[$operatorHash]+1:1;
            }
            arsort($votes,SORT_NUMERIC);
            $topVotes=count($votes)>0?(int)current($votes):0;
            $total=array_sum($votes);
            $oneTrusted=$total===1 && $leadingRotId===$record['rotId'] && !empty($record['trustedSeed']);
            $twoAgree=$total===2 && $topVotes===2;
            $majority=$total>=3 && $topVotes>intdiv($total,2);
            if ($oneTrusted || $twoAgree || $majority) {$accepted[$height]=(string)key($votes);}
        }
        ksort($accepted,SORT_NUMERIC);
        $registry['coins'][$coin]['checkpoints']=array_slice($accepted,-8,null,true);
        $registry['coins'][$coin]['refreshedAt']=time();
    }
    if ($mismatch) {return 'QUARANTINED';}
    if ($compared===0) {return 'CANDIDATE';}
    if ($leadingRotId===$record['rotId']) {return 'LEADING';}
    $leaderActive=false;
    foreach ($registry['rots'] as $other) {
        if (is_array($other) && isset($other['rotId'],$other['status']) && $other['rotId']===$leadingRotId && !in_array($other['status'],['ENDED','QUARANTINED'],true)) {$leaderActive=true;break;}
    }
    if (!$leaderActive && !empty($record['trustedSeed'])) {
        $registry['coins'][$coin]['leadingRotId']=$record['rotId'];
        return 'LEADING';
    }
    return 'READY';
}

function statusHeightReference(array $registry,array $record,$height) {
    global $gateway,$coinConfiguration;

    $coin=$record['coin'];
    $operators=[];
    foreach ($registry['rots'] as $other) {
        $acceptedStatus=is_array($other) && isset($other['status']) && in_array($other['status'],['LEADING','READY'],true);
        $trustedEvidence=is_array($other) && !empty($other['trustedSeed']) && isset($other['status']) && in_array($other['status'],['CANDIDATE','RECOVERING','QUARANTINED'],true);
        if (!is_array($other) || !isset($other['coin'],$other['host'],$other['lastHeight']) || $other['coin']!==$coin || (!$acceptedStatus && !$trustedEvidence)) {continue;}
        $operators[$other['host']]=['rotId'=>$other['rotId'],'height'=>(int)$other['lastHeight']];
    }
    $operators[$record['host']]=['rotId'=>$record['rotId'],'height'=>$height];
    $values=array_values($operators);
    if (count($values)<=1) {return $height;}
    if (count($values)===2) {
        $leader=isset($registry['coins'][$coin]['leadingRotId'])?$registry['coins'][$coin]['leadingRotId']:null;
        foreach ($values as $value) {if ($value['rotId']===$leader) {return $value['height'];}}
        return max($values[0]['height'],$values[1]['height']);
    }
    $heights=array_map(function($value) {return $value['height'];},$values);
    sort($heights,SORT_NUMERIC);
    return $heights[(int)floor(count($heights)/2)];
}

function statusHeightAcceptable($coin,$height,$reference) {
    global $coinConfiguration;

    return $height+$coinConfiguration[$coin]['maxHeightLag']>=$reference;
}

function rotResponseHeightAcceptable(array $rot,$height) {
    if (!isset($rot['protocol']) || $rot['protocol']!==1) {return true;}
    if (!is_int($height) || $height<0) {return false;}
    $reference=isset($rot['heightReference'])?(int)$rot['heightReference']:(isset($rot['lastHeight'])?(int)$rot['lastHeight']:$height);
    return statusHeightAcceptable($rot['coin'],$height,$reference);
}

function probeRegisteredRot(array $record) {
    global $gateway;

    $result=queryRegisteredRotStatus($record);
    $now=time();
    $record['lastStatusAt']=$now;
    if (!isset($result['technical']) || $result['technical']) {
        $record['status']='RECOVERING';
        $record['statusReason']='STATUS_PROBE_FAILED';
        $record['readyUntil']=0;
        $record['retryAt']=$now+60;
        return $record;
    }
    $sample=$result['roundTripMs'];
    $old=isset($record['statusLatencyMs']) && is_numeric($record['statusLatencyMs'])?(float)$record['statusLatencyMs']:null;
    $record['statusLatencyMs']=$old===null?(int)$sample:(int)round($old*0.8+$sample*0.2);
    $record['statusSamples']=isset($record['statusSamples'])?(int)$record['statusSamples']+1:1;
    $record['consecutiveFailures']=0;
    $record['backoffUntil']=0;
    $response=$result['response'];
    $record['lastHeight']=$response['height'];
    $record['lastBlockHash']=$response['blockHash'];
    $record['checkpoints']=$response['checkpoints'];
    if (!$response['ready'] || $response['recovering']) {
        $record['status']='RECOVERING';
        $record['statusReason']='ROT_REPORTS_RECOVERING';
        $record['readyUntil']=0;
        $record['retryAt']=$now+60;
        return $record;
    }
    $error='';
    $verdict=changeRegistry(function(&$registry) use ($record,$response) {
        $key=registryKey($record['coin'],$record['rotId']);
        if (!isset($registry['rots'][$key]['registrationVersion'],$record['registrationVersion']) || !hash_equals($registry['rots'][$key]['registrationVersion'],$record['registrationVersion'])) {return ['changed'=>true];}
        $checkpoint=checkpointVerdict($registry,$record,$response['checkpoints']);
        $reference=statusHeightReference($registry,$record,$response['height']);
        return ['checkpoint'=>$checkpoint,'heightReference'=>$reference];
    },$error);
    if (is_array($verdict) && isset($verdict['changed'])) {return $record;}
    if (!is_array($verdict) || !isset($verdict['checkpoint'],$verdict['heightReference'])) {
        $record['status']='RECOVERING';
        $record['statusReason']='TRUST_EVALUATION_UNAVAILABLE';
        $record['readyUntil']=0;
        $record['retryAt']=$now+60;
        return $record;
    }
    $record['heightReference']=$verdict['heightReference'];
    $verdict=$verdict['checkpoint'];
    if (($verdict==='READY' || $verdict==='LEADING') && !statusHeightAcceptable($record['coin'],$response['height'],$record['heightReference'])) {$verdict='RECOVERING';$record['statusReason']='CHAIN_HEIGHT_LAG';}
    if ($verdict==='QUARANTINED') {
        $record['checkpointFailures']=isset($record['checkpointFailures'])?(int)$record['checkpointFailures']+1:1;
        if ($record['checkpointFailures']>=3) {
            $verdict='ENDED';
            $record['endedAt']=$now;
            $record['endedReason']='REPEATED_CHECKPOINT_MISMATCH';
        }
    } elseif ($verdict==='LEADING' || $verdict==='READY') {
        $record['checkpointFailures']=0;
    }
    $record['status']=$verdict;
    if ($verdict==='LEADING' || $verdict==='READY') {$record['statusReason']='';}
    elseif ($verdict==='QUARANTINED') {$record['statusReason']='CHECKPOINT_DISAGREEMENT';}
    elseif ($verdict==='ENDED' && !isset($record['statusReason'])) {$record['statusReason']='REPEATED_CHECKPOINT_MISMATCH';}
    $record['readyUntil']=in_array($verdict,['LEADING','READY'],true)?$now+$gateway['statusFreshness']:0;
    $record['retryAt']=$verdict==='QUARANTINED'?$now+$gateway['quarantineSeconds']:($verdict==='CANDIDATE'?$now+300:($verdict==='RECOVERING'?$now+60:0));
    return $record;
}

function newRequestId() {
    try {
        return bin2hex(random_bytes(16));
    } catch (Exception $exception) {
        return false;
    }
}

function isNonNegativeInteger($value) {
    return is_int($value) && $value>=0;
}

function decodeBase58Check($base58) {
    $alphabet='123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    $bytes=[0];
    $length=strlen($base58);
    if ($length<26 || $length>50) {
        return false;
    }
    for ($charIndex=0;$charIndex<$length;$charIndex++) {
        $position=strpos($alphabet,$base58[$charIndex]);
        if ($position===false) {
            return false;
        }
        $carry=$position;
        $byteCount=count($bytes);
        for ($byteIndex=0;$byteIndex<$byteCount;$byteIndex++) {
            $carry+=$bytes[$byteIndex]*58;
            $bytes[$byteIndex]=$carry&0xff;
            $carry>>=8;
        }
        while ($carry>0) {
            $bytes[]=$carry&0xff;
            $carry>>=8;
        }
    }
    $binary='';
    for ($byteIndex=count($bytes)-1;$byteIndex>=0;$byteIndex--) {
        $binary.=chr($bytes[$byteIndex]);
    }
    $padding=0;
    while ($padding<$length && $base58[$padding]==='1') {
        $padding++;
    }
    $binary=str_repeat("\x00",$padding).$binary;
    if (strlen($binary)<5) {
        return false;
    }
    $payload=substr($binary,0,-4);
    $checksum=substr($binary,-4);
    $expected=substr(hash('sha256',hash('sha256',$payload,true),true),0,4);
    if (!hash_equals($expected,$checksum)) {
        return false;
    }
    return $payload;
}

function validateAddresses($input,&$error) {
    global $gateway;

    if (!isset($input['addresses']) || !is_array($input['addresses'])) {
        $error='INVALID_ADDRESS_SET';
        return false;
    }
    $count=count($input['addresses']);
    if ($count<1 || $count>$gateway['maxAddresses']) {
        $error='INVALID_ADDRESS_COUNT';
        return false;
    }
    $addresses=[];
    $seen=[];
    foreach ($input['addresses'] as $address) {
        if (!is_string($address) || $address==='' || isset($seen[$address])) {
            $error='INVALID_ADDRESS_SET';
            return false;
        }
        $payload=decodeBase58Check($address);
        if ($payload===false || strlen($payload)!==21 || ord($payload[0])!==$gateway['versionByte']) {
            $error='INVALID_'.$gateway['coin'].'_ADDRESS';
            return false;
        }
        $seen[$address]=true;
        $addresses[]=$address;
    }
    return $addresses;
}

function validateKnownState($input,array $addresses,&$error) {
    $hasHeight=array_key_exists('height',$input);
    $hasChanges=array_key_exists('lastChangeHeights',$input);
    if (!$hasHeight && !$hasChanges) {
        return null;
    }
    if (!$hasHeight || !$hasChanges || !is_int($input['height']) || $input['height']<0 || !is_array($input['lastChangeHeights']) || count($input['lastChangeHeights'])!==count($addresses)) {
        $error='INVALID_KNOWN_STATE';
        return false;
    }
    $changes=[];
    foreach ($input['lastChangeHeights'] as $changeHeight) {
        if ($changeHeight===null) {
            $changes[]=null;
        } elseif (!is_int($changeHeight) || $changeHeight<0 || $changeHeight>$input['height']) {
            $error='INVALID_CHANGE_HEIGHTS';
            return false;
        } else {
            $changes[]=$changeHeight;
        }
    }
    return ['height'=>$input['height'],'changes'=>$changes];
}

function buildPubsParameters(array $addresses,$knownState) {
    $addressList=implode(',',$addresses);
    if (!is_array($knownState)) {
        return $addressList;
    }
    $markers=[];
    foreach ($knownState['changes'] as $changeHeight) {
        $markers[]=$changeHeight===null?'-':(string)$changeHeight;
    }
    return $knownState['height'].';'.$addressList.';'.implode(',',$markers);
}

function validateRotAddressState($addressState,$expectedAddress,$height,&$addressBalance,&$outpoints) {
    if (!is_array($addressState) || !isset($addressState['address']) || $addressState['address']!==$expectedAddress) {
        return false;
    }
    if (!array_key_exists('lastChangeHeight',$addressState) || ($addressState['lastChangeHeight']!==null && (!isNonNegativeInteger($addressState['lastChangeHeight']) || $addressState['lastChangeHeight']>$height))) {
        return false;
    }
    if (!isset($addressState['balance']) || !isNonNegativeInteger($addressState['balance']) || !isset($addressState['utxos']) || !is_array($addressState['utxos'])) {
        return false;
    }
    $addressBalance=0;
    foreach ($addressState['utxos'] as $utxo) {
        if (!is_array($utxo) || !isset($utxo['txid']) || !is_string($utxo['txid']) || !preg_match('/^[0-9a-f]{64}$/',$utxo['txid'])) {
            return false;
        }
        if (!isset($utxo['vout']) || !isNonNegativeInteger($utxo['vout']) || !isset($utxo['value']) || !is_int($utxo['value']) || $utxo['value']<=0) {
            return false;
        }
        if (!isset($utxo['height']) || !is_int($utxo['height']) || $utxo['height']<1 || $utxo['height']>$height) {
            return false;
        }
        if (!isset($utxo['confirmations']) || !is_int($utxo['confirmations']) || $utxo['confirmations']!==$height-$utxo['height']+1) {
            return false;
        }
        if (!isset($utxo['scriptPubKey']) || !is_string($utxo['scriptPubKey']) || !preg_match('/^76a914[0-9a-f]{40}88ac$/',$utxo['scriptPubKey'])) {
            return false;
        }
        $outpoint=$utxo['txid'].':'.$utxo['vout'];
        if (isset($outpoints[$outpoint])) {return false;}
        $outpoints[$outpoint]=true;
        $addressBalance+=$utxo['value'];
        if (!is_int($addressBalance) || $addressBalance<0) {
            return false;
        }
    }
    return $addressBalance===$addressState['balance'];
}

function validateRotState(array $response,$requestId,array $addresses,$knownState) {
    global $gateway;

    if (!isset($response['id']) || !hash_equals($requestId,(string)$response['id']) || !isset($response['coin']) || $response['coin']!==$gateway['coin']) {
        return false;
    }
    if (!isset($response['height']) || !isNonNegativeInteger($response['height']) || !isset($response['blockHash']) || !is_string($response['blockHash']) || !preg_match('/^[0-9a-f]{64}$/',$response['blockHash'])) {
        return false;
    }
    if (!isset($response['addresses']) || !is_array($response['addresses'])) {
        return false;
    }
    $expectedMode=is_array($knownState)?'delta':'full';
    $mode=isset($response['mode'])?$response['mode']:'full';
    if ($mode!==$expectedMode || ($mode==='delta' && $response['height']<$knownState['height'])) {
        return false;
    }
    if ($mode==='full' && (!isset($response['balance']) || !isNonNegativeInteger($response['balance']) || count($response['addresses'])!==count($addresses))) {
        return false;
    }
    $totalBalance=0;
    $seen=[];
    $outpoints=[];
    foreach ($response['addresses'] as $position=>$addressState) {
        if (!is_array($addressState) || !isset($addressState['address'])) {
            return false;
        }
        $addressPosition=array_search($addressState['address'],$addresses,true);
        if ($addressPosition===false || isset($seen[$addressState['address']]) || ($mode==='full' && $addressPosition!==$position)) {
            return false;
        }
        $addressBalance=0;
        if (!validateRotAddressState($addressState,$addresses[$addressPosition],$response['height'],$addressBalance,$outpoints)) {
            return false;
        }
        if ($mode==='delta' && $addressState['lastChangeHeight']===$knownState['changes'][$addressPosition]) {
            return false;
        }
        $seen[$addressState['address']]=true;
        $totalBalance+=$addressBalance;
    }
    return $mode==='delta' || $totalBalance===$response['balance'];
}

function projectStateResponse(array $response) {
    if (!isset($response['ok']) || $response['ok']!==true) {
        return [
            'ok'=>false,
            'id'=>isset($response['id'])?$response['id']:null,
            'error'=>isset($response['error']) && is_string($response['error'])?substr($response['error'],0,256):'STATE_REJECTED'
        ];
    }
    $addresses=[];
    foreach ($response['addresses'] as $addressState) {
        $utxos=[];
        foreach ($addressState['utxos'] as $utxo) {
            $utxos[]=[
                'txid'=>$utxo['txid'],
                'vout'=>$utxo['vout'],
                'value'=>$utxo['value'],
                'height'=>$utxo['height'],
                'confirmations'=>$utxo['confirmations'],
                'scriptPubKey'=>$utxo['scriptPubKey']
            ];
        }
        $addresses[]=[
            'address'=>$addressState['address'],
            'lastChangeHeight'=>$addressState['lastChangeHeight'],
            'balance'=>$addressState['balance'],
            'utxos'=>$utxos
        ];
    }
    $projected=[
        'ok'=>true,
        'id'=>$response['id'],
        'coin'=>$response['coin'],
        'mode'=>isset($response['mode'])?$response['mode']:'full',
        'height'=>$response['height'],
        'blockHash'=>$response['blockHash'],
        'addresses'=>$addresses
    ];
    if (array_key_exists('balance',$response)) {$projected['balance']=$response['balance'];}
    return $projected;
}

function queryStateRot(array $rot,$requestId,array $addresses,$knownState) {
    global $gateway;

    $request=$requestId.'|pubs|'.buildPubsParameters($addresses,$knownState)."\n";
    $result=exchangeWithRot($rot,$request,$gateway['stateReadTimeout'],$gateway['maxStateResponseBytes']);
    if ($result['technical']) {
        return $result;
    }
    $decoded=$result['decoded'];
    if (!is_array($decoded) || !array_key_exists('ok',$decoded) || !isset($decoded['id']) || !hash_equals($requestId,(string)$decoded['id'])) {
        $result['technical']=true;
        $result['failureKind']='PROTOCOL';
        return $result;
    }
    if ($decoded['ok']===false) {
        $integrityErrors=['CORRUPT_TXO_INDEX','DUPLICATE_OUTPOINT'];
        if (isset($decoded['error']) && in_array($decoded['error'],$integrityErrors,true)) {
            $result['technical']=true;
            $result['failureKind']='ROT_INTEGRITY';
            return $result;
        }
        if (is_array($knownState)) {
            $result['technical']=true;
            $result['penalizeRot']=false;
            $result['failureKind']='REQUEST_DELTA';
            return $result;
        }
    }
    if ($decoded['ok']===true && !validateRotState($decoded,$requestId,$addresses,$knownState)) {
        $result['technical']=true;
        $result['failureKind']='PROTOCOL';
        return $result;
    }
    if ($decoded['ok']===true && !rotResponseHeightAcceptable($rot,$decoded['height'])) {
        $result['technical']=true;
        $result['failureKind']='STALE_HEIGHT';
        return $result;
    }
    $result['response']=$decoded;
    return $result;
}
function validateRotHistory(array $response,$requestId,array $addresses) {
    global $gateway;

    if (!isset($response['ok']) || $response['ok']!==true || !isset($response['id']) || !hash_equals($requestId,(string)$response['id']) || !isset($response['coin']) || $response['coin']!==$gateway['coin']) {
        return false;
    }
    if (!isset($response['height']) || !isNonNegativeInteger($response['height']) || !isset($response['blockHash']) || !is_string($response['blockHash']) || !preg_match('/^[0-9a-f]{64}$/',$response['blockHash'])) {
        return false;
    }
    if (!isset($response['events']) || !is_array($response['events']) || count($response['events'])>2000) {
        return false;
    }
    $seen=[];
    $lastHeight=0;
    foreach ($response['events'] as $event) {
        if (!is_array($event) || !isset($event['direction']) || !in_array($event['direction'],['IN','OUT'],true)) {return false;}
        if (!isset($event['txid']) || !is_string($event['txid']) || !preg_match('/^[0-9a-f]{64}$/',$event['txid'])) {return false;}
        if (!isset($event['vout']) || !isNonNegativeInteger($event['vout']) || !isset($event['value']) || !is_int($event['value']) || $event['value']<=0) {return false;}
        if (!isset($event['address']) || !is_string($event['address'])) {return false;}
        $payload=decodeBase58Check($event['address']);
        if ($payload===false || strlen($payload)!==21 || ord($payload[0])!==$gateway['versionByte']) {return false;}
        $walletAddress=in_array($event['address'],$addresses,true);
        if (($event['direction']==='IN' && !$walletAddress) || ($event['direction']==='OUT' && $walletAddress)) {return false;}
        if (!isset($event['height']) || !is_int($event['height']) || $event['height']<1 || $event['height']>$response['height'] || $event['height']<$lastHeight) {return false;}
        if (!isset($event['timestamp']) || !is_int($event['timestamp']) || $event['timestamp']<1) {return false;}
        $key=$event['txid'].':'.$event['vout'];
        if (isset($seen[$key])) {return false;}
        $seen[$key]=true;
        $lastHeight=$event['height'];
    }
    return true;
}

function projectHistoryResponse(array $response) {
    $events=[];
    foreach ($response['events'] as $event) {
        $events[]=[
            'direction'=>$event['direction'],
            'txid'=>$event['txid'],
            'vout'=>$event['vout'],
            'value'=>$event['value'],
            'address'=>$event['address'],
            'height'=>$event['height'],
            'timestamp'=>$event['timestamp']
        ];
    }
    return [
        'ok'=>true,
        'id'=>$response['id'],
        'coin'=>$response['coin'],
        'height'=>$response['height'],
        'blockHash'=>$response['blockHash'],
        'events'=>$events
    ];
}
function queryHistoryRot(array $rot,$requestId,array $addresses) {
    global $gateway;

    $request=$requestId.'|history|'.implode(',',$addresses)."\n";
    $result=exchangeWithRot($rot,$request,$gateway['historyReadTimeout'],$gateway['maxHistoryResponseBytes']);
    if ($result['technical']) {return $result;}
    $decoded=$result['decoded'];
    if (!is_array($decoded) || !validateRotHistory($decoded,$requestId,$addresses)) {
        $result['technical']=true;
        $result['failureKind']='PROTOCOL';
        return $result;
    }
    if (!rotResponseHeightAcceptable($rot,$decoded['height'])) {
        $result['technical']=true;
        $result['failureKind']='STALE_HEIGHT';
        return $result;
    }
    $result['response']=$decoded;
    return $result;
}

function transactionIdFromRaw($rawHex) {
    $binary=hex2bin($rawHex);
    if ($binary===false) {
        return false;
    }
    return bin2hex(strrev(hash('sha256',hash('sha256',$binary,true),true)));
}

function validateTransactionRequest(array $input,$operation,&$error) {
    global $gateway;

    if (!isset($input['txid']) || !is_string($input['txid']) || !preg_match('/^[0-9a-fA-F]{64}$/',$input['txid'])) {
        $error='INVALID_TRANSACTION_ID';
        return false;
    }
    $txid=strtolower($input['txid']);
    if ($operation==='transactionStatus') {
        return ['command'=>'txstatus','parameter'=>$txid,'txid'=>$txid];
    }
    if ($operation==='zeroConfirmation') {
        if (!isset($input['address']) || !is_string($input['address']) || !isset($input['amountSats']) || !is_int($input['amountSats']) || $input['amountSats']<=0) {
            $error='INVALID_PAYMENT_RECEIPT';
            return false;
        }
        $payload=decodeBase58Check($input['address']);
        if ($payload===false || strlen($payload)!==21 || ord($payload[0])!==$gateway['versionByte']) {
            $error='INVALID_PAYMENT_RECEIPT';
            return false;
        }
        return ['command'=>'zeroconf','parameter'=>$txid.','.$input['address'].','.$input['amountSats'],'txid'=>$txid,'address'=>$input['address'],'amountSats'=>$input['amountSats']];
    }
    if (!array_key_exists('rawTransaction',$input)) {
        $error='INVALID_RAW_TRANSACTION';
        return false;
    }
    $rawHex=$input['rawTransaction'];
    if (!is_string($rawHex) || strlen($rawHex)<20 || strlen($rawHex)>$gateway['maxRawTransactionHex'] || (strlen($rawHex)%2)!==0 || !ctype_xdigit($rawHex)) {
        $error='INVALID_RAW_TRANSACTION';
        return false;
    }
    $rawHex=strtolower($rawHex);
    $calculatedTxid=transactionIdFromRaw($rawHex);
    if ($calculatedTxid===false || !hash_equals($txid,$calculatedTxid)) {
        $error='TRANSACTION_ID_MISMATCH';
        return false;
    }
    return ['command'=>'send','parameter'=>$rawHex,'txid'=>$txid];
}

function validateRotTransactionResponse(array $response,$requestId,array $request) {
    global $gateway;

    if (!isset($response['id']) || !is_string($response['id']) || !hash_equals($requestId,$response['id']) || !isset($response['coin']) || $response['coin']!==$gateway['coin']) {
        return false;
    }
    if (!isset($response['technical']) || !is_bool($response['technical']) || !isset($response['status']) || !is_string($response['status'])) {
        return false;
    }
    if (isset($response['txid']) && $response['txid']!==null) {
        if (!is_string($response['txid']) || !hash_equals($request['txid'],strtolower($response['txid']))) {
            return false;
        }
    }
    if ($response['technical']) {
        return true;
    }
    if (!isset($response['ok']) || !is_bool($response['ok'])) {
        return false;
    }
    if ($request['command']==='send') {
        $allowed=['ACCEPTED','KNOWN','REJECTED'];
    } elseif ($request['command']==='zeroconf') {
        $allowed=['SEEN','NOT_SEEN','OUTPUT_MISMATCH','CONFIRMED','REJECTED'];
        if (!isset($response['address']) || $response['address']!==$request['address'] || !isset($response['amountSats']) || $response['amountSats']!==$request['amountSats']) {
            return false;
        }
    } else {
        $allowed=['MEMPOOL','CONFIRMED','UNKNOWN','REJECTED'];
    }
    return in_array($response['status'],$allowed,true);
}

function projectTransactionResponse(array $response) {
    $allowed=['ok','id','coin','technical','status','txid','accepted','error','rpcCode','rpcMessage','coreMs','rotMs','confirmed','blockHeight','confirmations','height','blockHash','address','amountSats'];
    $projected=[];
    foreach ($allowed as $field) {
        if (array_key_exists($field,$response)) {
            $value=$response[$field];
            if (($field==='error' || $field==='rpcMessage') && is_string($value)) {$value=substr($value,0,512);}
            $projected[$field]=$value;
        }
    }
    return $projected;
}

function queryTransactionRot(array $rot,$requestId,array $request) {
    global $gateway;

    $line=$requestId.'|'.$request['command'].'|'.$request['parameter']."\n";
    $result=exchangeWithRot($rot,$line,$gateway['transactionReadTimeout'],$gateway['maxTransactionResponseBytes']);
    if ($result['technical']) {
        return $result;
    }
    $decoded=$result['decoded'];
    if (!is_array($decoded) || !validateRotTransactionResponse($decoded,$requestId,$request)) {
        $result['technical']=true;
        $result['failureKind']='PROTOCOL';
        return $result;
    }
    if ($decoded['technical']) {
        $result['technical']=true;
        $result['failureKind']='ROT_TECHNICAL';
        return $result;
    }
    if (isset($decoded['height']) && !rotResponseHeightAcceptable($rot,$decoded['height'])) {
        $result['technical']=true;
        $result['failureKind']='STALE_HEIGHT';
        return $result;
    }
    $result['response']=$decoded;
    return $result;
}

function recordRotTechnicalFailure(array $result) {
    global $gateway;

    if (!isset($result['rotProtocol'],$result['rotCoin'],$result['rotId'])) {return;}
    $coin=$result['rotCoin'];
    $rotId=$result['rotId'];
    $protocol=$result['rotProtocol'];
    $registrationVersion=isset($result['registrationVersion'])?$result['registrationVersion']:null;
    $error='';
    $change=changeRegistry(function(&$registry) use ($coin,$rotId,$protocol,$registrationVersion,$result,$gateway) {
        $oldStatus='LEGACY_READY';
        if ($protocol===1) {
            $key=registryKey($coin,$rotId);
            if (!isset($registry['rots'][$key]) || !isset($registry['rots'][$key]['registrationVersion']) || !is_string($registrationVersion) || !hash_equals($registry['rots'][$key]['registrationVersion'],$registrationVersion)) {return false;}
            $record=&$registry['rots'][$key];
            $oldStatus=isset($record['status'])?$record['status']:'CANDIDATE';
            $failureKind=isset($result['failureKind'])?$result['failureKind']:'';
            if ($failureKind==='STALE_HEIGHT') {
                $record['status']='RECOVERING';
                $record['readyUntil']=0;
                $record['retryAt']=time()+60;
            } elseif ($failureKind==='ROT_INTEGRITY') {
                $record['status']='QUARANTINED';
                $record['readyUntil']=0;
                $record['retryAt']=time()+$gateway['quarantineSeconds'];
                $record['endedReason']='ROT_INDEX_INTEGRITY';
            }
        } else {
            if (!isset($result['rotHost'],$result['rotPort'])) {return false;}
            $key=$coin.'|'.endpointKey($result['rotHost'],$result['rotPort']);
            if (!isset($registry['legacyHealth'][$key]) || !is_array($registry['legacyHealth'][$key])) {$registry['legacyHealth'][$key]=[];}
            $record=&$registry['legacyHealth'][$key];
        }
        $now=time();
        $failures=isset($record['consecutiveFailures'])?(int)$record['consecutiveFailures']+1:1;
        if (!isset($record['lastFailureAt']) || $record['lastFailureAt']+3600<$now) {$failures=1;}
        $record['consecutiveFailures']=$failures;
        $record['lastFailureAt']=$now;
        $record['backoffUntil']=$now+min(300,5*(2**min(6,$failures-1)));
        if ($failures===1 && $protocol===1) {queueRotMessage($record,'ROT_TECHNICAL_FAILURE','Proxy could not complete a ROT request',$now);}
        $newStatus=$protocol===1 && isset($record['status'])?$record['status']:'LEGACY_BACKOFF';
        return ['first'=>$failures===1,'failures'=>$failures,'from'=>$oldStatus,'to'=>$newStatus,'reason'=>isset($result['failureKind'])?$result['failureKind']:'ROT_TECHNICAL'];
    },$error);
    if (is_array($change) && !empty($change['first'])) {
        writeHealthEvent(['kind'=>'ROT_FAILURE','coin'=>$coin,'rotId'=>$rotId,'nickname'=>isset($result['rotNickname'])?$result['rotNickname']:null,'from'=>$change['from'],'to'=>$change['to'],'reason'=>$change['reason'],'failures'=>$change['failures']]);
    }
}

function clearRotTechnicalFailure(array $result) {
    if (empty($result['hadFailures']) || !isset($result['rotProtocol'],$result['rotCoin'],$result['rotId'])) {return;}
    $coin=$result['rotCoin'];
    $rotId=$result['rotId'];
    $protocol=$result['rotProtocol'];
    $registrationVersion=isset($result['registrationVersion'])?$result['registrationVersion']:null;
    $error='';
    $change=changeRegistry(function(&$registry) use ($coin,$rotId,$protocol,$registrationVersion,$result) {
        if ($protocol===1) {
            $key=registryKey($coin,$rotId);
            if (!isset($registry['rots'][$key]) || !isset($registry['rots'][$key]['registrationVersion']) || !is_string($registrationVersion) || !hash_equals($registry['rots'][$key]['registrationVersion'],$registrationVersion)) {return false;}
            $record=&$registry['rots'][$key];
            $failures=isset($record['consecutiveFailures'])?(int)$record['consecutiveFailures']:0;
            $record['consecutiveFailures']=0;
            $record['backoffUntil']=0;
            unset($record['lastFailureAt']);
            if ($failures>0) {queueRotMessage($record,'ROT_RECOVERED','Proxy completed a ROT request after a technical failure',time());}
            return ['recovered'=>$failures>0,'failures'=>$failures,'status'=>isset($record['status'])?$record['status']:'READY'];
        }
        if (!isset($result['rotHost'],$result['rotPort'])) {return false;}
        $key=$coin.'|'.endpointKey($result['rotHost'],$result['rotPort']);
        $failures=isset($registry['legacyHealth'][$key]['consecutiveFailures'])?(int)$registry['legacyHealth'][$key]['consecutiveFailures']:0;
        if (isset($registry['legacyHealth'][$key])) {unset($registry['legacyHealth'][$key]);}
        return ['recovered'=>$failures>0,'failures'=>$failures,'status'=>'LEGACY_READY'];
    },$error);
    if (is_array($change) && !empty($change['recovered'])) {
        writeHealthEvent(['kind'=>'ROT_RECOVERY','coin'=>$coin,'rotId'=>$rotId,'nickname'=>isset($result['rotNickname'])?$result['rotNickname']:null,'to'=>$change['status'],'failures'=>$change['failures']]);
    }
}

function recordAttempt(array $result,$attempt) {
    global $networkEvent;

    if (!is_array($networkEvent)) {
        return;
    }
    $networkEvent['attempts']=$attempt;
    $networkEvent['rotRequestBytes']+=$result['requestBytes'];
    $networkEvent['rotResponseBytes']+=$result['responseBytes'];
    $networkEvent['rotId']=isset($result['rotId'])?$result['rotId']:null;
    $networkEvent['rotNickname']=isset($result['rotNickname'])?$result['rotNickname']:null;
    $networkEvent['rotStatus']=isset($result['rotStatus'])?$result['rotStatus']:null;
    $networkEvent['statusLatencyMs']=isset($result['statusLatencyMs'])?$result['statusLatencyMs']:null;
    $networkEvent['rotRoundTripMs']=isset($result['roundTripMs'])?$result['roundTripMs']:null;
    if (!empty($result['technical']) && empty($result['skipFailure']) && (!array_key_exists('penalizeRot',$result) || $result['penalizeRot']!==false)) {
        recordRotTechnicalFailure($result);
    } elseif (empty($result['technical'])) {
        clearRotTechnicalFailure($result);
    }
}

function runStateOperation(array $input,$started) {
    global $rots,$gateway,$networkEvent;

    $networkEvent['route']='state';
    $error='';
    $addresses=validateAddresses($input,$error);
    if ($addresses===false) {
        sendJson(['ok'=>false,'error'=>$error],400);
        return;
    }
    $knownState=validateKnownState($input,$addresses,$error);
    if ($knownState===false) {
        sendJson(['ok'=>false,'error'=>$error],400);
        return;
    }
    $requestId=newRequestId();
    if ($requestId===false) {
        sendJson(['ok'=>false,'error'=>'REQUEST_ID_FAILED'],500);
        return;
    }
    $attempt=0;
    foreach (orderRotsForRouting($rots) as $rot) {
        $attempt++;
        $result=queryStateRot($rot,$requestId,$addresses,$knownState);
        recordAttempt($result,$attempt);
        if ($result['technical']) {
            continue;
        }
        $response=projectStateResponse($result['response']);
        $response['rotRoundTripMs']=$result['roundTripMs'];
        $response['relayMs']=(int)round((microtime(true)-$started)*1000);
        $response['attempts']=$attempt;
        $response['zeroConfirmationObservers']=min($gateway['maxZeroConfirmationObservers'],count($rots));
        $networkEvent['outcome']=$response['ok']===true?'READY_'.strtoupper(isset($response['mode'])?$response['mode']:'FULL'):'REJECTED';
        sendJson($response,$response['ok']===true?200:422);
        return;
    }
    $networkEvent['outcome']='UNAVAILABLE';
    sendJson(['ok'=>false,'error'=>$gateway['coin'].'_STATE_UNAVAILABLE'],503);
}
function runHistoryOperation(array $input,$started) {
    global $rots,$gateway,$networkEvent;

    $networkEvent['route']='history';
    $error='';
    $addresses=validateAddresses($input,$error);
    if ($addresses===false) {
        sendJson(['ok'=>false,'error'=>$error],400);
        return;
    }
    $requestId=newRequestId();
    if ($requestId===false) {
        sendJson(['ok'=>false,'error'=>'REQUEST_ID_FAILED'],500);
        return;
    }
    $attempt=0;
    foreach (orderRotsForRouting($rots) as $rot) {
        $attempt++;
        $result=queryHistoryRot($rot,$requestId,$addresses);
        recordAttempt($result,$attempt);
        if ($result['technical']) {continue;}
        $response=projectHistoryResponse($result['response']);
        $response['rotRoundTripMs']=$result['roundTripMs'];
        $response['relayMs']=(int)round((microtime(true)-$started)*1000);
        $response['attempts']=$attempt;
        $networkEvent['outcome']='READY_HISTORY';
        sendJson($response,200);
        return;
    }
    $networkEvent['outcome']='UNAVAILABLE';
    sendJson(['ok'=>false,'error'=>$gateway['coin'].'_HISTORY_UNAVAILABLE'],503);
}

function runTransactionOperation(array $input,$operation,$started) {
    global $rots,$gateway,$networkEvent;

    $networkEvent['route']=$operation==='broadcast'?'broadcast':'status';
    $error='';
    $request=validateTransactionRequest($input,$operation,$error);
    if ($request===false) {
        sendJson(['ok'=>false,'error'=>$error],400);
        return;
    }
    $requestId=newRequestId();
    if ($requestId===false) {
        sendJson(['ok'=>false,'error'=>'REQUEST_ID_FAILED'],500);
        return;
    }
    $attempt=0;
    $priorSubmissionUncertain=false;
    foreach (orderRotsForRouting($rots) as $rot) {
        $attempt++;
        $result=queryTransactionRot($rot,$requestId,$request);
        recordAttempt($result,$attempt);
        if ($result['technical']) {
            if ($request['command']==='send' && $result['submitted']) {
                $priorSubmissionUncertain=true;
            }
            continue;
        }
        $response=projectTransactionResponse($result['response']);
        $response['rotRoundTripMs']=$result['roundTripMs'];
        $response['relayMs']=(int)round((microtime(true)-$started)*1000);
        $response['attempts']=$attempt;
        if ($request['command']==='send') {
            $response['priorSubmissionUncertain']=$priorSubmissionUncertain;
        }
        $networkEvent['outcome']=$response['status'];
        sendJson($response,$response['ok']?200:422);
        return;
    }
    $error=$request['command']==='send'?'BROADCAST_UNAVAILABLE':'TRANSACTION_STATUS_UNAVAILABLE';
    $networkEvent['outcome']='UNAVAILABLE';
    sendJson([
        'ok'=>false,
        'coin'=>$gateway['coin'],
        'technical'=>true,
        'status'=>'UNAVAILABLE',
        'txid'=>$request['txid'],
        'error'=>$error,
        'relayMs'=>(int)round((microtime(true)-$started)*1000),
        'attempts'=>$attempt,
        'priorSubmissionUncertain'=>$request['command']==='send'?$priorSubmissionUncertain:false
    ],503);
}

function runZeroConfirmationOperation(array $input,$started) {
    global $rots,$gateway,$networkEvent;

    $networkEvent['route']='zeroConfirmation';
    $error='';
    $request=validateTransactionRequest($input,'zeroConfirmation',$error);
    if ($request===false) {
        sendJson(['ok'=>false,'error'=>$error],400);
        return;
    }
    if (array_key_exists('observer',$input)) {
        $configured=min($gateway['maxZeroConfirmationObservers'],count($rots));
        if (!is_int($input['observer']) || $input['observer']<0 || $input['observer']>=$configured) {
            sendJson(['ok'=>false,'error'=>'INVALID_OBSERVER'],400);
            return;
        }
        runZeroConfirmationObserverOperation($request,$input['observer'],$started);
        return;
    }
    $requestId=newRequestId();
    if ($requestId===false) {
        sendJson(['ok'=>false,'error'=>'REQUEST_ID_FAILED'],500);
        return;
    }
    $counts=['seen'=>0,'notSeen'=>0,'confirmed'=>0,'outputMismatch'=>0,'unavailable'=>0];
    $attempt=0;
    $observers=array_slice($rots,0,$gateway['maxZeroConfirmationObservers']);
    foreach ($observers as $rot) {
        $attempt++;
        $result=queryTransactionRot($rot,$requestId,$request);
        recordAttempt($result,$attempt);
        if ($result['technical']) {
            $counts['unavailable']++;
            continue;
        }
        $status=$result['response']['status'];
        if ($status==='SEEN') {$counts['seen']++;}
        elseif ($status==='NOT_SEEN') {$counts['notSeen']++;}
        elseif ($status==='CONFIRMED') {$counts['confirmed']++;}
        elseif ($status==='OUTPUT_MISMATCH' || $status==='REJECTED') {$counts['outputMismatch']++;}
        else {$counts['unavailable']++;}
    }
    $configured=count($observers);
    $available=$configured-$counts['unavailable'];
    $technical=$available===0;
    if ($technical) {$status='UNAVAILABLE';$ok=false;$httpStatus=503;}
    elseif ($counts['outputMismatch']>0) {$status='OUTPUT_MISMATCH';$ok=false;$httpStatus=422;}
    elseif ($counts['confirmed']>0) {$status='CONFIRMED';$ok=true;$httpStatus=200;}
    elseif ($counts['seen']>0) {$status='UNCONFIRMED';$ok=true;$httpStatus=200;}
    else {$status='NOT_SEEN';$ok=true;$httpStatus=200;}
    $response=array_merge([
        'ok'=>$ok,
        'coin'=>$gateway['coin'],
        'technical'=>$technical,
        'status'=>$status,
        'txid'=>$request['txid'],
        'address'=>$request['address'],
        'amountSats'=>$request['amountSats'],
        'configured'=>$configured,
        'available'=>$available
    ],$counts,[
        'relayMs'=>(int)round((microtime(true)-$started)*1000),
        'attempts'=>$attempt
    ]);
    $networkEvent['outcome']=$status;
    sendJson($response,$httpStatus);
}

function runZeroConfirmationObserverOperation(array $request,$observer,$started) {
    global $rots,$gateway,$networkEvent;

    $networkEvent['route']='zeroConfirmationObserver';
    $requestId=newRequestId();
    if ($requestId===false) {
        sendJson(['ok'=>false,'error'=>'REQUEST_ID_FAILED'],500);
        return;
    }
    $result=queryTransactionRot($rots[$observer],$requestId,$request);
    recordAttempt($result,1);
    $configured=min($gateway['maxZeroConfirmationObservers'],count($rots));
    $built=buildZeroConfirmationObserverResponse($request,$observer,$configured,$result,$started);
    $networkEvent['outcome']=$built['body']['status'];
    sendJson($built['body'],$built['httpStatus']);
}

function buildZeroConfirmationObserverResponse(array $request,$observer,$configured,array $result,$started) {
    global $gateway;

    $counts=['seen'=>0,'notSeen'=>0,'confirmed'=>0,'outputMismatch'=>0,'unavailable'=>0];
    if ($result['technical']) {
        $counts['unavailable']=1;
        $status='UNAVAILABLE';
        $ok=false;
        $technical=true;
        $httpStatus=503;
    } else {
        $rotStatus=$result['response']['status'];
        $technical=false;
        if ($rotStatus==='SEEN') {$counts['seen']=1;$status='UNCONFIRMED';$ok=true;$httpStatus=200;}
        elseif ($rotStatus==='NOT_SEEN') {$counts['notSeen']=1;$status='NOT_SEEN';$ok=true;$httpStatus=200;}
        elseif ($rotStatus==='CONFIRMED') {$counts['confirmed']=1;$status='CONFIRMED';$ok=true;$httpStatus=200;}
        else {$counts['outputMismatch']=1;$status='OUTPUT_MISMATCH';$ok=false;$httpStatus=422;}
    }
    $response=array_merge([
        'ok'=>$ok,
        'coin'=>$gateway['coin'],
        'technical'=>$technical,
        'status'=>$status,
        'txid'=>$request['txid'],
        'address'=>$request['address'],
        'amountSats'=>$request['amountSats'],
        'observer'=>$observer,
        'configured'=>$configured,
        'queried'=>1,
        'available'=>$technical?0:1
    ],$counts,[
        'rotRoundTripMs'=>$result['roundTripMs'],
        'relayMs'=>(int)round((microtime(true)-$started)*1000),
        'attempts'=>1
    ]);
    return ['body'=>$response,'httpStatus'=>$httpStatus];
}

function runGateway() {
    global $gateway,$networkEvent;

    $started=microtime(true);
    $requestMethod=isset($_SERVER['REQUEST_METHOD'])?$_SERVER['REQUEST_METHOD']:'';
    if ($requestMethod==='POST') {
        $networkEvent=['time'=>gmdate('c'),'route'=>'invalid','started'=>$started,'clientRequestBytes'=>0,'rotRequestBytes'=>0,'rotResponseBytes'=>0,'attempts'=>0];
    }
    if (!browserRequestAllowed()) {
        sendJson(['ok'=>false,'error'=>'CROSS_ORIGIN_REQUEST'],403);
        return;
    }
    if ($requestMethod==='OPTIONS') {
        sendJson(['ok'=>true]);
        return;
    }
    if ($requestMethod!=='POST') {
        sendJson(['ok'=>false,'error'=>'METHOD_NOT_ALLOWED'],405);
        return;
    }
    $contentLength=isset($_SERVER['CONTENT_LENGTH'])?(int)$_SERVER['CONTENT_LENGTH']:0;
    if ($contentLength>0) {
        $networkEvent['clientRequestBytes']=$contentLength;
    }
    if ($contentLength>$gateway['maxRequestBytes']) {
        sendJson(['ok'=>false,'error'=>'REQUEST_TOO_LARGE'],413);
        return;
    }
    $raw=file_get_contents('php://input');
    if (is_string($raw)) {
        $networkEvent['clientRequestBytes']=strlen($raw);
    }
    if ($raw===false || strlen($raw)>$gateway['maxRequestBytes']) {
        sendJson(['ok'=>false,'error'=>'REQUEST_TOO_LARGE'],413);
        return;
    }
    $input=json_decode($raw,true);
    if (!is_array($input)) {
        sendJson(['ok'=>false,'error'=>'INVALID_JSON'],400);
        return;
    }
    if (!isset($input['operation']) || !is_string($input['operation'])) {
        sendJson(['ok'=>false,'error'=>'INVALID_OPERATION'],400);
        return;
    }
    setRequestBudget($input['operation']);
    $networkEvent['proxyId']=$gateway['proxyId'];
    if ($input['operation']==='proxyPing') {
        runProxyPingOperation($input);
        return;
    }
    if ($input['operation']==='proxyInfo') {
        if (!isset($input['protocol']) || $input['protocol']!==1) {sendJson(['ok'=>false,'error'=>'INVALID_PROXY_INFO'],400);return;}
        runProxyInfoOperation();
        return;
    }
    if ($input['operation']==='proxyDirectory') {
        if (!isset($input['protocol']) || $input['protocol']!==1) {sendJson(['ok'=>false,'error'=>'INVALID_PROXY_DIRECTORY'],400);return;}
        runProxyDirectoryOperation();
        return;
    }
    $coin=canonicalCoin(isset($input['coin'])?$input['coin']:'EFL');
    if ($coin===false || !configureCoin($coin)) {
        sendJson(['ok'=>false,'error'=>'INVALID_COIN'],400);
        return;
    }
    $networkEvent['coin']=$gateway['coin'];
    if ($input['operation']==='rotRegister') {
        runRotRegisterOperation($input);
        return;
    }
    if ($input['operation']==='rotRegistrationStatus') {
        runRotRegistrationStatusOperation($input);
        return;
    }
    if ($input['operation']==='state') {
        runStateOperation($input,$started);
        return;
    }
    if ($input['operation']==='history') {
        runHistoryOperation($input,$started);
        return;
    }
    if ($input['operation']==='broadcast' || $input['operation']==='transactionStatus') {
        runTransactionOperation($input,$input['operation'],$started);
        return;
    }
    if ($input['operation']==='zeroConfirmation') {
        runZeroConfirmationOperation($input,$started);
        return;
    }
    sendJson(['ok'=>false,'error'=>'INVALID_OPERATION'],400);
}

if (!defined('CC_WALLET_005_NO_RUN')) {
    runGateway();
}

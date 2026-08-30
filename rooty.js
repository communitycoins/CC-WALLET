/* [MULTI-COIN-004]
Canonical multi-coin wallet with local unexpected-spend protection.
Base: - Derived from MULTI-COIN-003
Changes:
- [MULTI-COIN-004] Remember confirmed outpoints without retaining spendable transaction data
- Lock Send when a confirmed outpoint disappears outside this device's pending broadcast
- Keep balance, Receive, history and backup readable until the user explicitly unlocks Send
- [MULTI-COIN-003] Show currency names while selectors are closed and restore name plus ticker while opening
- Remove the implied coin ticker from the native Balance column
- Give balance icons intrinsic dimensions and version the wallet-owned browser assets
- [MULTI-COIN-002] Replace the obsolete Balance-currency selection with all operational wallet coins
- [MULTI-COIN-002] Replace the obsolete Balance-currency selection with all operational wallet coins
- Show native balances, one shared reference-currency column and a reference-valued wallet total
- Reuse only wallet-bound validated balance caches and distinguish an unknown balance from zero
- Remove connection counts from the balance presentation
- [MULTI-COIN-001] Activate DEM through its ROT gateway and DEM-capable bitcoinjs bundle
- Switch financial state atomically with the selected operational wallet coin
- Keep Receive rotation separate for EFL and DEM
- Configure per-coin atomic units, decimal precision, fees, observers and test vectors
- Show the transaction year in confirmed history
- [EFL-SLICE-054] Preserve wallet behavior while identity and calculator presentation become more compact
- [EFL-SLICE-053] Enlarge wallet identity and render compact Online or Offline status
- Restrict the wallet-coin selector to fully connected members of EFL, CDN, AUR and DEM
- Label calculator roles, route their settings controls and show descriptive native-select options
- Bind Receive and Send actions visibly to the selected wallet coin
- [EFL-SLICE-052] Replace six small toolbar controls with three full-target actions and a passive connection indicator
- Remove the obsolete video animation, its overlay and its three script dependencies
- Move references below Help and make the ROOTY brand non-interactive
- Add a selected-coin invitation with a language-and-coin wallet QR
- [EFL-SLICE-051] Accept every standard English BIP39 word count during seed and full-backup recovery
- Keep an optional recovery-only BIP39 passphrase separate while accepting seed::passphrase input
- Preserve the empty-passphrase derivation of existing and locally created wallets
- [EFL-SLICE-050] Observe backup pastes through the document so the visible modal copy is handled
- Show valid Receive amounts in the transaction title just like Send amounts
- Synchronize confirmed balance into the calculator without overwriting user-entered transaction amounts
- Let an explicit click on the balance restore its complete calculator conversion
- [EFL-SLICE-049] Route the full Receive confirmation control and ROOTY logo through their intended actions
- Cache only the last validated confirmed balance for immediate wallet-bound startup display
- Move the calculator amount into the Send title and keep it synchronized
- Detect a pasted full wallet backup while retaining explicit seed restoration
- Keep Community Coins promotion inside the wallet and target the current wallet URL
- [EFL-SLICE-048] Replace technical receipt data with a plain-language payment-confirmation instruction
- Learn the gateway-provided observer count from every ordinary state response
- Query those observers concurrently and render every verified partial result immediately
- [EFL-SLICE-047] Render pending Send and observed Receive rows without persisting them before confirmation
- Promote payments to IndexedDB HISTORY only after blockchain confirmation and remove rejected pending rows
- Restore pending Send receipts after restart and confirm an active Receive panel immediately from an exact state snapshot
- [EFL-SLICE-045] Remove device-inserted whitespace from payment amounts before display, QR generation and validation
- Route clicks on every child of the inline Send scanner button to the same scanner action
- Verify a complete Receive URI to populated Send form, including a space directly after the decimal point
- [EFL-SLICE-044] Bootstrap confirmed wallet history once through ROT and persist it in IndexedDB
- Record later Send, scanned receipts and newly observed incoming outputs without balance authority
- Add a draggable one-row-peeking history drawer and reproduce outbound payment receipts
- [EFL-SLICE-043] Give every zero-confirmation request exclusive generation ownership
- Let a newly scanned receipt supersede and silence an older in-flight observation
- Guarantee that only the current receipt can render status or schedule the next five-second check
- [EFL-SLICE-042] Encode payment receipts as a compact versioned JSON array with a base64url txid
- Render only the receipt QR at error correction M while leaving payment-request QR codes unchanged
- Accept both new compact receipts and all existing expanded transaction-receipt JSON
- [EFL-SLICE-041] Keep only one batched deterministic derivation canary in ordinary startup
- Move full parser, planning, signing and receipt diagnostics behind an explicit console function
- Derive address ranges and transaction input keys from one seed and BIP32 account root per operation
- Record lightweight boot marks without delaying wallet readiness
- [EFL-SLICE-040] Refresh confirmed receipt state immediately until its exact output reaches the wallet snapshot
- Return to the ordinary one-minute state schedule as soon as the confirmed balance is synchronized
- Keep observer counts in the Receive title while the five-second zero-confirmation observation is active
- [EFL-SLICE-039] Collapse committed Send and observed Receive flows to one compact transaction panel
- Keep the sender receipt screen-wide and stable until explicitly closed
- Route the ordinary scanner by QR type and hide transaction identifiers from post-send presentation
- Poll sender confirmation once per minute without zero-confirmation presentation
- [EFL-SLICE-038] Close the mobile QR scanner completely before processing a payment receipt
- Repeat a non-terminal payment observation after five seconds without a manual retry control
- Use sober observer wording and stop only at confirmation or a verified output mismatch
- Show the amount with the enlarged Receive QR and add an enlarged sender receipt QR with its JSON
- [EFL-SLICE-037] Accept exact payment receipts for any locally derived active-wallet address through index 50
- Preserve the receipt address and amount while ROT verifies the exact transaction output
- Avoid background-refresh layout churn and add a screen-wide Receive QR overlay
- [EFL-SLICE-036] Restore the HTML/CSS presentation contract for the existing Expert mode logic
- [EFL-SLICE-034] Use the gateway that rejects duplicate ROT outpoints before wallet parsing
- [EFL-SLICE-033] Show a public payment-receipt QR after accepted broadcast and let the active Receive session scan it
- Aggregate exact txid, address and amount observations from every configured ROT without changing confirmed balance or spendability
- Replace the obsolete central wallet-name claim with a repeatable local SET action
- [EFL-SLICE-032] Remove the six-input ceiling and charge one minimum-fee tier per started group of six inputs
- Select, sign and locally verify transactions across the complete current confirmed UTXO set
- [EFL-SLICE-031] Issue Receive indices once, expand the atomic state horizon by ten through index 50 and then reuse older addresses
- Persist wallet-bound Receive rotation state and scan indices 0 through 50 once after seed-only restoration
- [EFL-SLICE-030] Route state, broadcast and transaction-status requests through one PHP URL
- Identify each gateway request with one explicit operation without changing wallet behavior
- [EFL-SLICE-029] Stop scheduling state requests after the activity focus expires
- Remove the unused legacy reCalcOLD() implementation
- [EFL-SLICE-028] Send the current checkpoint height and eleven per-address change heights
- Merge only changed address records into the in-memory snapshot
- Recalculate confirmations locally and request a full snapshot after start or wallet switch
- [EFL-SLICE-027] Add a remembered Expert mode that defaults to off
- Keep all validation and signing active while simplifying the ordinary Send presentation
- Preserve a reviewed plan across checkpoint-only changes and revalidate its selected inputs
- Separate initial broadcast, latest status and confirmed-state roundtrip measurements
- Remove the destination Edit route and leave scanned destinations editable
- [EFL-SLICE-026] Add an inline two-step broadcast confirmation after local verification
- Submit only the already-signed raw transaction and its locally calculated txid
- Compare ROT/Core outcomes with the local txid and display layered roundtrip timings
- Persist only pending txid and input outpoints so accepted spends remain locked until chain follow-up
- [EFL-SLICE-025] Guard document-level clicks without a parent element
- Prove that exact-spend transactions omit the zero-value change output
- Replace the unsigned plan warning after a signed result is available
- [EFL-SLICE-024] Keep the sender-paid fee explanation in About instead of the Send flow
- [EFL-SLICE-023] Derive the exact private key for every selected input index
- Build and sign the planned legacy P2PKH transaction entirely in the browser
- Produce raw transaction and local txid, then independently verify inputs and outputs
- Keep the signed result checkpoint-bound in memory and provide no broadcast route
- State that the sender pays the fee above the full recipient amount
- [EFL-SLICE-022] Route new 5A interface and runtime messages through HTML translation sources
- Wait for the selected language file before starting dynamic wallet presentation
- Keep English as the deterministic fallback and support named placeholders in T()
- Correct the Canada eCoin team domain and prevent duplicate English endorsements
- [EFL-SLICE-021] Validate a local Send destination and exact eight-decimal amount
- Select at most six confirmed inputs and reserve the configured fixed minimum fee
- Route change to derivation index 0 and bind the immutable plan to a fresh checkpoint
- Review all inputs and outputs without private-key use, raw transaction or broadcast
- Keep the balance permanently readonly and route Scan into the main-screen Send view
- [EFL-SLICE-020] Restore the existing multi-coin Balance dialog through its original button id
- Refresh the Receive QR when Reference or Fiat input changes the supported-coin amount
- Show confirmation time with checkpoint height and scale balances through eight decimals
- Toggle a compact responsive layout while Receive occupies the wallet action area
- [EFL-SLICE-019] Present the selected coin and confirmed balance as the wallet's primary card
- Keep the calculator visible while Receive replaces the general action buttons
- Rebuild the receive URI and QR one second after the amount changes
- Retain the prototype modal Receive source for later reference without routing the button through it
- [EFL-SLICE-018] Expire confirmed UTXOs independently from the low-frequency refresh scheduler
- Abort and invalidate in-flight financial state when the active wallet is replaced
- Keep each accepted snapshot immutable and replace it atomically at one checkpoint
- Expose observed-balance status without persisting network-derived spendable state
- [EFL-SLICE-017] Keep coin-specific state-service data inside supportedCoins
- Remove EFL from every JavaScript variable and function name
- Let derivation, state parsing, scheduling and Receive operate through a generic coin parameter
- [EFL-SLICE-016] Replace continuous EFL polling with activity-driven focus and sleep scheduling
- Retain the last observed calculator balance while keeping stale UTXOs unavailable to Send
- Wake silently on startup, EFL selection, Receive, Send and renewed visible activity
- [EFL-SLICE-015] Derive change index 0 and receive indices 1 through 10 for one live state request
- Validate the complete relay response before exposing its balance or confirmed UTXOs
- Keep the live EFL snapshot in memory and never persist it as spendable wallet state
- Refresh through the fixed EFL-SLICE relay and fail closed on timeout or malformed state
- [EFL-SLICE-014] Show the deterministic EFL receive address at index 1
- Generate the QR from the same held address with the canonical e-gulden: URI
- [EFL-SLICE-013] Restore valid 12-word and historical 24-word mnemonics through an explicit recovery field
- Activate an existing matching wallet instead of creating a duplicate
- [EFL-SLICE-012] Give the Seed button its own route and readonly seed dialog
- Clear the displayed seed when the dialog closes and never inject it as HTML
- [EFL-SLICE-011] Accept a valid historical 24-word mnemonic only with the six-ID backup shape
- Keep twelve words mandatory for canonical five-ID wallets
- [EFL-SLICE-010] Accept both the canonical five-ID and historical six-ID backup shape
- Preserve the historical sixth server ID without reintroducing remote ID creation
- [EFL-SLICE-009] Validate complete backup data and commit it before replacing localStorage
- Keep the emergency wallet and reload only after the restored wallet record is complete
- [EFL-SLICE-008] Queue kill after pending wallet transactions and wait for database deletion
- Block new wallet actions during kill and clear localStorage only after deletion succeeds
- [EFL-SLICE-007] Read and validate the selected wallet before replacing localStorage
- Wait for the wallet read transaction to complete and block concurrent switches
- [EFL-SLICE-006] Await wallet save and wallet list before create and startup continue
- Remove the startup decision based on an uninitialised walletCount
- [EFL-SLICE-005] Create twelve-word wallet entropy locally with crypto.getRandomValues exactly once
- Remove the remote entropy trigger from the market response
- [EFL-SLICE-004] Initialise the complete ROOTY version 1 database in one upgrade
- Ignore the prototype CC database and report database name and version in logDatabaseStructure()
- [EFL-SLICE-003] Serialize wallet database updates and resolve only after transaction commit
- Close the configuration database before wallet schema upgrades can start
- [EFL-SLICE-001] Automatically verify the fixed EFL mnemonic at indices 0, 1 and 10
- Keep address derivation available as a small independently testable function
*/

const screenWidth = window.innerWidth;
let viewportMeta = document.querySelector('meta[name="viewport"]');
if (screenWidth < 460) {
  let Scale=Math.round(100*(screenWidth/460))/100
  viewportMeta.content="width=device-width, initial-scale="+Scale+", maximum-scale=1.0, user-scalable=no"
} else {
  viewportMeta.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
}

function $$$(selector) {return document.querySelector(selector);}
String.prototype.subs = function (start, length){
  const S = this.toString();
  const size = S.length;
  let intStart = Number.isNaN(Number(start)) ? 0 : Number.parseInt(start);
  if (intStart === -Infinity) intStart = 0;
  else if (intStart < 0) intStart = Math.max(size + intStart, 0);
  else intStart = Math.min(intStart, size);
  let intLength = length === undefined ? size : (Number.isNaN(Number(length)) ? 0 : Number.parseInt(length));
  intLength = Math.max(Math.min(intLength, size), 0);
  let intEnd = Math.min(intStart + intLength, size);
  return S.substring(intStart, intEnd);
};

function increaseContrast(color, amount) {return Math.max(0, Math.min(255, color + amount))}
function hexToRgb(hex) {return hex.match(/\w\w/g).map(c => parseInt(c, 16))}
function rgbToHex(rgb) {return "#" + rgb.map(c => Math.min(255, c).toString(16).padStart(2, '0')).join('')}
function glossify(){
  var currentColorHex=localStorage.getItem("glossiColor")
  var currentColorRgb = hexToRgb(currentColorHex.substring(1))
  var newColorRgb = currentColorRgb.map(c => Math.max(0,c - 40))
  var newColorHex = rgbToHex(newColorRgb)
  $$$('#wallet').style.background=`linear-gradient(to bottom, ${currentColorHex}, ${newColorHex})`
  $$$('#console').style.color=calculateContrastColor(newColorHex)
}
function calculateContrastColor(bgColor) {
  const rgb = hexToRgb(bgColor.substring(1));
  const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}
async function calculateSHA256Hash(inputString) {
  const encoder = new TextEncoder();
  const data = encoder.encode(inputString);
  const buffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(buffer));
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  return hashHex;
}
const dbName="ROOTY"
const dbVersion=1
const tableExists = (objectStoreName) => {
  return openDatabase()
    .then((db)=>{
      const exists = db.objectStoreNames.contains(objectStoreName);
      db.close();
      return exists
    })
    .catch(()=>{return false})
};

function configurationDef() {
  let test=''
  let pin = null;
  let hash = null;
  let birth = null; 
  fetchConfiguration().catch(error => {
    console.error("Error fetching data", error);
  });
  function Pin() {return pin}
  function Hash() {return hash}
  function Birth() {return birth}
  function pinDefined() {return(pin===true||pin==null)}
  async function fetchConfiguration() {
    const data = await configuration(); 
    hash = data.hash;
    birth = data.birth;
    pin=!(data.hash==await calculateSHA256Hash(data.birth))
  }
  return {
    Pin,
    Hash,
    Birth,
    pinDefined
  };
}
const settings=configurationDef()

const bModal = new bootstrap.Modal($$$("#Modal"));
var modal = document.getElementById('Modal');
modal.addEventListener('hidden.bs.modal', function () {
  document.querySelectorAll('#walletSeedContent,#walletMnemonicInput,#walletMnemonicPassphrase,#walletMnemonicPassphraseRepeat').forEach(function(field){field.value=""})
  document.querySelectorAll('#walletMnemonicPassphraseShow').forEach(function(control){control.checked=false})
  if (rewindObject=="setupOwner") {setTimeout('dial("setupOwner",0,1)',1)}  
  if (rewindObject.substr(0,14)=="menuCurrencies"){setTimeout('dial("helpCalculator",0,1)',1)}
  if (rewindObject=="paymentRequest") {setTimeout('dial("paymentRequest",0,0)',1)}
  if (rewindObject=="sendRequest") {setTimeout('dial("sendRequest",0,0)',1)}
  rewindObject=""
});

var rewindObject=""
var readyState=false
var modalContext
var combos={}
const helloWoldTimeOut=60000
const internetRequestTimeout=5000
var flashTo=setTimeout("",50)
const splashTimeout=2000
const onlineTimeout=5000
const walletBootMarkPrefix="efl-wallet-"
function markWalletBoot(stage){
  if ((typeof performance==="undefined")||(typeof performance.mark!=="function")){return false}
  performance.mark(walletBootMarkPrefix+stage)
  return true
}
function inspectWalletBoot(){
  if ((typeof performance==="undefined")||(typeof performance.getEntriesByType!=="function")){return []}
  var marks=performance.getEntriesByType("mark").filter(function(entry){return entry.name.startsWith(walletBootMarkPrefix)})
  if (marks.length===0){return []}
  var origin=marks[0].startTime
  return marks.map(function(entry){return {stage:entry.name.substring(walletBootMarkPrefix.length),milliseconds:Math.round(entry.startTime-origin)}})
}
markWalletBoot("script-ready")
function online() {
  clearTimeout(onlineTO)
  var indicator=$$$('#id_online')
  var status=$$$('#idOnlineStatus')
  var text=$$$('#idOnlineText')
  if (navigator.onLine) {
    indicator.style.color="green"
    status.classList.remove("offline")
    text.textContent=T("txtOnline")
    status.setAttribute("aria-label",T("txtOnline"))
  } else {
    indicator.style.color="red"
    status.classList.add("offline")
    text.textContent=T("txtOffline")
    status.setAttribute("aria-label",T("txtOffline"))
  }
  onlineTO=setTimeout("online()",onlineTimeout)
}

setTimeout(() => {
  $$$("#splashScreen").style.transition = "opacity 1s ease-in";
  $$$("#splashScreen").style.opacity = "0";
}, splashTimeout);

$$$("#splashScreen").addEventListener("transitionend", () => {
  splashScreen.remove();
  markWalletBoot("splash-removed")
  if (settings.pinDefined()){getPin()}
});

var networks={}
var supportedCoins={}
const walletCoinTargets=Object.freeze(["efl","cdn","aur","dem"])
combos={
  Balance:{available:"|",selected:"|",active:"|",old:"|"},
  Reference:{available:"|",selected:"|",active:"|",old:"|"},
  Fiat:{available:"|",selected:"|",active:"|",old:"|"},
  Supported:{available:"|",selected:"|",active:"|",old:"|"}
}
if (localStorage.getItem("combos")!=null) {
  combos=JSON.parse(localStorage.getItem("combos"))
} else {
  combos['Balance']['active']='|isk|'
  combos['Reference']['active']='|btc|'
  combos['Fiat']['active']='|eur|'
  combos['Supported']['active']='|aur|'  
}

if (localStorage.getItem("supportedCoins")!=null) {supportedCoins=JSON.parse(localStorage.getItem("supportedCoins"))}
var change=false
change=addSupport(change,"aur","auroracoin","Auroracoin","aur","isk")
change=addSupport(change,"cdn","canadaecoin","Canada eCoin","canada","cad")
change=addSupport(change,"efl","egulden","eGulden","efl","eur")
change=addSupport(change,"cesc","cryptoescudo","cryptoescudo","portugal","eur")
change=addSupport(change,"dem","emark","Deutsche eMark","germany","eur")
change=addSupport(change,"fjc","fujicoin","Fujicoin","fjc","jpy")
change=addSupport(change,"btc","bitcoin","Bitcoin","bitcoin","usd")
change=addSupport(change,"ltc","litecoin","Litecoin","litecoin","usd")
change=addSupport(change,"kmd","komodo","Komodo","komodo","usd")
change=addSupport(change,"maza","maza","Mazacoin","mazacoin","eur")
change=addSupport(change,"slg","sterlingcoin","Sterlingcoin","sterlingcoin","gbp")
change=addSupport(change,"pak","pakcoin","Pakcoin","pakcoin","pkr")
change=addSupport(change,"rubtc","rubtc","Russian Bitcoin","russia","rub")
change=addSupport(change,"boli","boli","Bolivarcoin","venezuela","vef")
supportedCoins["efl"].stateService={
  url:"https://eflslice.communitycoins.org/EFL-SLICE-048.php",
  responseCoin:"EFL",
  uriScheme:"e-gulden:",
  unitsPerCoin:100000000,
  decimals:8,
  changeIndex:0,
  receiveIndex:1,
  initialReceiveCount:10,
  maximumReceiveIndex:50,
  receiveBatchSize:10,
  reuseResetRemaining:20,
  focusDuration:10*60*1000,
  focusInterval:60*1000,
  requestTimeout:8000,
  spendableAge:60*1000+8000,
  feeTierInputs:6,
  minimumFeeSats:100000,
  maximumRawTransactionHex:65000,
  broadcastTimeout:30000,
  maximumZeroConfirmationObservers:3,
  historyTimeout:45000,
  broadcastStatusInterval:60000,
  testMnemonic:"abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about",
  testAddresses:{
    0:"LX8JvsBQnfpUueErrzm4bwuecDmgccPQhu",
    1:"LP2RVac4wEybdULuGncLL3zCC2cWYfGcDe",
    10:"LRFFMZwox2M7nRAqHcfyHpoFYEtYvnATRD"
  },
  testPassphrase:"TREZOR",
  testPassphraseAddress:"Lg19Z51CBr4SLSttYmrN4wzcpqZNkwtpJm",
  testSignedTxid:"bbc242035724d80039dd785f3c326117085e8a46c9f5563ecf9642205aebb587",
  testSignedByteLength:373
}
supportedCoins["efl"].balance="0"
supportedCoins["efl"].connections=0
supportedCoins["dem"].stateService={
  url:"https://demslice.communitycoins.org/MULTI-COIN-001.php",
  responseCoin:"DEM",
  uriScheme:"emark:",
  unitsPerCoin:1000000,
  decimals:6,
  changeIndex:0,
  receiveIndex:1,
  initialReceiveCount:10,
  maximumReceiveIndex:50,
  receiveBatchSize:10,
  reuseResetRemaining:20,
  focusDuration:10*60*1000,
  focusInterval:60*1000,
  requestTimeout:8000,
  spendableAge:60*1000+8000,
  feeTierInputs:6,
  minimumFeeSats:1000,
  maximumRawTransactionHex:65000,
  broadcastTimeout:30000,
  maximumZeroConfirmationObservers:1,
  historyTimeout:45000,
  broadcastStatusInterval:60000,
  testMnemonic:"abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about",
  testAddresses:{
    0:"NSLekptmfNGK91maBKj1fu1RUFo8Go451Q",
    1:"NPYwwLnYZBAbSB2AuTNsij4N5ZNKFXizEb",
    10:"NZUZGpoLkehGc87y1rAfpEaPnBWX5gZeRB"
  },
  testPassphrase:"TREZOR",
  testPassphraseAddress:"NhZvD6ZBjdPE8fCvccBN93uPeB7WMUD9f6",
  testTransactionTime:1700000000,
  testSignedTxid:"5c4e7031a06e1728b5497fc38f127ae8fc0b0e9d7ce278f67f8c00de93cfdd4b",
  testSignedByteLength:379
}
supportedCoins["dem"].balance="0"
supportedCoins["dem"].connections=0
if (change) {
  endorsed="aur|cdn|efl|cesc|dem|slg|pak|rubtc|boli|btc|ltc"
  testCombos()
}
enforceWalletCoinChoices()
saveSupportedCoins()
function addSupport(change,tikker,network,name,image,defaultFiat){
  if (undefined==supportedCoins[tikker]){
    supportedCoins[tikker]={"name":name,"network":network,"coin":image,"defaultFiat":defaultFiat,"balance":0,"connections":0}
    change=true
  }
  networks[tikker]={"index":network}
  return change
}
function saveSupportedCoins(){
  var storedCoins=JSON.parse(JSON.stringify(supportedCoins))
  for (const coin in storedCoins){
    if (storedCoins[coin].stateService==undefined){continue}
    storedCoins[coin].balance=0
    storedCoins[coin].connections=0
  }
  localStorage.setItem("supportedCoins",JSON.stringify(storedCoins))
}
function testCombos(){
  for (const tikker in supportedCoins) {
    for (const combo in combos) {
      var defaultFiat=supportedCoins[tikker].defaultFiat
      if (combo=="Fiat") {
        if (combos[combo]['available'].indexOf("|"+defaultFiat+"|")<0) {combos[combo]['available']+="|"+defaultFiat}
        if (combos[combo]['selected'].indexOf("|"+defaultFiat+"|")<0) {combos[combo]['selected']+="|"+defaultFiat}
      }
      if (combo=="Reference") {
        if (combos[combo]['available'].indexOf("|"+tikker+"|")<0) {combos[combo]['available']+="|"+tikker}
        if (combos[combo]['selected'].indexOf("|"+tikker+"|")<0) {combos[combo]['selected']+="|"+tikker}
        if (combos[combo]['available'].indexOf("|"+defaultFiat+"|")<0) {combos[combo]['available']+="|"+defaultFiat}
        if (combos[combo]['selected'].indexOf("|"+defaultFiat+"|")<0) {combos[combo]['selected']+="|"+defaultFiat}
      }
      if (combo=="Supported") {
        if ((!walletCoinTargets.includes(tikker))||(supportedCoins[tikker].stateService==undefined)){continue}
        if (combos[combo]['available'].indexOf("|"+tikker+"|")<0) {combos[combo]['available']+="|"+tikker}
        if (combos[combo]['selected'].indexOf("|"+tikker+"|")<0) {combos[combo]['selected']+="|"+tikker}
      }
    }
  }
  localStorage.setItem("combos",JSON.stringify(combos))
}
function operationalWalletCoins(){
  return walletCoinTargets.filter(function(coin){return (supportedCoins[coin]!=undefined)&&(supportedCoins[coin].stateService!=undefined)})
}
function enforceWalletCoinChoices(){
  var operational=operationalWalletCoins()
  if (operational.length===0){throw new Error("No operational wallet coin configured")}
  var values="|"+operational.join("|")+"|"
  combos.Supported.available=values
  combos.Supported.selected=values
  var active=String(combos.Supported.active||"").replace(/\|/g,"")
  if (!operational.includes(active)){active=operational[0]}
  combos.Supported.active="|"+active+"|"
  var old=String(combos.Supported.old||"").replace(/\|/g,"")
  combos.Supported.old=operational.includes(old)?"|"+old+"|":combos.Supported.active
  combos.Balance.available=values
  combos.Balance.selected=values
  combos.Balance.active="|"+active+"|"
  combos.Balance.old=combos.Balance.active
  localStorage.setItem("combos",JSON.stringify(combos))
  return operational
}

if (localStorage.getItem("glossiColor")==null) {localStorage.setItem("glossiColor","#ffffff")}

const defaultSupported=Object.keys(supportedCoins)[0]
const baseName='https://communitycoins.org/prototype/'
const urlParams = new URLSearchParams(window.location.search);
const urlLanguage = urlParams.get('language')
const urlCoin = urlParams.get('coin')
var urlCoinApplied=false
const defaultLanguage="en"
const walletMaximum=5
var language=defaultLanguage
var countries=""
var ids=[]
var wallets=[]
var LOG=""
var cardSetting=""
var clickedIt=Date.now()
var supportedLanguages="en|nl|is|de|ur|pt|ru".split('|');
const translation=[]

if (localStorage.getItem("language")!=null) {
  language=localStorage.getItem("language")
} else if (urlLanguage!=null) {
  for (let i=0; i<supportedLanguages.length; i++) {
    if (supportedLanguages[i]==urlLanguage){language=urlLanguage}
  }
} else {
  preferredLanguage=navigator.language.split('-')[0];
  for (let i=0; i<supportedLanguages.length; i++) {
    if (supportedLanguages[i]==preferredLanguage){language=preferredLanguage}
  }
}
localStorage.setItem("language",language)

if (localStorage.getItem("ids")==null) {
  for(var i=0;i<5;i++) {ids.push(b58())}
  localStorage.setItem("ids",JSON.stringify(ids))
  for (i=1;i<5;i++) {ids[0]+=ids[i]}
  ids[0]+=`${stamp()}`;
  calculateSHA256Hash(ids[0])
  .then(data => {
    ids[0]=data
    localStorage.setItem("ids",JSON.stringify(ids))
  })
  cardSetting="--"
  localStorage.setItem("cardSetting",cardSetting)
  /*ids 0:seed entropy 1:wallet name key 2:wallet (backup)id 3:rates 4:reserve */
}else{
  ids=JSON.parse(localStorage.getItem("ids"))
  if (localStorage.getItem("cardSetting")==null) {
    cardSetting="--"
    localStorage.setItem("cardSetting",cardSetting)
  } else {
    cardSetting=localStorage.getItem("cardSetting")
  }
}
if (localStorage.getItem("extraInfo")==null) {localStorage.setItem("extraInfo","true")}
localStorage.removeItem("claimed")
if (localStorage.getItem("birth")==null) {
  localStorage.setItem("birth",Date.now())
  localStorage.setItem("latestBackup",0)
  saveSupportedCoins()
}
var translationReady
if (language!=defaultLanguage) {
  translationReady=new Promise(function(resolve){
  const scriptLanguage = document.createElement('script');
  scriptLanguage.src = `js/language_${language}.js?v=MULTI-COIN-004`;
  scriptLanguage.defer=true
  scriptLanguage.onload=function(){translate();resolve()}
  scriptLanguage.onerror=function(){translate();resolve()}
  document.head.appendChild(scriptLanguage);
  })
} else {
  translate()
  translationReady=Promise.resolve()
}
var rates={}
var ccRates={}
var connections={}
connections["cc-prices"]={state:"idle",lastTime:null,repeat:3500,url:"https://communitycoins.org/marketmerge/?latest"}
connections["global-asset-prices"]={state:"idle",lastTime:null,repeat:3600,url:"https://communitycoins.org/marketmerge/?rates"}
connections["mailbox"]={state:"idle",lastTime:null,repeat:600,url:"https://communitycoins.org/marketmerge/?mail"}
connections["networks"]={state:"idle",lastTime:null,repeat:3600,url:"https://communitycoins.org/marketmerge/?networks"}
var inputElement
const operands=$$$('#operands').innerHTML.split("|")[0]
var skipMemoChange=false
var walletCount
var walletSwitching=false
var walletResetting=false
var walletRestoring=false
var dialogContext,paymentMail
var currentReceiveRequest
var receiveUpdateTimer
var transactionPresentation="closed"
var calculatorShowsBalance=false
var localSendPlan
var sendPlanning=false
var localSignedTransaction
var transactionBuilding=false
var broadcastRequesting=false
var broadcastStatusRequesting=false
var broadcastRequestController
var broadcastStatusTimer
var pendingBroadcast
var currentPaymentReceipt
var currentPaymentReceiptHistoryStatus
var currentPaymentReceiptSeenAt
var currentSenderPaymentReceipt
var zeroConfirmationRequestId=0
var zeroConfirmationController
var zeroConfirmationTimer
const zeroConfirmationInterval=5000
var confirmedReceiptSyncTimer
const confirmedReceiptSyncInterval=5000
const compactReceiptVersion="CCR1"
const pendingBroadcastStorageKey="pendingBroadcasts"
const confirmedOutpointWatchStorageKey="confirmedOutpointWatch"
const walletSpendLockStorageKey="walletSpendLock"
const expertModeStorageKey="expertMode"
const receiveAddressStorageKey="receiveAddressState"
const confirmedBalanceCacheStorageKey="confirmedBalanceCache"
const mnemonicPassphraseStorageKey="bip39Passphrase"
const mnemonicWordCounts=[12,15,18,21,24]
const historyPeekHeight=48
const historyMaximumHeight=480
var historyDrawerHeight=0
var historyLastOpenHeight=historyPeekHeight
var historyDrag
var historyBootstrapRequests={}
var historyCleanupRequests={}
var scanPurpose="memo"
var initialStateCoin=String(combos.Supported.active||"").replace(/\|/g,"")
let stateCoin=operationalWalletCoins().includes(initialStateCoin)?initialStateCoin:operationalWalletCoins()[0]
var stateRefreshTimer
var stateFreshnessTimer
var stateRequest
var stateRequestController
var stateGeneration=0
var walletAddresses=[]
var walletState={coin:null,status:"idle",snapshot:null,error:null,updatedAt:null}
var stateActivity={mode:"sleeping",focusUntil:0,lastActivityAt:null,lastAttemptAt:null,nextRefreshAt:null,attempts:0,lastReason:null}
var QR=""
var scannerActive=false
const qrConfig = { fps: 10, qrbox: 250 };
var html5QrcodeScanner
var all //ref. integr

function getStateService(coin=stateCoin){
  var service=supportedCoins[coin]&&supportedCoins[coin].stateService
  if (service==undefined){throw new Error("State service unavailable for "+coin)}
  if ((!Number.isSafeInteger(service.decimals))||(service.decimals<0)||(service.decimals>8)||(!Number.isSafeInteger(service.unitsPerCoin))||(service.unitsPerCoin!==Math.pow(10,service.decimals))||(!Number.isSafeInteger(service.minimumFeeSats))||(service.minimumFeeSats<1)||(!Number.isSafeInteger(service.feeTierInputs))||(service.feeTierInputs<1)){
    throw new Error("Invalid coin service units for "+coin)
  }
  return service
}
function isExpertMode(){return localStorage.getItem(expertModeStorageKey)==="1"}
function applyExpertMode(){
  var enabled=isExpertMode()
  var wallet=$$$('#wallet')
  if (wallet!=null){wallet.classList.toggle('expert-mode',enabled)}
  document.querySelectorAll('[id="idExpertMode"]').forEach(function(control){control.checked=enabled})
  updateCoinStateStatus(stateCoin)
  if ((pendingBroadcast!=null)&&(transactionPresentation==="sendSubmitted")){renderBroadcastTracking(pendingBroadcast)}
  return enabled
}
function setExpertMode(enabled){
  localStorage.setItem(expertModeStorageKey,enabled?"1":"0")
  return applyExpertMode()
}
function readPendingBroadcastStore(){
  var raw=localStorage.getItem(pendingBroadcastStorageKey)
  if (raw==null){return {}}
  try{
    var store=JSON.parse(raw)
    return (store!=null)&&(typeof store==="object")&&(!Array.isArray(store))?store:{}
  }catch(error){return {}}
}
function isPendingBroadcastRecord(record,fingerprint,coin=stateCoin){
  if ((record==null)||(typeof record!=="object")||(record.coin!==coin)||(record.fingerprint!==fingerprint)){return false}
  if ((typeof record.txid!=="string")||(!/^[0-9a-f]{64}$/.test(record.txid))){return false}
  if ((!Number.isSafeInteger(record.acceptedAt))||(record.acceptedAt<0)){return false}
  if (!['SUBMITTING','ACCEPTED','KNOWN','MEMPOOL','UNKNOWN','CONFIRMED'].includes(record.status)){return false}
  if ((!Array.isArray(record.inputs))||(record.inputs.length<1)){return false}
  if ((record.receipt!=null)&&(!isTransactionReceipt(record.receipt,coin,record.txid))){return false}
  if ((record.receiptVout!=null)&&((!Number.isSafeInteger(record.receiptVout))||(record.receiptVout<0))){return false}
  if ((record.walletId!=null)&&((typeof record.walletId!=="string")||(record.walletId===""))){return false}
  if ((record.historyStatus!=null)&&(!['OFFERED','SEEN','CONFIRMED'].includes(record.historyStatus))){return false}
  return record.inputs.every(function(input){
    return (input!=null)&&(typeof input.txid==="string")&&(/^[0-9a-f]{64}$/.test(input.txid))&&Number.isSafeInteger(input.vout)&&(input.vout>=0)
  })
}
function getWalletFingerprint(mnemonicString,coin=stateCoin){
  return deriveCoinAddress(mnemonicString,getStateService(coin).receiveIndex,coin)
}
function isTransactionReceipt(receipt,coin=stateCoin,expectedTxid=null){
  var service=getStateService(coin)
  if ((receipt==null)||(typeof receipt!=="object")||(Array.isArray(receipt))||(receipt.type!=="transactionReceipt")||(receipt.coin!==service.responseCoin)){return false}
  if ((typeof receipt.txid!=="string")||(!/^[0-9a-f]{64}$/.test(receipt.txid))||((expectedTxid!=null)&&(receipt.txid!==expectedTxid))){return false}
  if ((!Number.isSafeInteger(receipt.amountSats))||(receipt.amountSats<=0)){return false}
  try{return validateCoinAddress(receipt.address,coin)===receipt.address}catch(error){return false}
}
function txidToCompactReceipt(txid){
  if ((typeof txid!=="string")||(!/^[0-9a-f]{64}$/.test(txid))){throw new Error("Invalid payment receipt")}
  var binary=""
  for (var offset=0;offset<txid.length;offset+=2){binary+=String.fromCharCode(parseInt(txid.substring(offset,offset+2),16))}
  return btoa(binary).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")
}
function compactReceiptToTxid(value){
  if ((typeof value!=="string")||(!/^[0-9A-Za-z_-]{43}$/.test(value))){throw new Error("Invalid payment receipt")}
  var padded=value.replace(/-/g,"+").replace(/_/g,"/")+"=".repeat((4-value.length%4)%4)
  var binary
  try{binary=atob(padded)}catch(error){throw new Error("Invalid payment receipt")}
  if (binary.length!==32){throw new Error("Invalid payment receipt")}
  var txid=Array.from(binary,function(character){return character.charCodeAt(0).toString(16).padStart(2,"0")}).join("")
  if (txidToCompactReceipt(txid)!==value){throw new Error("Invalid payment receipt")}
  return txid
}
function encodeTransactionReceipt(receipt,coin=stateCoin){
  if (!isTransactionReceipt(receipt,coin)){throw new Error("Invalid payment receipt")}
  return JSON.stringify([compactReceiptVersion,receipt.coin,txidToCompactReceipt(receipt.txid),receipt.address,receipt.amountSats.toString(36)])
}
function decodeTransactionReceipt(value,coin=stateCoin){
  var decoded
  try{decoded=JSON.parse(String(value))}catch(error){throw new Error("Invalid payment receipt")}
  if (Array.isArray(decoded)){
    if ((decoded.length!==5)||(decoded[0]!==compactReceiptVersion)||(typeof decoded[1]!=="string")||(typeof decoded[2]!=="string")||(typeof decoded[3]!=="string")||(typeof decoded[4]!=="string")||(!/^[0-9a-z]+$/.test(decoded[4]))){throw new Error("Invalid payment receipt")}
    var amountSats=parseInt(decoded[4],36)
    if ((!Number.isSafeInteger(amountSats))||(amountSats<=0)||(amountSats.toString(36)!==decoded[4])){throw new Error("Invalid payment receipt")}
    decoded={type:"transactionReceipt",coin:decoded[1],txid:compactReceiptToTxid(decoded[2]),address:decoded[3],amountSats:amountSats}
  }
  if (!isTransactionReceipt(decoded,coin)){throw new Error("Invalid payment receipt")}
  return Object.freeze({type:decoded.type,coin:decoded.coin,txid:decoded.txid,address:decoded.address,amountSats:decoded.amountSats})
}
function createTransactionReceipt(result,coin=stateCoin){
  var recipient=result.outputs.find(function(output){return output.role==="recipient"})
  if (recipient==null){throw new Error("Recipient output unavailable")}
  return Object.freeze({type:"transactionReceipt",coin:getStateService(coin).responseCoin,txid:result.txid,address:recipient.address,amountSats:recipient.valueSats})
}
function findWalletAddressIndex(mnemonicString,address,coin=stateCoin,passphrase=null){
  var service=getStateService(coin)
  if ((typeof mnemonicString!=="string")||(!mnemonic.check(mnemonicString))){return -1}
  return deriveWalletAddresses(mnemonicString,coin,service.maximumReceiveIndex,passphrase).indexOf(address)
}
function parseTransactionReceipt(value,coin=stateCoin){
  var receipt=decodeTransactionReceipt(value,coin)
  var addressIndex=findWalletAddressIndex(localStorage.getItem("bip39"),receipt.address,coin)
  if (addressIndex<0){throw new Error("Receipt address does not belong to this wallet")}
  return Object.freeze({type:receipt.type,coin:receipt.coin,txid:receipt.txid,address:receipt.address,amountSats:receipt.amountSats,addressIndex:addressIndex})
}
function renderPaymentReceipt(receipt,visible=true){
  if ((!visible)||(!isTransactionReceipt(receipt,stateCoin))){return false}
  currentSenderPaymentReceipt=receipt
  return true
}
function createReceiveAddressState(horizon,coin=stateCoin){
  var service=getStateService(coin)
  return {version:1,horizon:horizon==undefined?service.initialReceiveCount:horizon,reusePhase:false,reused:[],lastIndex:null}
}
function receiveAddressKey(coin=stateCoin){
  return coin==="efl"?receiveAddressStorageKey:receiveAddressStorageKey+"."+coin
}
function isReceiveAddressState(state,coin=stateCoin){
  var service=getStateService(coin)
  if ((state==null)||(typeof state!=="object")||(state.version!==1)||(state.reusePhase!==true&&state.reusePhase!==false)){return false}
  if ((!Number.isSafeInteger(state.horizon))||(state.horizon<service.initialReceiveCount)||(state.horizon>service.maximumReceiveIndex)||(state.horizon%service.receiveBatchSize!==0)){return false}
  if (!Array.isArray(state.reused)){return false}
  var seen={}
  for (const index of state.reused){
    if ((!Number.isSafeInteger(index))||(index<service.receiveIndex)||(index>state.horizon)||(seen[index])){return false}
    seen[index]=true
  }
  if ((state.lastIndex!==null)&&((!Number.isSafeInteger(state.lastIndex))||(state.lastIndex<service.receiveIndex)||(state.lastIndex>state.horizon))){return false}
  return true
}
function getReceiveAddressState(coin=stateCoin){
  var key=receiveAddressKey(coin)
  var raw=localStorage.getItem(key)
  if (raw!=null){
    try{
      var state=JSON.parse(raw)
      if (isReceiveAddressState(state,coin)){return state}
    }catch(error){}
  }
  var state=createReceiveAddressState(undefined,coin)
  localStorage.setItem(key,JSON.stringify(state))
  return state
}
function persistReceiveAddressState(state,coin=stateCoin){
  localStorage.setItem(receiveAddressKey(coin),JSON.stringify(state))
  updateDb().catch(function(error){console.error("Unable to save Receive rotation:",error)})
  return state
}
function getWalletAddressCount(coin=stateCoin){
  return getReceiveAddressState(coin).horizon+1
}
function receiveLastChangeHeight(index,snapshot){
  if ((snapshot==null)||(!Array.isArray(snapshot.addresses))){return null}
  var addressState=snapshot.addresses[index]
  return (addressState!=null)&&Number.isSafeInteger(addressState.lastChangeHeight)?addressState.lastChangeHeight:null
}
function selectReceiveAddressIndex(snapshot=null,coin=stateCoin){
  var service=getStateService(coin)
  var state=getReceiveAddressState(coin)
  var used={}
  state.reused.forEach(function(index){used[index]=true})
  var index=null
  var horizonExpanded=false

  if (!state.reusePhase){
    for (var candidate=service.receiveIndex;candidate<=state.horizon;candidate++){
      if (!used[candidate]){index=candidate;break}
    }
    if (index==null && state.horizon<service.maximumReceiveIndex){
      state.horizon=Math.min(service.maximumReceiveIndex,state.horizon+service.receiveBatchSize)
      horizonExpanded=true
      index=state.horizon-service.receiveBatchSize+1
    }else if (index==null){
      state.reusePhase=true
      state.reused=[]
      used={}
    }
  }

  if (state.reusePhase){
    var remaining=state.horizon-state.reused.length
    if (remaining<=service.reuseResetRemaining){
      state.reused=[]
      used={}
    }
    var candidates=[]
    for (var candidate=service.receiveIndex;candidate<=state.horizon;candidate++){
      if (!used[candidate] && (candidate!==state.lastIndex || state.horizon-state.reused.length===1)){
        candidates.push(candidate)
      }
    }
    if (candidates.length===0){
      for (var candidate=service.receiveIndex;candidate<=state.horizon;candidate++){
        if (!used[candidate]){candidates.push(candidate)}
      }
    }
    candidates.sort(function(left,right){
      var leftHeight=receiveLastChangeHeight(left,snapshot)
      var rightHeight=receiveLastChangeHeight(right,snapshot)
      if (leftHeight===rightHeight){return left-right}
      if (leftHeight===null){return -1}
      if (rightHeight===null){return 1}
      return leftHeight-rightHeight
    })
    index=candidates[0]
  }

  if ((!Number.isSafeInteger(index))||(index<service.receiveIndex)||(index>state.horizon)){throw new Error("Receive address unavailable")}
  state.reused.push(index)
  state.lastIndex=index
  persistReceiveAddressState(state,coin)
  return {index:index,horizonExpanded:horizonExpanded,state:state}
}
function persistPendingBroadcast(record){
  var store=readPendingBroadcastStore()
  store[record.fingerprint]=record
  localStorage.setItem(pendingBroadcastStorageKey,JSON.stringify(store))
}
function removePendingBroadcast(record){
  if (record==null){return}
  var store=readPendingBroadcastStore()
  delete store[record.fingerprint]
  if (Object.keys(store).length===0){localStorage.removeItem(pendingBroadcastStorageKey)}else{localStorage.setItem(pendingBroadcastStorageKey,JSON.stringify(store))}
}
function clearBroadcastStatusTimer(){
  clearTimeout(broadcastStatusTimer)
  broadcastStatusTimer=null
}
function resetPendingBroadcastRuntime(){
  clearBroadcastStatusTimer()
  if (broadcastRequestController!=null){broadcastRequestController.abort()}
  broadcastRequestController=undefined
  broadcastRequesting=false
  broadcastStatusRequesting=false
  pendingBroadcast=undefined
  currentSenderPaymentReceipt=undefined
  hidePaymentReceiptQrOverlay()
  var tracking=$$$('#idBroadcastTracking')
  if (tracking!=null){tracking.classList.add('hidden')}
}
function loadPendingBroadcast(mnemonicString,coin=stateCoin){
  var fingerprint=getWalletFingerprint(mnemonicString,coin)
  if ((pendingBroadcast!=null)&&(pendingBroadcast.fingerprint===fingerprint)&&(pendingBroadcast.coin===coin)){
    return pendingBroadcast
  }
  var record=readPendingBroadcastStore()[fingerprint]
  pendingBroadcast=isPendingBroadcastRecord(record,fingerprint,coin)?record:undefined
  renderHistory().then(function(){if (pendingBroadcast!=null){peekHistoryDrawer()}}).catch(function(error){console.error("Unable to restore pending history:",error)})
  return pendingBroadcast
}
function pendingInputsPresent(snapshot,pending=pendingBroadcast){
  if ((pending==null)||(snapshot==null)||(!Array.isArray(snapshot.utxos))){return false}
  return pending.inputs.some(function(input){
    return snapshot.utxos.some(function(utxo){return (utxo.txid===input.txid)&&(utxo.vout===input.vout)})
  })
}
function outpointKey(input){
  return input.txid+":"+input.vout
}
function readConfirmedOutpointWatchStore(){
  var raw=localStorage.getItem(confirmedOutpointWatchStorageKey)
  if (raw==null){return {}}
  try{
    var store=JSON.parse(raw)
    return (store!=null)&&(typeof store==="object")&&(!Array.isArray(store))?store:{}
  }catch(error){return {}}
}
function isConfirmedOutpointWatch(record,coin=stateCoin){
  if ((record==null)||(typeof record!=="object")||(record.version!==1)||(record.walletId!==historyWalletId())||(record.coin!==coin)){return false}
  if ((!Number.isSafeInteger(record.height))||(record.height<0)||(typeof record.blockHash!=="string")||(!/^[0-9a-f]{64}$/.test(record.blockHash))||(!Array.isArray(record.outpoints))){return false}
  var seen={}
  return record.outpoints.every(function(outpoint){
    if ((typeof outpoint!=="string")||(!/^[0-9a-f]{64}:[0-9]+$/.test(outpoint))||(seen[outpoint]===true)){return false}
    seen[outpoint]=true
    return true
  })
}
function readConfirmedOutpointWatch(coin=stateCoin){
  var record=readConfirmedOutpointWatchStore()[coin]
  return isConfirmedOutpointWatch(record,coin)?record:null
}
function expectedPendingOutpoints(coin=stateCoin){
  var expected={}
  if ((pendingBroadcast==null)||(pendingBroadcast.coin!==coin)||(!Array.isArray(pendingBroadcast.inputs))){return expected}
  pendingBroadcast.inputs.forEach(function(input){expected[outpointKey(input)]=true})
  return expected
}
function persistConfirmedOutpointWatch(snapshot,coin=stateCoin){
  var store=readConfirmedOutpointWatchStore()
  var record={
    version:1,
    walletId:historyWalletId(),
    coin:coin,
    height:snapshot.height,
    blockHash:snapshot.blockHash,
    outpoints:Array.from(new Set(snapshot.utxos.map(outpointKey))).sort()
  }
  store[coin]=record
  localStorage.setItem(confirmedOutpointWatchStorageKey,JSON.stringify(store))
  return record
}
function readWalletSpendLock(){
  var raw=localStorage.getItem(walletSpendLockStorageKey)
  if (raw==null){return null}
  try{
    var record=JSON.parse(raw)
    if ((record==null)||(typeof record!=="object")||(record.version!==1)||(record.walletId!==historyWalletId())||(record.reason!=="unexpected-spend")||(typeof record.coin!=="string")||(!Number.isSafeInteger(record.detectedAt))||(record.detectedAt<0)||(!Number.isSafeInteger(record.outpointCount))||(record.outpointCount<1)){return null}
    return record
  }catch(error){return null}
}
function isWalletSpendLocked(){
  return readWalletSpendLock()!=null
}
function updateWalletSpendLockPresentation(){
  var locked=isWalletSpendLocked()
  var status=$$$('#idWalletLockStatus')
  if (status!=null){status.classList.toggle('hidden',!locked)}
  document.querySelectorAll('[id="idUnlockWallet"]').forEach(function(control){control.classList.toggle('hidden',!locked)})
  var sendButton=$$$('#idSend')
  if (sendButton!=null){
    sendButton.classList.toggle('wallet-spend-locked',locked)
    sendButton.setAttribute('aria-disabled',locked?'true':'false')
  }
  return locked
}
function persistWalletSpendLock(coin,outpoints){
  if (isWalletSpendLocked()){return false}
  var record={version:1,walletId:historyWalletId(),reason:"unexpected-spend",coin:coin,detectedAt:Date.now(),outpointCount:outpoints.length}
  localStorage.setItem(walletSpendLockStorageKey,JSON.stringify(record))
  clearLocalSendPlan(T("txtWalletLockedSend"))
  updateWalletSpendLockPresentation()
  updateDb().catch(function(error){console.error("Unable to save wallet spend lock:",error)})
  alert(T("txtUnexpectedSpendLock"))
  return record
}
function unlockWalletSpend(){
  if (!isWalletSpendLocked()){updateWalletSpendLockPresentation();return false}
  localStorage.removeItem(walletSpendLockStorageKey)
  clearLocalSendPlan()
  updateWalletSpendLockPresentation()
  updateDb().catch(function(error){console.error("Unable to save wallet unlock:",error)})
  return true
}
function requireWalletSpendUnlocked(){
  if (!isWalletSpendLocked()){return true}
  clearLocalSendPlan(T("txtWalletLockedSend"))
  updateWalletSpendLockPresentation()
  alert(T("txtWalletLockedSend"))
  return false
}
function observeConfirmedOutpoints(snapshot,coin=stateCoin){
  var previous=readConfirmedOutpointWatch(coin)
  var current=persistConfirmedOutpointWatch(snapshot,coin)
  var unexpected=[]
  if ((previous!=null)&&(snapshot.height>previous.height)){
    var present={}
    current.outpoints.forEach(function(outpoint){present[outpoint]=true})
    var expected=expectedPendingOutpoints(coin)
    unexpected=previous.outpoints.filter(function(outpoint){return (present[outpoint]!==true)&&(expected[outpoint]!==true)})
  }
  if (unexpected.length>0){persistWalletSpendLock(coin,unexpected)}
  return Object.freeze({previous:previous,current:current,unexpected:Object.freeze(unexpected.slice())})
}
function setBalanceStatus(text,status=""){
  var statusLine=$$$('#idBalanceStatus')
  if (statusLine==null){return}
  statusLine.textContent=text
  statusLine.className="balance-status"+(status===""?"":" "+status)
}
function timingValue(value){return Number.isSafeInteger(value)&&value>=0?value:"-"}
function formatStateTiming(timing){
  if (timing==null){return ""}
  return T("txtStateTiming",{
    client:timingValue(timing.clientMs),
    relay:timingValue(timing.relayMs),
    rotRoundTrip:timingValue(timing.rotRoundTripMs),
    attempt:timingValue(timing.attempts)
  })
}
function updateStateTiming(){
  var line=$$$('#idStateTiming')
  if (line==null){return}
  line.textContent=(walletState.snapshot==null)?"":formatStateTiming(walletState.snapshot.timing)
}
function formatStateTime(timestamp){
  if (!Number.isSafeInteger(timestamp)){return "--:--:--"}
  return new Date(timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})
}
function scaleBalanceValue(){
  var balanceInput=$$$('#inputBalance')
  var length=String(balanceInput.value).replace(/[^0-9]/g,"").length
  balanceInput.classList.remove('balance-medium','balance-long')
  if (length>12){balanceInput.classList.add('balance-long')}
  else if (length>8){balanceInput.classList.add('balance-medium')}
}
function updateCoinPresentation(coin,refreshBalance=true){
  var coinData=supportedCoins[coin]
  if (coinData==undefined){return false}
  $$$('#idHostCoinIcon').src="img/"+coinData.coin+".png"
  $$$('#idHostCoinIcon').alt=coinData.name
  $$$('#idHostCoinName').textContent=coinData.name
  $$$('#idHostCoinTicker').textContent=coin.toUpperCase()
  $$$('#idReceiveActionCoin').textContent=coinData.name
  $$$('#idSendActionCoin').textContent=coinData.name
  var balanceCombo=$$$('#comboBalance')
  if (Array.from(balanceCombo.options).some(function(option){return option.value===coin})){
    balanceCombo.value=coin
    combos["Balance"]['active']=coin
    localStorage.setItem("combos",JSON.stringify(combos))
  }
  if (refreshBalance){testInputBalance()}
  scaleBalanceValue()
  if (coin!==stateCoin){setBalanceStatus(T("txtBalanceServiceNotConnected"))}
  updateWalletSpendLockPresentation()
  return true
}
function updateCoinStateStatus(coin=stateCoin){
  if ($$$('#comboSupported').value!==coin){return}
  var cachedBalance=readConfirmedBalanceCache(coin)
  if ((walletState.snapshot!=null)&&pendingInputsPresent(walletState.snapshot)){
    setBalanceStatus(T("txtTransactionSubmitted"),"loading")
  }else if (isStateCurrent(coin)){
    setBalanceStatus(T("txtConfirmedAtBlock",{time:formatStateTime(walletState.updatedAt),height:walletState.snapshot.height}),"ready")
  }else if ((walletState.status==="loading")&&(walletState.snapshot!=null)){
    setBalanceStatus(T("txtUpdatingLastConfirmedAtBlock",{time:formatStateTime(walletState.updatedAt),height:walletState.snapshot.height}),"loading")
  }else if ((walletState.status==="loading")&&(cachedBalance!=null)){
    setBalanceStatus(T("txtRefreshingCachedConfirmedAtBlock",{time:formatStateTime(cachedBalance.updatedAt),height:cachedBalance.height}),"loading")
  }else if (walletState.status==="loading"){
    setBalanceStatus(T("txtRefreshingConfirmedBalance"),"loading")
  }else if ((walletState.status==="stale")&&(walletState.snapshot!=null)){
    setBalanceStatus(T("txtLastConfirmedAtBlockRefreshRequired",{time:formatStateTime(walletState.updatedAt),height:walletState.snapshot.height}),"stale")
  }else if (cachedBalance!=null){
    setBalanceStatus(T("txtLastConfirmedAtBlockRefreshRequired",{time:formatStateTime(cachedBalance.updatedAt),height:cachedBalance.height}),"stale")
  }else{
    setBalanceStatus(T("txtConfirmedBalanceUnavailable"),"unavailable")
  }
  updateStateTiming()
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function waitForValidPin(){
  let old="old"
  while(settings.pinDefined()&&(settings.Hash()!==await calculateSHA256Hash($$$('#idp').value+settings.Birth()))) {
    while (settings.pinDefined()&&($$$('#idp').value==old)) {await delay(100)}
    old=$$$('#idp').value
  }
  bModal.hide()
  $$$("#Modal").style.background="none"
}
function stopFlash(){
  for (const combo in combos) {$$$('#input'+combo).style.backgroundColor='white'}
}
function endorse(){
  teams="canada+Canada eCoin+CDN+canadaecoin.ca|iceland+Auroracoin+AUR+auroracoin.org|the_netherlands+eGulden+EFL+egulden.org|pakistan+Pakcoin+PAK+pakcoin.io|united_kingdom+Sterlingcoin+SLG+sterlingcoin.org/|germany+Deutsche eMark+DEM+deutsche-emark.org|portugal+Cryptoescudo+CESC+cryptoescudo.pt|japan+fujiCoin+FUJI+fujicoin.org|russia+Russian Bitcoin+RUBTC+nationalbitcoin.org/Manifesto.pdf".split("|")
  
  for (let i = 0; i < teams.length; i++) {
    team=teams[i].split('+')
    let statement=document.createElement("DIV")
    statement.classList.add("panel","panel-default")
    let inner=`<div class="panel-heading"><div class="max-width-image">`
    inner+=`<img src="img/${team[0]}.png" alt="${team[2]}" class="img-fluid"></div>`
    inner+=`<div class=div-center><p>${countries[i]} - ${team[2]} - <a href="https://${team[3]}">${team[3]}</a></div>`
    inner+=`<div class=italic>`+$$$("#"+"en_"+team[0]).innerHTML+"</div>"
    statement.innerHTML=inner
    $$$(`#en_infoMain`).appendChild(statement)
  }
}
function translate(){
  var elements = document.getElementsByClassName('T');
  
  if (translation==undefined) {return;}

  for(var i = 0; i < elements.length; i++){
    var str = elements[i].innerHTML
    if (language!=defaultLanguage) {
        var foundTranslation = translation.find(obj => obj.original == str);
    }else{
    	var foundTranslation={original:str,translation:str}
    }
    if (foundTranslation!=undefined) {
      if (foundTranslation.translation.indexOf("\n")<0) {
          elements[i].innerHTML=foundTranslation.translation
      } else{
        var trans=""
        foundTranslation.translation=foundTranslation.translation.replace(/\n\n/g,"<br><br style='line-height:75%'>")
        lines=foundTranslation.translation.split("\n")
        for (var line in lines){
            if (lines[line].substr(0,2)=="- "){
          trans+="<li>"+lines[line].substr(2)+"</li>\n"
            } else {
          trans+=lines[line]+"\n"
            }
        }
        elements[i].innerHTML=trans
      }
    } else {
      var gotOne=true
    }
  }
  applyTranslatedAttributes()
  countries=$$$("#countries").innerHTML.split("|")
  endorse()
}
function refreshCombos(){
  try{
    rates=JSON.parse(localStorage.getItem("rates")).rates
    ccRates=JSON.parse(localStorage.getItem("ccRates"))
  }catch(e){
    setTimeout("refreshCombos()",1000)
    return
  }
  for (const combo in combos) {
    const comboOptions=combos[combo]['selected'].split("|")
    const active=combos[combo]['active']
    combos[combo]['old']=active
    const comboBox=$$$(`#combo${combo}`)
    comboBox.options.length=0
    for (const option of comboOptions){
      if (option!=""){
        const comboOption = document.createElement("option");
        comboOption.value = option;
        var optionLabels=calculatorOptionLabels(option)
        comboOption.textContent=optionLabels.full
        comboOption.dataset.fullLabel=optionLabels.full
        comboOption.dataset.compactLabel=optionLabels.compact
        comboBox.appendChild(comboOption);
        if (active.indexOf(option)>=0) {
          comboBox.value=option
          if (combo=="Supported"){
            $$$("#idPaymentIcon").src="img/"+supportedCoins[option].coin+".png"
          }
        }
      }
    }
    if (combo!=="Balance"){prepareCompactCurrencySelect(comboBox)}
    if (combo!="Balance") {$$$("#input"+combo).value=0}
  }
  applyRequestedCoin()
  var selectedCoin=$$$('#comboSupported').value
  if (operationalWalletCoins().includes(selectedCoin)&&selectedCoin!==stateCoin){switchStateCoin(selectedCoin,"coin-selection",false)}
  testInputBalance()
  updateCoinPresentation(stateCoin,false)
  syncBalanceToCalculator(stateCoin,false)
}
function calculatorOptionLabels(code){
  var name=""
  if ((supportedCoins[code]!=undefined)&&(typeof supportedCoins[code].name==="string")){name=supportedCoins[code].name}
  else if ((rates!=undefined)&&(rates[code]!=undefined)&&(typeof rates[code].name==="string")){name=rates[code].name}
  var ticker=String(code).toUpperCase()
  if ((name==="")||(name.toLowerCase()===String(code).toLowerCase())){return {compact:ticker,full:ticker}}
  return {compact:name,full:name+" · "+ticker}
}
function calculatorOptionLabel(code){return calculatorOptionLabels(code).full}
function expandCurrencySelectLabels(comboBox){
  Array.from(comboBox.options).forEach(function(option){
    if (option.dataset.fullLabel!=undefined){option.textContent=option.dataset.fullLabel}
  })
}
function compactCurrencySelectLabel(comboBox){
  Array.from(comboBox.options).forEach(function(option){
    if (option.dataset.fullLabel==undefined){return}
    option.textContent=option.selected?option.dataset.compactLabel:option.dataset.fullLabel
  })
}
function prepareCompactCurrencySelect(comboBox){
  if (comboBox.dataset.compactCurrencySelect!=="1"){
    comboBox.dataset.compactCurrencySelect="1"
    comboBox.addEventListener("pointerdown",function(){expandCurrencySelectLabels(comboBox)})
    comboBox.addEventListener("focus",function(){expandCurrencySelectLabels(comboBox)})
    comboBox.addEventListener("change",function(){setTimeout(function(){compactCurrencySelectLabel(comboBox)},0)})
    comboBox.addEventListener("blur",function(){compactCurrencySelectLabel(comboBox)})
  }
  compactCurrencySelectLabel(comboBox)
  return comboBox
}
function applyRequestedCoin(){
  if (urlCoinApplied||(urlCoin==null)){return false}
  var coin=String(urlCoin).trim().toLowerCase()
  if (supportedCoins[coin]==undefined){urlCoinApplied=true;return false}
  var supportedCombo=$$$('#comboSupported')
  if ((supportedCombo==null)||(!Array.from(supportedCombo.options).some(function(option){return option.value===coin}))){urlCoinApplied=true;return false}
  supportedCombo.value=coin
  combos.Supported.active=coin
  var balanceCombo=$$$('#comboBalance')
  if ((balanceCombo!=null)&&Array.from(balanceCombo.options).some(function(option){return option.value===coin})){
    balanceCombo.value=coin
    combos.Balance.active=coin
  }
  localStorage.setItem("combos",JSON.stringify(combos))
  urlCoinApplied=true
  return true
}
function testInputBalance(){
  var balanceInput=$$$('#inputBalance')
  balanceInput.removeAttribute('disabled')
  balanceInput.setAttribute('readonly','true')
  if ($$$('#comboBalance').selectedIndex<0) {
    flash(balanceInput,'red')
    return
  }
  var selectedOption = $$$('#comboBalance').options[$$$('#comboBalance').selectedIndex];
  combos["Balance"]['active']=$$$('#comboBalance').value
  localStorage.setItem("combos",JSON.stringify(combos))
  if (selectedOption.value==stateCoin) {
    balanceInput.value=getDisplayedBalance()
  } else if (supportedCoins[selectedOption.value]!=undefined) {//TEST
    balanceInput.value=supportedCoins[selectedOption.value].balance
  } else {
    reCalc()
  }
  reCalc("inputBalance",false);
  scaleBalanceValue()
  combos["Reference"]['old']=combos["Reference"]['active']
}
function refreshCurrencyAvailability(){
  var change=false
  if (localStorage.getItem("rates") == null) {return;}
  for (const currency in rates) {
    const cType=rates[currency].type
    if ((cType=="fiat")) {
      if (combos["Reference"]["available"].indexOf(`${currency}|`)<0) {combos["Reference"]["available"]+=`${currency}|`;change=true}
      if (combos["Fiat"]["available"].indexOf(`${currency}|`)<0) {combos["Fiat"]["available"]+=`${currency}|`;change=true}
    }
    if ((cType=="crypto")||(cType=="commodity")) {
      if (combos["Reference"]["available"].indexOf(`${currency}|`)<0) {combos["Reference"]["available"]+=`${currency}|`;change=true}
    }
  }
  if (change){
    localStorage.setItem("combos",JSON.stringify(combos))
    refreshCombos()
  }
}
function updateLayout() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  document.body.classList.add("landscape");
  if (viewportWidth < viewportHeight) {document.body.classList.remove("landscape");} 

  var receiveOverlay=$$$('#idReceiveQrOverlay')
  if ((receiveOverlay!=null)&&(!receiveOverlay.classList.contains('hidden'))){renderReceiveQrOverlay()}
  var receiptOverlay=$$$('#idPaymentReceiptQrOverlay')
  if ((receiptOverlay!=null)&&(!receiptOverlay.classList.contains('hidden'))){renderPaymentReceiptQrOverlay()}

  setTimeout(() => {$$$("#wallet").style.visibility="visible";}, 500);
}
function handleClick(event) {
  clickedIt=Date.now()
  if (walletResetting||walletRestoring){return}
  recordStateActivity("click")

  var clickedElement = event.target;
  if ((clickedElement==null)||(typeof clickedElement.getAttribute!=="function")){return}
  var clickedId = typeof clickedElement.id==="string"?clickedElement.id:"";
  var clickedParent=clickedElement.parentElement
  
  if ((clickedParent!=null)&&(clickedParent.id=="id_buttonSimpleQR")) {clickedId="id_buttonSimpleQR"}
  if ((clickedParent!=null)&&(clickedParent.id=="id_buttonShare")) {clickedId="id_buttonShare"}
  if (event.target.closest&&event.target.closest('#idReceiveShare')) {clickedId="idReceiveShare"}
  if (event.target.closest&&event.target.closest('#idReceiveQrExpand')) {clickedId="idReceiveQrExpand"}
  if (event.target.closest&&event.target.closest('#idReceiveQrOverlayClose')) {clickedId="idReceiveQrOverlayClose"}
  if (event.target.closest&&event.target.closest('#idPaymentReceiptQrOverlayClose')) {clickedId="idPaymentReceiptQrOverlayClose"}
  if (event.target.closest&&event.target.closest('#idSendScan')) {clickedId="idSendScan"}
  if (event.target.closest&&event.target.closest('#idReceive')) {clickedId="idReceive"}
  if (event.target.closest&&event.target.closest('#idSend')) {clickedId="idSend"}
  if (event.target.closest&&event.target.closest('#idScan')) {clickedId="idScan"}
  if (event.target.closest&&event.target.closest('#idReceiveReceiptScan')) {clickedId="idReceiveReceiptScan"}
  if (event.target.closest&&event.target.closest('#id_setting')) {clickedId="id_setting"}
  if (event.target.closest&&event.target.closest('#id_question')) {clickedId="id_question"}
  if (event.target.closest&&event.target.closest('#id_speak')) {clickedId="id_speak"}
  if (event.target.closest&&event.target.closest('#idHelpReferences')) {clickedId="idHelpReferences"}
  if (event.target.closest&&event.target.closest('#idUnlockWallet')) {clickedId="idUnlockWallet"}
  if (event.target.closest&&event.target.closest('#menuCurrenciesReference')) {clickedId="menuCurrenciesReference"}
  if (event.target.closest&&event.target.closest('#menuCurrenciesFiat')) {clickedId="menuCurrenciesFiat"}
  if (event.target.closest&&event.target.closest('#menuCurrenciesSupported')) {clickedId="menuCurrenciesSupported"}
  if (event.target.closest&&event.target.closest('#idHelpReferenceSettings')) {clickedId="menuCurrenciesReference"}
  if (event.target.closest&&event.target.closest('#idHelpFiatSettings')) {clickedId="menuCurrenciesFiat"}
  if (event.target.closest&&event.target.closest('#idHelpWalletCoinInformation')) {clickedId="menuCurrenciesSupported"}
  if (clickedId == "idHistory") {getPin()}
  if (clickedId == "id_buttonShare") {
    if (navigator.share) {
      const shareData = {
        title: $$$('#txtPaymentRequest').innerHTML,
        subject: $$$('#txtPaymentRequest').innerHTML,
        text: paymentMail
      };
      navigator.share(shareData);
    } else {
      const subject = encodeURIComponent($$$('#txtPaymentRequest').innerHTML);
      const body = encodeURIComponent(paymentMail);
      const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;      
    }
  }
  if (clickedId == "idReceiveShare") {shareReceiveRequest()}
  if (clickedId == "idReceiveQrExpand") {showReceiveQrOverlay()}
  if ((clickedId == "idReceiveQrOverlayClose")||(clickedId == "idReceiveQrOverlay")) {hideReceiveQrOverlay()}
  if (clickedId == "idShowPaymentReceipt") {showPaymentReceiptQrOverlay()}
  if ((clickedId == "idPaymentReceiptQrOverlayClose")||(clickedId == "idPaymentReceiptQrOverlay")) {hidePaymentReceiptQrOverlay()}
  if (clickedId == "idReceiveReceiptScan") {showReceiveReceiptScanner()}
  if (clickedId == "id_buttonSimpleQR") {
    if ($$$('#idPanelQR')!=undefined) {$$$('#idPanelQR').remove()}
    if (currentReceiveRequest==undefined){setReceiveRequest()}
    var Code=currentReceiveRequest.uri
    var newDiv = document.createElement("div");
    newDiv.className = "panel panel-default"
    newDiv.id = "idPanelQR";
    $$$('#idReceiveInfo').parentNode.insertBefore(newDiv,$$$('#idReceiveInfo'))
    var uriLine=document.createElement("div")
    uriLine.className="center"
    uriLine.style.overflowWrap="anywhere"
    uriLine.textContent=Code
    newDiv.appendChild(uriLine)
    var qrPanel=document.createElement("div")
    qrPanel.id="idQr"
    qrPanel.className="center"
    newDiv.appendChild(qrPanel)
    var qrcode = new QRCode("idQr");
    qrcode.makeCode(Code);
  }
  
  if ((clickedParent!=null)&&(clickedElement.getAttribute('data-tag')=="card")){
    const x=clickedParent.rowIndex
    if (clickedParent.classList.contains("blur")) {
      clickedParent.classList.remove("blur")
      cardSetting=cardSetting.substring(0,x)+"+"+cardSetting.substring(x+1)
    }else {
      clickedParent.classList.add("blur")      
      cardSetting=cardSetting.substring(0,x)+"-"+cardSetting.substring(x+1)
    }
    localStorage.setItem("cardSetting",cardSetting)
  }
  if (clickedId == "idReceive") {showReceiveView()}
  if (clickedId == "inputBalance") {syncBalanceToCalculator($$$('#comboBalance').value,true)}
  if (clickedId == "idTransactionClose") {closeTransactionView()}
  if (clickedId == "idSend") {showSendView()}
  if (clickedId == "idBuildSendPlan") {reviewSendTransaction()}
  if (clickedId == "idBuildSignedTransaction") {prepareSignedTransaction()}
  if (clickedId == "idPrepareBroadcast") {showBroadcastConfirmation()}
  if (clickedId == "idBroadcastTransaction") {broadcastSignedTransaction()}
  if (clickedId == "idSendScan") {showSendScanner()}
  if (clickedId == "idExpertMode") {setExpertMode(clickedElement.checked)}
  if (clickedId == "idUnlockWallet") {unlockWalletSpend()}
  if (clickedId == "idRequestShare") {}
  if (clickedId == "idRequestUniversal") {}
  if (clickedId == "idRequestSpecific") {}
  if (clickedId == "idRequestShort") {}
  if ((clickedId=="owner")||(clickedId=="ownerLabel")||(clickedId=="menuOwner")) {dial("setupOwner",0,1);}
  if (clickedId=="menuPin") {dial("setupp",0,1);}
  if (clickedId.substr(0,14)=="menuCurrencies") {rewindObject=clickedId;dial(clickedId,0,1);}
  if (clickedId=="id_setting") {dial("setup",0,0)}
  if (clickedId=="id_question") {dial("helpMain",0,0)}
  if (clickedId=="id_helpWalletExchange") {rewindObject=dialogContext;dial("helpWalletExchange",0,0)}
  if ((clickedId=="id_helpCalculator")||(clickedId=="menuCalculator")) {dial("helpCalculator",0,0)}
  if (clickedId=="walletBackup") {dial("backupOptions",0,0)}
  if (clickedId=="walletCreate") {dial("walletCreate",0,0)}
  if (clickedId=="walletDelete") {dial("walletDelete",0,0)}
  if (clickedId=="walletSeed") {dial("walletSeed",0,0)}
  if (clickedId=="walletRecover") {dial("reloadBackup",0,0)}
  if (clickedId=="walletMnemonicRestore") {
    restoreWalletMnemonic(
      $$$('#walletMnemonicInput').value,
      $$$('#walletMnemonicPassphrase').value,
      $$$('#walletMnemonicPassphraseRepeat').value
    ).catch(error=>{
      console.error("Unable to restore wallet mnemonic:",error)
      alert(error.code==="PASSPHRASE_MISMATCH"?$$$('#txtPassphraseMismatch').innerHTML:$$$('#txtInvalidString').innerHTML)
    })
  }
  if (clickedId==="walletMnemonicPassphraseShow") {
    var showPassphrase=$$$('#walletMnemonicPassphraseShow').checked
    $$$('#walletMnemonicPassphrase').type=showPassphrase?"text":"password"
    $$$('#walletMnemonicPassphraseRepeat').type=showPassphrase?"text":"password"
  }
  if (clickedId=="id_trashMemo") {$$$("#idMemo").value=""}
  if (clickedId=="id_helpMemo") {dial("helpMemo",0,0)}
  if (clickedId=="id_helpMotivation") {rewindObject="setupOwner";dial("helpMotivation",0,0)}
  if (clickedId=="idHelpReferences") {dial("infoMain",0,0)}
  if (clickedId=="id_speak") {dial("promote",0,0)}
  if (clickedId=="menuLanguage") {dial("menuLanguage",0,1)}
  if (clickedId.substr(0,4)=="exit") {
    if (scannerActive){closeScannerModal()}else{bModal.hide()}
  }
  if (clickedId.substr(0,4)=="save") {submit()}
  if (clickedId=="idScan") {showUniversalScanner()}
  if (clickedId=="searchButton") {
    $$$('#id_modalbody').insertBefore($$$('#panel-calc'),$$$('#idSendInfo'))
  }
  if (clickedId.substr(0,8)=="idManage") {dial("manage",0,0)}
  if ((clickedId=="balanceButton")||(clickedId=="idPaymentIcon")) {dial("balance",0,0)}
  if (clickedId=="nameClaim") {setLocalWalletName()}
  if (clickedId=="extraInfo") {setTimeout('switchExtraInfo()',1)}
}
function getPin(){
    modalContext="grassroot"
    diaLog=modalContext
    $$$("#id_modalbody").innerHTML=$$$(`#${"en_"+diaLog}`).innerHTML
    $$$("#Modal").style.backgroundColor="#AEBB8F"
    title=$$$(`#${"en_"+diaLog}`).getAttribute('title');
    if (title!=undefined) {$$$("#ModalTitle").innerHTML=title}
    updateLayout()
    if (!$$$("#buttonHelp").classList.contains("invisible")) {$$$("#buttonHelp").classList.toggle("invisible")}
    if (!$$$("#save").classList.contains("invisible")) {$$$("#save").classList.toggle("invisible")}
    if (!$$$("#exit0").classList.contains("invisible")) {$$$("#exit0").classList.toggle("invisible")}
    if (!$$$("#exit1").classList.contains("invisible")) {$$$("#exit1").classList.toggle("invisible")}
    bModal.show()
    setTimeout(() => {$$$('#idp').focus()}, 100);
    waitForValidPin()
}
function setOwner(){
  if (localStorage.getItem("owner_inHeader")=="1") {
    if ($$$("#owner").classList.contains("hidden")){
      $$$("#owner").classList.remove("hidden")
      $$$("#ownerLabel").classList.remove("hidden")
    }
    if (localStorage.getItem("owner")=="") {
      $$$("#owner").innerText="...";
    }else{
      $$$("#owner").innerText=localStorage.getItem("owner");
      if (!$$$("#owner").classList.contains("hidden")){
        $$$("#ownerLabel").classList.add("hidden")
      }
    }
  } else {
    $$$("#owner").classList.add("hidden")
    $$$("#ownerLabel").classList.add("hidden")
  }
}
async function setLocalWalletName(){
  var field=$$$('#idOwner')
  var status=$$$('#claimAlert')
  var name=field.value.trim().replace(/\s+/g," ")
  if ((name.length>32)||(!/^[0-9A-Za-z@. ]*$/.test(name))){
    status.textContent="Use at most 32 letters, numbers, spaces, @ or ."
    return false
  }
  field.value=name
  localStorage.setItem("owner",name)
  localStorage.removeItem("claimed")
  setOwner()
  try{
    await updateDb()
    status.textContent="Wallet name saved locally"
    return true
  }catch(error){
    status.textContent="Unable to save wallet name"
    return false
  }
}

async function fetchdata(url, timeoutDuration, type) {
  try {
    const response = await Promise.race(
      [fetch(url),
      new Promise(resolve => {setTimeout(() => {
        //console.log(`Timeout occurred for URL: ${url}`);
        resolve({ timeout: true });}, timeoutDuration);
      })]
    )
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
      throw new Error(`Fetch or JSON parsing error: ${error.message}`);
  }
}
function flash(e,color) {
  // if (!readyState) {return}
  currency=$$$("#combo"+e.id.substr(5)).value // Lets worry about decimals here
  e.value=Number(e.value).toFixed(8)
  if (rates[currency]!=undefined) {
    if (rates[currency].type=="fiat"){e.value=Number(e.value).toFixed(2)}
  }
  e.value=trim0(e.value)
  
  clearTimeout(flashTo)
  if (!color==undefined) {
    e.style.backgroundColor=color
  } else {
    e.style.backgroundColor='yellow'
  }
  flashTo=setTimeout("stopFlash()",1000)  
}
function helloWorld(){
  try{
    rates=JSON.parse(localStorage.getItem("rates")).rates
    ccRates=JSON.parse(localStorage.getItem("ccRates"))
  }catch(e){}
  
  for (const key in connections) {
    if (navigator.onLine) {
      let connection=connections[key]
      let duration=connection.repeat
      let activity=(Date.now()-clickedIt)/1000;

      if (connection.lastTime!=null) {duration=(Date.now()-connection.lastTime)/1000} // How long ago
      if (!connection.busy && (duration>=connection.repeat) && (activity<duration)) { // Has there been useractivity
        connections[key].busy=true
        var test
        if ((key=="cc-prices")&&(ids.length==5)){test="&"+ids[1]}else{test=""}
        if (key=="mailbox"){test="&"+ids[1]}
        if (key=="networks"){test="&all"}
        console.log(">>>"+connection.url+test)
        fetchdata(connection.url+test, internetRequestTimeout)
        .then(data => {
          connections[key].busy=false
          if (key!="global-asset-prices") {
            data.lastTime=Date.now()
            connections[key].lastTime=Date.now()
          }
          if (key=="global-asset-prices") {
            if ((data["rates"]!=undefined)&&(ccRates!=undefined)) { 
              console_log(`${stamp()} global-asset-prices`)
              for (const currency in supportedCoins) { // cc-prices are leading
                if ((data.rates[currency]==undefined)&&(ccRates[currency]==undefined)) {
                  data.rates[currency]={'name':supportedCoins[currency].name,'value':100000000}
                } else if (data.rates[currency]==undefined) {
                  data.rates[currency]={'name':supportedCoins[currency].name,'value':1/ccRates[currency]}
                }
              }
              localStorage.setItem("rates",JSON.stringify(data))
              rates=JSON.parse(localStorage.getItem("rates")).rates
              refreshCurrencyAvailability()
              setTimeout(() => {reCalc()},100);
              data.lastTime=Date.now()
              connections[key].lastTime=Date.now()
            }
          } else if (key=="cc-prices") {
            if (data["efl"]!=undefined) {
              console_log(`${stamp()} cc-prices`)
              localStorage.setItem("ccRates",JSON.stringify(data))
              if (rates==undefined) {rates["efl"]={'name':'efl','value':100000000}}
              ccRates=JSON.parse(localStorage.getItem("ccRates"))
              var change=false 
              for (const currency in supportedCoins) {
                if ((rates[currency]==undefined)&&(ccRates[currency]==undefined)) {
                  rates[currency]={'name':supportedCoins[currency].name,'value':100000000}
                  change=true
                } else if (rates[currency]==undefined) {
                  rates[currency]={'name':supportedCoins[currency].name,'value':1/ccRates[currency]}
                  change=true
                }
              } 
              if (change) {localStorage.setItem("rates",JSON.stringify(rates))}
              setTimeout(() => {reCalc()},100)
            }
          } else if (key=="networks") {
            console_log(`${stamp()} cc-networks`)
            for (const currency in supportedCoins) {
              if (data[currency]!=undefined){
                supportedCoins[currency].connections=data[currency]
              }
            }
          } else if (key=="mailbox") {
            if (data["mail"]!=undefined) {
              if (data["mail"]=="1") { // TODO first fetch this mail before alerting the user
                if ($$$('#idMail').classList.contains('bi-mailbox2')) {
                  $$$('#idMail').classList.remove('bi-mailbox2');
                  $$$('#idMail').classList.add('bi-mailbox2-flag'); 
                  $$$('#idMail').classList.add('red'); 
                }
              } else {
                if ($$$('#idMail').classList.contains('bi-mailbox2-flag')) {
                  $$$('#idMail').classList.remove('bi-mailbox2-flag');
                  $$$('#idMail').classList.add('bi-mailbox2');
                  $$$('#idMail').classList.remove('red');
                }                
              }
            }
          }
        })
        .catch(error => {
            connections[key].busy=false
            console.error(`${stamp()} ${error} ${key}`);
        })
      }
    }
  }
  setTimeout(helloWorld, 60000);
}
function testCalc(e) {
  if (supportedCoins[comboBalance.value]!=undefined){
    supportedCoins[comboBalance.value].balance=$$$('#inputBalance').value
    saveSupportedCoins()
  }
}
function calculatorAmountIsEmpty(){
  var amount=normalizePaymentAmount($$$('#inputSupported').value)
  return (amount==="")||(Number(amount)===0)
}
function syncBalanceToCalculator(coin=stateCoin,force=false){
  if ((supportedCoins[coin]==undefined)||((!force)&&(transactionPresentation!=="closed"))){return false}
  var supportedCombo=$$$('#comboSupported')
  var supportedInput=$$$('#inputSupported')
  if ((supportedCombo==null)||(supportedInput==null)){return false}
  var available=Array.from(supportedCombo.options).some(function(option){return option.value===coin})
  if (!available){return false}
  if ((!force)&&(supportedCombo.value!==coin)){return false}
  if ((!force)&&(!calculatorShowsBalance)&&(!calculatorAmountIsEmpty())){return false}
  if (supportedCombo.value!==coin){
    supportedCombo.value=coin
    combos["Supported"]['active']=coin
    localStorage.setItem("combos",JSON.stringify(combos))
    $$$("#idPaymentIcon").src="img/"+supportedCoins[coin].coin+".png"
  }
  supportedInput.value=coin===stateCoin?getDisplayedBalance(coin):String(supportedCoins[coin].balance||"0")
  try{reCalc(supportedInput,true)}catch(error){}
  calculatorShowsBalance=true
  return true
}
function clearAutomaticCalculatorBalance(){
  if (!calculatorShowsBalance){return false}
  ;['#inputReference','#inputFiat','#inputSupported'].forEach(function(selector){
    var input=$$$(selector)
    if (input!=null){input.value=""}
  })
  calculatorShowsBalance=false
  return true
}
function reCalc(e,changedInput=true) {
  var id
  if ((ccRates==undefined)) {return}  //||!readyState
  if (e==undefined) {id=""} else {id=e.id}
  if (changedInput&&((id==="inputReference")||(id==="inputFiat")||(id==="inputSupported"))){calculatorShowsBalance=false}
  var balance=0;cValue=0
  if (id=="") {//No combo/selection change
    try{ // you cannot affort to crash here before the wallet is loaded
      if (supportedCoins[comboBalance.value]==undefined){//recalc Balance
        for (const currency in supportedCoins) {
          cValue=rates[currency].value
          if (supportedCoins[currency].balance>0) {balance+=supportedCoins[currency].balance/cValue}
        }
        $$$('#inputBalance').value=balance*rates[$$$('#comboBalance').value].value
        flash($$$('#inputBalance'))
      }
      currency=$$$('#comboSupported').value;
      cValue=rates[currency].value
      balance=$$$('#inputSupported').value/cValue
      currency=$$$('#comboFiat').value
      cValue=rates[currency].value
      $$$('#inputFiat').value=balance*cValue
      flash($$$('#inputFiat'))
      currency=$$$('#comboReference').value
      cValue=rates[currency].value
      $$$('#inputReference').value=balance*cValue
      flash($$$('#inputReference'))
    } catch(e) {
      flash($$$('#comboReference'),'red')
      flash($$$('#inputFiat'),'red')
      flash($$$('#inputSupported'),'red')
    }
  }
  if (id=="inputReference") {
    if (changedInput) {
      currency=$$$('#comboReference').value
      cValue=rates[currency].value
      balance=$$$('#inputReference').value/cValue
      currency=$$$('#comboFiat').value
      cValue=rates[currency].value
      $$$('#inputFiat').value=balance*cValue
      flash($$$('#inputFiat'))
      currency=$$$('#comboSupported').value
      cValue=rates[currency].value
      $$$('#inputSupported').value=balance*cValue
      flash($$$('#inputSupported'))
    } else {
      currency=combos["Reference"].old.replace(/\|/g,"")
      cValue=rates[currency].value
      balance=$$$('#inputReference').value/cValue
      currency=$$$('#comboReference').value
      cValue=rates[currency].value
      $$$('#inputReference').value=balance*cValue
      flash($$$('#inputReference'))
    }
  }
  if (id=="inputFiat") {
    if (changedInput) {
      currency=$$$('#comboFiat').value
      cValue=rates[currency].value
      balance=$$$('#inputFiat').value/cValue
      currency=$$$('#comboReference').value
      cValue=rates[currency].value
      $$$('#inputReference').value=balance*cValue
      flash($$$('#inputReference'))
      currency=$$$('#comboSupported').value
      cValue=rates[currency].value
      $$$('#inputSupported').value=balance*cValue
      flash($$$('#inputSupported'))
    } else {
      currency=combos["Fiat"].old.replace(/\|/g,"")
      cValue=rates[currency].value
      balance=$$$('#inputFiat').value/cValue
      currency=$$$('#comboFiat').value
      cValue=rates[currency].value
      $$$('#inputFiat').value=balance*cValue
      flash($$$('#inputFiat'))      
    }
  }
  if (id=="inputSupported") {
    if (changedInput) {
      currency=$$$('#comboSupported').value
      cValue=rates[currency].value
      balance=$$$('#inputSupported').value/cValue
      currency=$$$('#comboReference').value
      cValue=rates[currency].value
      $$$('#inputReference').value=balance*cValue
      flash($$$('#inputReference'))
      currency=$$$('#comboFiat').value
      cValue=rates[currency].value
      $$$('#inputFiat').value=balance*cValue
      flash($$$('#inputFiat'))
    } else {
      currency=combos["Supported"].old.replace(/\|/g,"")
      cValue=rates[currency].value
      balance=$$$('#inputSupported').value/cValue
      currency=$$$('#comboSupported').value
      cValue=rates[currency].value
      $$$('#inputSupported').value=balance*cValue
      flash($$$('#inputSupported'))      
    }
  }
  if (id=="inputBalance") {
    if (changedInput) { // while testing
      
    }
  }
  var receiveView=$$$('#idReceiveView')
  var sendView=$$$('#idSendView')
  if ((id==="inputReference")||(id==="inputFiat")||(id==="inputSupported")){
    if ((receiveView!=null)&&(!receiveView.classList.contains('hidden'))&&(transactionPresentation==="receiveRequest")){scheduleReceiveUpdate()}
    if ((sendView!=null)&&(!sendView.classList.contains('hidden'))&&(transactionPresentation==="sendEdit")){clearLocalSendPlan(T("txtAmountChanged"))}
  }
  if (transactionPresentation==="receiveRequest"){updateReceiveTitle()}
  if (transactionPresentation==="sendEdit"){updateSendTitle()}
}
function add(a,b) {
  const maxDecimalPlaces = Math.max(a.includes('.')?a.split('.')[1].length:0,b.includes('.')?b.split('.')[1].length:0);
  return trim0((Number(a)+Number(b)).toFixed(maxDecimalPlaces));
}
function subtract(a,b) {
  const maxDecimalPlaces = Math.max(a.includes('.')?a.split('.')[1].length:0,b.includes('.')?b.split('.')[1].length:0);
  return trim0((Number(a)-Number(b)).toFixed(maxDecimalPlaces));
}
function trim0(c){
  while (c.includes(".") && c.endsWith("0")) {c = c.slice(0, -1);}
  if (c.endsWith(".")) {c = c.slice(0, -1);}
  return c
}
function algebra(operator){
  var x,p
  try {
    p=prompt(operator+" operation") //operands[operands[0].indexOf(operator)+1]
  	p=p.replace(/\,/,".")
    if (operator== "%"){inputElement.value=inputElement.value*p/100;reCalc(inputElement.id)}
    if (operator== "*"){inputElement.value=inputElement.value*p;reCalc(inputElement.id)}
    if (operator== "/"){inputElement.value=inputElement.value/p;reCalc(inputElement.id)}
    if (operator== "+"){inputElement.value=add(inputElement.value,p);reCalc(inputElement.id)}
    if (operator== "-"){inputElement.value=subtract(inputElement.value,p);reCalc(inputElement.id)}
  } catch (e) {}
}
function calc(e){
  inputElement=e.target
  var valid="0123456789."+String.fromCharCode(8)
  var key = e.key
  if (operands.indexOf(key)>=0){
    setTimeout(() => algebra(`${key}`), 100);
    return false;
  }
  if ((e.target.value=="0")&&(key!=".")) {e.target.value=""}
  if ((key==".")&&(e.target.value.indexOf(".")>=0)){return false}
  if (valid.indexOf(key)<0){return false}
  return true
}
function validName(e,f) {
    $$$('#claimAlert').innerHTML='&nbsp';
    var valid="0123456789 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@."+String.fromCharCode(8)
    var c=""
    var key = window.event ? event.keyCode : e.which;
    var keychar = String.fromCharCode(key)
    if (valid.indexOf(keychar)<0) { return false }
    if ((key!=8) && (f.value.length>31)) { return false }
    return true
}
function validPin(e,f) {
    $$$('#claimAlert').innerHTML='&nbsp';
    var valid="0123456789abcdefghijklmnopqrstuvwxyz."+String.fromCharCode(8)
    var c=""
    var key = window.event ? event.keyCode : e.which;
    var keychar = String.fromCharCode(key)
    if (valid.indexOf(keychar)<0) { return false }
    if ((key!=8) && (f.value.length>31)) { return false }
    return true
}

//Utilities
function dump(){
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console_log(`${key}: ${value}`);
  }
}
function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
function mailTo(text) {
  const subject = encodeURIComponent($$$('#labelBackupContent').innerHTML);
  const body = encodeURIComponent($$$('#backupContent').innerHTML);
  const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
  window.location.href = mailtoUrl;
}
function b58(length=64) {
  let result='';
  const c='ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
  const cL=c.length;
  for (let i=0;i<length;i++){result+=c.charAt(Math.floor(Math.random()*cL))}
  return result;
}
//function languageModel(){
//  if (translation==undefined){translation=[];titleTranslation=[]}
//  const sep=""
//  var log="const translation=[\n"
//  const elements = document.getElementsByClassName('T');
//  for(var i = 0; i < elements.length; i++){
//    var str = elements[i].innerHTML.replace(/\n/g,"\\n").replace(/'/g, "\\'");
//    var org = str
//    var foundTranslation = translation.find(obj => obj.translation == str);
//    if (foundTranslation!=undefined) {org=foundTranslation.original}
//    log+=`  {original:'${org}',\ntranslation:'${str}'}`
//    if (i+1<elements.length) {log+=`,\n`}
//  }
//  log+="\n];\nconst titleTranslation=[\n"
//  const elementsWithTitle = document.querySelectorAll('[title]');
//  for(var i = 0; i < elementsWithTitle.length; i++){
//    const str = elementsWithTitle[i].getAttribute('title');
//    var org = str
//    var foundTranslation = titleTranslation.find(obj => obj.translation == str);
//    if (foundTranslation!=undefined) {org=foundTranslation.original}
//    log+=`  {original:'${org}',\ntranslation:'${str}'}`
//    if (i+1<elementsWithTitle.length) {log+=`,\n`}
//  };
//  log+="\n];"
//  downloadTextFile("translate.txt",log)
//}
function testrates() {
  const Types={}
  if (localStorage.getItem("rates")!=null) {
    const a =JSON.parse(localStorage.getItem("rates"))
    for (const key in a.rates) {
      Type=a.rates[key].type
      if (Types[Type]==undefined) {Types[Type]=1} else {Types[Type]++}
    }
  }
  for (const Type in Types){
    console_log (`${Type}\t${Types[Type]}`)
  }
}

function stamp(uxTime) {
  let now=new Date()
  if (uxTime===undefined) {now=new Date(Date.now());} else {now=new Date(uxTime);}
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const date = now.getDate().toString().padStart(2, "0");
  const currentTime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  return(currentTime);
}
function T(id,values={}) {
  if ($$$(`#${id}`)==null) {console_log("translation not defined: "+id);return}
  var text=$$$(`#${id}`).innerHTML
  for (const key in values){text=text.split("{"+key+"}").join(String(values[key]))}
  return text
}
function selectedPromotionCoin(){
  var selected=$$$('#comboSupported')
  if ((selected!=null)&&(supportedCoins[selected.value]!=undefined)){return selected.value}
  return stateCoin
}
function promotionCountry(coin){
  const countriesByLanguage={
    en:{efl:"the Netherlands",aur:"Iceland",cdn:"Canada",dem:"Germany",pak:"Pakistan",slg:"the United Kingdom",cesc:"Portugal",fuji:"Japan",rubtc:"Russia"},
    nl:{efl:"Nederland",aur:"IJsland",cdn:"Canada",dem:"Duitsland",pak:"Pakistan",slg:"het Verenigd Koninkrijk",cesc:"Portugal",fuji:"Japan",rubtc:"Rusland"}
  }
  var names=countriesByLanguage[language]||countriesByLanguage.en
  return names[coin]||T("txtPromotionHomeCommunity")
}
function promotionWalletUrl(coin){
  return "https://communitycoins.org/wallet?language="+encodeURIComponent(language)+"&coin="+encodeURIComponent(coin)
}
function renderPromotion(){
  var coin=selectedPromotionCoin()
  var coinData=supportedCoins[coin]
  if (coinData==undefined){return false}
  $$$('#idPromotionTitle').textContent=T("txtPromotionTitle",{coin:coinData.name})
  $$$('#idPromotionIntro').textContent=T("txtPromotionIntro",{coin:coinData.name,country:promotionCountry(coin)})
  $$$('#idQrcode').innerHTML=""
  var qrcode=new QRCode("idQrcode")
  qrcode.makeCode(promotionWalletUrl(coin))
  return true
}
function applyTranslatedAttributes(){
  for (const id of ["id_setting","id_question","id_speak"]){
    var action=$$$("#"+id)
    if (action!=null){
      var label=action.querySelector(".T")
      if (label!=null){action.setAttribute("aria-label",label.textContent.trim())}
    }
  }
  for (const id of ["menuCurrenciesReference","menuCurrenciesFiat","menuCurrenciesSupported"]){
    var calculatorAction=$$$("#"+id)
    if (calculatorAction!=null){
      var calculatorLabel=calculatorAction.querySelector(".T")
      if (calculatorLabel!=null){calculatorAction.setAttribute("aria-label",calculatorLabel.textContent.trim())}
    }
  }
  var sendTo=$$$('#idSendTo')
  if (sendTo!=null){sendTo.placeholder=T("txtSendPlaceholder")}
  var sendPlan=$$$('#idSendPlan')
  if (sendPlan!=null){sendPlan.setAttribute("aria-label",T("txtTransactionReview"))}
  var transactionClose=$$$('#idTransactionClose')
  if (transactionClose!=null){transactionClose.setAttribute("aria-label",T("txtBackToWallet"))}
}
function cryptoAdd(value1, value2) {return (Number(value1) + Number(value2)).toFixed(16).toString();}
function cryptoSub(value1, value2) {return (Number(value1) - Number(value2)).toFixed(16).toString();}
function switchExtraInfo(){
  var eCard=$$$('#payBusinessCard')
  for (var i = eCard.rows.length - 1; i >= 2; i--) {eCard.deleteRow(i);}
  var card=localStorage.getItem("card").trim().split("\n")
  var blur=!$$$('#extraInfo').checked
  if (blur) {localStorage.setItem("extraInfo","false")} else {localStorage.setItem("extraInfo","true")}
  for (var i=0;i<card.length;i++){
    var row = eCard.insertRow(2+i);row.classList.add("card")
    if (blur||cardSetting[i+2]=="-") {row.classList.add("blur")}
    var cell = row.insertCell(0);
    cell.innerHTML = card[i];
    cell.setAttribute('data-tag','card')
  }
}
function setExtraInfo(){
  if (localStorage.getItem("extraInfo")=="true") {$$$('#extraInfo').checked=true} else {$$$('#extraInfo').checked=false}
}
async function buildWalletView(){
  await updateDb()
  if (walletResetting){return []}
  return buildWalletView_()
}
async function buildWalletView_() {
  const txtActive=T("txtActive")
  const txtName=T("txtName")
  const txtActivity=T("txtActivity")
  var collection=`<table class='table table-bordered table-hover'><tr><td></td><td>${txtName}</td><td>${txtActivity}</td><td>ID</td></tr>`
  walletCount=0
  wallets=[]
  const db=await openDatabase()
  return new Promise((resolve,reject)=>{
    const transaction=db.transaction("wallets","readonly")
    const request=transaction.objectStore("wallets").index('id').openCursor()
    var settled=false
    const rejectTransaction=(error)=>{
      if (settled){return}
      settled=true
      db.close()
      reject(error)
    }
    transaction.oncomplete=()=>{
      if (settled){return}
      settled=true
      walletCount=wallets.length
      db.close()
      $$$("#idWalletView").innerHTML=collection
      resolve(wallets)
    }
    transaction.onerror=(event)=>{
      rejectTransaction(event.target.error||transaction.error)
    }
    transaction.onabort=()=>{
      rejectTransaction(transaction.error||new Error("Wallet list aborted"))
    }
    request.onsuccess=(event)=>{
      const cursor=event.target.result
      if (cursor) {
        const sequence=wallets.length+1
        var ownerField=""
        const short=cursor.value.id.substr(0,6)
        if (cursor.value.owner==null){
          ownerField=`[${short}...]`
        } else {
          ownerField=cursor.value.owner.trim().toLowerCase()
          if (ownerField=="") {ownerField=`[${short}...]`}
        }
        wallets.push({id:cursor.value.id,name:ownerField})
        if (cursor.value.id==ids[2]){collection+=`<tr style='cursor:pointer' class="table-active" onclick="activateWallet(this,'${cursor.value.id}')"><td>${txtActive}</td>`
        } else {
          collection+=`<tr style='cursor:pointer' onclick="activateWallet(this,'${cursor.value.id}')"><td></td>`
        }
        if (ownerField[0]=="[") {ownerField=`<span class=small>${ownerField}</span>`}
        collection+=`<td>${ownerField}</td>`
        collection+=`<td>${cursor.value.note}</td><td>${sequence}</td></tr>`
        cursor.continue()
      }
    }
    request.onerror=(event)=>{
      rejectTransaction(event.target.error)
    }
  })
}
function showWalletSeed(){
  const seed=localStorage.getItem("bip39")
  const seedField=$$$('#walletSeedContent')
  if ((seed==null)||(seedField==null)||(!mnemonic.check(seed))){return false}
  seedField.value=seed
  return true
}
async function dial(diaLog,help,save) {
  if ($$$("#exit0").classList.contains("invisible")) {$$$("#exit0").classList.toggle("invisible")}
  if ($$$("#exit1").classList.contains("invisible")) {$$$("#exit1").classList.toggle("invisible")}
  dialogContext=diaLog
  var title

  if (diaLog=="backupOptions"){generateBackup()}
  if (diaLog=="manage"){await buildWalletView()}
  if (diaLog=="walletRecover") {}
  if (diaLog=="walletCreate") {
    await buildWalletView()
    if (wallets.length>=walletMaximum) {alert($$$('#txtAlertNewWallet').innerHTML); return}
    if (confirm($$$('#txtNewWallet').innerHTML)) {
        resetWalletState("wallet-create")
        localStorage.clear()
        localStorage.setItem("language",language)
        location.reload()
        return
    }
  }
  if (diaLog=="walletDelete") { 
    const walletnr=prompt($$$('#txtPromptDeleteWallet').innerHTML)
    if (walletnr==null) {return
    } else if ((walletnr>wallets.length)||(walletnr<1)||(isNaN(walletnr))){alert("?")
    } else if (wallets.length==1) {
      if (confirm($$$('#txtDeleteWallet1').innerHTML+wallets[walletnr-1].name)) {
        deleteWallet(wallets[0].id)
      }
    } else if (wallets[walletnr-1].id==ids[2]){
      if (confirm($$$('#txtDeleteWallet2').innerHTML+wallets[walletnr-1].name)) {
        deleteWallet(ids[2])
      }
    } else {
      if (confirm($$$('#txtDeleteWallet3').innerHTML+wallets[walletnr-1].name)) {
        deleteWallet(wallets[walletnr-1].id)
      }
    }
    return;
  }
  if (diaLog.substr(0,14)=="menuCurrencies"){
    var menu=diaLog.substr(14)
    $$$("#id_modalbody").innerHTML=$$$(`#${"en_menuCurrencies"}`).innerHTML
    $$$("#ModalTitle").innerHTML=$$$(`#${"title"+menu}`).innerHTML;
    $$$("#headerSelectCurrencies").innerHTML=$$$(`#${"header"+menu}`).innerHTML;
  } else if(diaLog=="setupOwner"){
    $$$("#id_modalbody").innerHTML=$$$(`#${"en_"+diaLog}`).innerHTML.replace(/colorpickerWrapper/,colorpicker)
    title=$$$(`#${"en_"+diaLog}`).getAttribute('title');
    if (title!=undefined) {$$$("#ModalTitle").innerHTML=title}
    ini_colorpicker()
    resultBox.style.backgroundColor=localStorage.getItem("glossiColor")
    resultBox.value=localStorage.getItem("glossiColor")
  } else if (diaLog!="Warning") { //loading of modal defaultcontent 
    $$$("#id_modalbody").innerHTML=$$$(`#${"en_"+diaLog}`).innerHTML
    title=$$$(`#${"en_"+diaLog}`).getAttribute('title');
    if (title!=undefined) {$$$("#ModalTitle").innerHTML=title}
  }
  modalContext=diaLog
  if (diaLog==="setup"){
    var expertControl=$$$('#id_modalbody #idExpertMode')
    if (expertControl!=null){expertControl.checked=isExpertMode()}
    updateWalletSpendLockPresentation()
  }
  if ((diaLog=="paymentRequest")||(diaLog=="sendRequest")){
    if ($$$('#idMemo').value.trim().subs(0,8)=="balance ") {
      var key=$$$('#idMemo').value.trim().subs(8)
      var PKSH=scriptHash(key,$$$('#comboSupported').value)
      $$$('#idMemo').value+="\nPKSH:"+PKSH
      return
    }
    var eCard=$$$('#payBusinessCard')
    $$$('#payIcon').src=$$$('#idPaymentIcon').src
    $$$('#receiveAmount').innerHTML=$$$('#inputSupported').value+"&nbsp;"+$$$('#comboSupported').value+"<br>("
      +$$$('#inputFiat').value+"&nbsp;"+$$$('#comboFiat').value+")"
    paymentMail=$$$('#txtPaymentRequestMail').innerHTML+" "+$$$('#inputSupported').value+" "+$$$('#comboSupported').value+" ("+$$$('#inputFiat').value
    +" "+$$$('#comboFiat').value+")\n"
    $$$('#receiveWalletname').innerHTML=$$$('#txtMyWallet').innerHTML+":&nbsp;"
    if (localStorage.getItem("owner")!=""){$$$('#receiveWalletname').innerHTML+="<b>"+$$$('#owner').innerHTML+"</b>&nbsp;"}
    if ($$$('#idMemo').value.trim()!="") {
      $$$('#receiveComment').innerHTML=$$$('#idMemo').value
      paymentMail+="\n\n"+$$$('#idMemo').value+"\n\n"
    }
    var blur=true;
    if (localStorage.getItem("extraInfo")=="true") {blur=false} else {blur=true}
    setTimeout('setExtraInfo()',1)
    $$$('#extraInfo').checked=!blur
    if (localStorage.getItem("card")!=null) {
      for (var i = eCard.rows.length - 1; i >= 2; i--) {eCard.deleteRow(i);}
      var card=localStorage.getItem("card").trim().split("\n")
      for (var i=0;i<card.length;i++){
        var row = eCard.insertRow(2+i);row.classList.add("card")
        if (blur||cardSetting[i+2]=="-") {row.classList.add("blur")} else {paymentMail+=card[i]+"\n"}
        var cell = row.insertCell(0);
        cell.innerHTML = card[i];
        cell.setAttribute('data-tag','card')
      }
    }
    if (diaLog=="paymentRequest") {
      $$$('#idReceivePayment').innerHTML=$$$('#en_paymentInfo').innerHTML
      $$$('#idReceiveInfo').innerHTML=$$$('#en_extraInfo').innerHTML
      setReceiveRequest()
      paymentMail+="\n\n"+currentReceiveRequest.uri
    }else{
      $$$('#idSendPayment').innerHTML=$$$('#en_paymentInfo').innerHTML
      $$$('#idSendInfo').innerHTML=$$$('#en_extraInfo').innerHTML      
    }
  }  
  if (diaLog=="walletRecover") {}
  if (help==$$$("#buttonHelp").classList.contains("invisible")) {$$$("#buttonHelp").classList.toggle("invisible")}
  if (save==$$$("#save").classList.contains("invisible")) {$$$("#save").classList.toggle("invisible")}
  if (diaLog=="setupOwner"){ 
    $$$("#claimAlert").innerHTML="&nbsp;"
    $$$("#nameClaim").style.display="block"
    $$$("#nameClaim").textContent="SET"
    $$$("#claimLoading").style.display="none"
    $$$("#idOwner").disabled=false
    $$$("#idNameTips").innerHTML="The name is stored only in this wallet. It may be changed again and does not need to be unique."
    $$$("#idOwner").value=localStorage.getItem("owner")
    $$$("#idCard").value=localStorage.getItem("card")
  }
  if (diaLog=="contact"){
    var qrcode = new QRCode("idQrContact");
    qrcode.makeCode("https://communitycoins.org/prototype?language=is");
  }
  if (diaLog=="promote"){
    renderPromotion()
  }
  if (diaLog=="menuLanguage"){
    var languageButtons = ""
    var checked
    for (let i = 0; i < supportedLanguages.length; i++) {
      const option=supportedLanguages[i]
      if (option==language){checked=' checked'} else {checked=''}
      languageButtons+=`<div class="radio-option"><input type="radio" class="radio-button" name="languages" `
      languageButtons+=`value="${supportedLanguages[i]}" ${checked}>`
      languageButtons+=`<label class="radio-label">${option}</label></div>`;
    }
    $$$("#selectLanguage").innerHTML=languageButtons
  }
  if (diaLog.substr(0,14)=="menuCurrencies"){
    if ((menu!=="Supported")&&(localStorage.getItem("rates") == null)) {
      $$$("#id_warning1").innerHTML=T("warningNoPrice");dial("Warning",0,0);return
    }
    $$$("#ModalTitle").innerHTML=$$$(`#title${menu}`).innerHTML
    var currencyButtons=""
    var checked
    var currencyName
    if (menu=="Supported") {
      var currencies=combos[menu]["available"].split("|").filter(str => str !== '')
    } else if (menu=="Reference") {
      var currencies=(combos[menu]["available"]+combos["Supported"]["available"]).split("|").sort().filter(str => str !== '')
    } else {
      var currencies=combos[menu]["available"].split("|").sort().filter(str => str !== '')
    }
    var old=""
    for (let i = 0; i < currencies.length; i++) {
      if (currencies[i]!=old){
        if (combos[menu]['selected'].indexOf(`${currencies[i]}|`)>=0){checked=' checked'} else {checked=''}
        if (menu=="Supported") {
          currencyName=supportedCoins[currencies[i]].name
        } else {
          try {currencyName=""; currencyName=rates[currencies[i]].name} catch(e){
            try {currencyName="<b>"+supportedCoins[currencies[i]].name+"</b>"} catch(e){}
          }
        }
        currencyButtons+=`<div class="radio-option" title="${currencyName}">`
        currencyButtons+=`<input type="checkbox" class="radio-button" name=currencies `
        currencyButtons+=`value="${currencies[i]}" ${checked}${menu==="Supported"?" disabled":""}>`
        currencyButtons+=`<label class="radio-label">${currencyName} (${currencies[i]})</label></div>`;
      }
      old=currencies[i]
    }
    $$$("#id_selectCurrencies").innerHTML=currencyButtons
  }
  if (diaLog=="balance") {
    $$$('#ModalTitle').textContent=T("txtWalletBalance")
    renderBalanceOverview()
  }
  if (diaLog=="walletSeed"){
    if (!showWalletSeed()){
      console.error("Unable to display wallet seed: invalid mnemonic")
      alert($$$('#txtInvalidString').innerHTML)
      return
    }
  }
  bModal.show()
}
function submit() {  // Modal OK-button
  if (modalContext=="setupOwner"){
    var name=$$$("#idOwner").value.trim().replace(/\s+/g," ")
    if ((name.length>32)||(!/^[0-9A-Za-z@. ]*$/.test(name))){
      $$$('#claimAlert').textContent="Use at most 32 letters, numbers, spaces, @ or ."
      return false
    }
    localStorage.setItem("owner",name)
    localStorage.removeItem("claimed")
    localStorage.setItem("card",$$$("#idCard").value)
    var test=$$$("#idCard").value.split("\n")
    while (cardSetting.length<test.length+2) {cardSetting+="+";}
    localStorage.setItem("cardSetting",cardSetting)
    setOwner()
    localStorage.setItem("glossiColor",resultBox.value)
    glossify()
    updateDb().catch(function(error){console.error("Unable to save wallet settings:",error)})
  } else if (modalContext=="menuLanguage"){
    const languages = document.querySelectorAll('[name="languages"]');
    languages.forEach(language => {if (language.checked) {
      localStorage.setItem("language",language.value);
      location.reload();
    }});
  } else if (modalContext.substr(0,14)=="menuCurrencies"){
    var menu=modalContext.substr(14)
    const currencies = document.querySelectorAll('[name="currencies"]');
    var selected="|"
    currencies.forEach(currency => {if (currency.checked){selected+=currency.value+"|"}})
    combos[menu].selected=selected
    localStorage.setItem("combos",JSON.stringify(combos))
    refreshCombos()
  }
  if (modalContext=="setupp"){
    configurationReset($$$('#idp').value).catch(error=>{
      console.error("Unable to update wallet configuration:",error)
    })
  }
  bModal.hide();//if (readyState) {
}
function saveBackupAs(){
  var owner=localStorage.getItem("owner")
  if (owner==null) {owner="..."}
  owner=owner.replace(/\s+/g,"_");
  downloadTextFile("communitycoins_wallet_"+owner, $$$('#backupContent').value)
}
function generateBackup() {
  var result=false
  var owner=localStorage.getItem("owner")
  if (owner==null) {owner="..."}
  owner=owner.replace(/\s+/g,"_");
  const s=$$$('#backupText4').innerHTML.split(" ")
  const backupNote=`${s[0]} ${s[1]} ${owner} ${s[2]} ${stamp()}`
  localStorage.setItem("backupNote",backupNote)
  //const backupTxt=JSON.stringify(localStorage)
  //Array.from(window.pako.deflate(backupTxt)).map(byte => ('0' + byte.toString(16)).slice(-2)).join('');
  //const backupUint8=window.pako.deflate(backupTxt)
  //const backupBinary=String.fromCharCode.apply(null, backupUint8);
  //const backupBase64=btoa(backupBinary);
  $$$("#labelBackupContent").innerHTML=backupNote+"<br>"
  $$$("#backupContent").textContent=Array.from(window.pako.deflate(JSON.stringify(localStorage))).map(byte => ('0' + byte.toString(16)).slice(-2)).join('');
}
function parseWalletBackup(backupText){
  const text=backupText.trim()
  if ((text.length==0)||(text.length%2!=0)||(!/^[0-9a-f]+$/i.test(text))){
    throw new Error("Invalid backup encoding")
  }
  const compressedData=text.match(/.{2}/g).map(byte=>parseInt(byte,16))
  const decompressedData=window.pako.inflate(new Uint8Array(compressedData))
  const wallet=JSON.parse(new TextDecoder().decode(decompressedData))
  if ((wallet==null)||(Array.isArray(wallet))||(typeof wallet!="object")){
    throw new Error("Invalid backup wallet")
  }
  if ((typeof wallet.ids!="string")||(typeof wallet.bip39!="string")){
    throw new Error("Invalid backup wallet")
  }
  for (const key in wallet){
    if (typeof wallet[key]!="string"){throw new Error("Invalid backup value")}
  }
  const selectedIds=JSON.parse(wallet.ids)
  const mnemonicString=normalizeWalletMnemonic(wallet.bip39)
  const words=mnemonicString===""?[]:mnemonicString.split(" ")
  if ((!Array.isArray(selectedIds))||(selectedIds.length<5)||(selectedIds.length>6)||selectedIds.some(id=>(typeof id!="string")||(id==""))){
    throw new Error("Invalid backup wallet ids")
  }
  if ((!mnemonicWordCounts.includes(words.length))||(!mnemonic.check(mnemonicString))){
    throw new Error("Invalid backup mnemonic")
  }
  wallet.bip39=mnemonicString
  wallet[mnemonicPassphraseStorageKey]=normalizeMnemonicPassphrase(wallet[mnemonicPassphraseStorageKey]||"")
  return {wallet:wallet,ids:selectedIds}
}
function saveWalletBackup(wallet,selectedIds){
  const walletStore=JSON.stringify(wallet)
  return queueDatabase(async function(){
    const db=await openDatabase()
    try{
      await new Promise((resolve,reject)=>{
        const transaction=db.transaction("wallets","readwrite")
        const objectStore=transaction.objectStore("wallets")
        const request=objectStore.index("id").openCursor(IDBKeyRange.only(selectedIds[2]))
        transaction.oncomplete=()=>{resolve()}
        transaction.onerror=(event)=>{reject(event.target.error||transaction.error)}
        transaction.onabort=()=>{reject(transaction.error||new Error("Wallet restore aborted"))}
        request.onsuccess=(event)=>{
          const cursor=event.target.result
          const data={
            id:selectedIds[2],
            owner:typeof wallet.owner=="string"?wallet.owner:"",
            store:walletStore,
            note:stamp()
          }
          if (cursor){
            cursor.update(data)
          }else{
            objectStore.add(data)
          }
        }
      })
    }finally{
      db.close()
    }
  })
}
async function restoreWalletBackup(backupText){
  if (walletRestoring){return false}
  walletRestoring=true
  try{
    const backup=parseWalletBackup(backupText)
    const found=wallets.find(wallet=>wallet.id==backup.ids[2])
    if ((found==undefined)&&(wallets.length>=walletMaximum)){
      alert($$$('#txtWalletMaximum').innerHTML)
      walletRestoring=false
      return false
    }
    if ((found!=undefined)&&(!confirm($$$('#txtWalletReplace').innerHTML))){
      walletRestoring=false
      return false
    }
    await saveWalletBackup(backup.wallet,backup.ids)
    await clearWalletHistory(String(backup.ids[2]))
    resetWalletState("backup-restore")
    localStorage.clear()
    if (backup.wallet.log!=undefined) {LOG=backup.wallet.log;delete backup.wallet.log} else {LOG=""}
    for (const key in backup.wallet){localStorage.setItem(key,backup.wallet[key])}
    ids=backup.ids
    console_log("Wallet backup restored successfully")
    location.reload()
    return true
  }catch(error){
    walletRestoring=false
    throw error
  }
}
function isWalletBackupCandidate(backupText){
  var text=String(backupText==null?"":backupText).trim()
  return (text.length>=256)&&(text.length%2===0)&&(/^[0-9a-f]+$/i.test(text))
}
async function restorePastedWalletBackup(backupText){
  if (!isWalletBackupCandidate(backupText)){return false}
  parseWalletBackup(backupText)
  return restoreWalletBackup(backupText)
}
function separatePastedMnemonicPassphrase(recoveryField){
  if ((recoveryField==null)||(typeof recoveryField.value!=="string")){return false}
  var marker=recoveryField.value.indexOf("::")
  if (marker<0){return false}
  var passphrase=recoveryField.value.substring(marker+2)
  var scope=recoveryField.closest&&recoveryField.closest('#id_modalbody')
  if (scope==null){scope=document}
  var passphraseField=scope.querySelector('#walletMnemonicPassphrase')
  var repeatField=scope.querySelector('#walletMnemonicPassphraseRepeat')
  var showControl=scope.querySelector('#walletMnemonicPassphraseShow')
  if ((passphraseField==null)||(repeatField==null)){return false}
  recoveryField.value=recoveryField.value.substring(0,marker)
  passphraseField.value=passphrase
  repeatField.value=passphrase
  passphraseField.type="password"
  repeatField.type="password"
  if (showControl!=null){showControl.checked=false}
  return true
}
function handleWalletRecoveryPaste(event){
  var recoveryField=event==null?null:event.target
  if ((recoveryField==null)||(recoveryField.id!=="walletMnemonicInput")){return false}
  setTimeout(function(){
    separatePastedMnemonicPassphrase(recoveryField)
    restorePastedWalletBackup(recoveryField.value).catch(function(error){
      console.error("Unable to restore pasted wallet backup:",error)
      alert($$$('#txtInvalidString').innerHTML)
    })
  },0)
  return true
}
function normalizeWalletMnemonic(mnemonicText){
  return String(mnemonicText==null?"":mnemonicText).normalize("NFKD").trim().toLowerCase().split(/\s+/).join(" ")
}
function normalizeMnemonicPassphrase(passphrase){
  return String(passphrase==null?"":passphrase).normalize("NFKD")
}
function getStoredMnemonicPassphrase(){
  return normalizeMnemonicPassphrase(localStorage.getItem(mnemonicPassphraseStorageKey)||"")
}
function getMnemonicPassphraseFor(mnemonicString){
  var activeMnemonic=localStorage.getItem("bip39")
  if ((typeof activeMnemonic!=="string")||(normalizeWalletMnemonic(activeMnemonic)!==normalizeWalletMnemonic(mnemonicString))){return ""}
  return getStoredMnemonicPassphrase()
}
function parseMnemonicRecovery(mnemonicText,passphrase="",repeatedPassphrase=""){
  var value=String(mnemonicText==null?"":mnemonicText)
  var marker=value.indexOf("::")
  var inlinePassphrase
  if (marker>=0){
    inlinePassphrase=value.substring(marker+2)
    value=value.substring(0,marker)
  }
  var normalizedPassphrase=normalizeMnemonicPassphrase(passphrase)
  var normalizedRepeat=normalizeMnemonicPassphrase(repeatedPassphrase)
  if (inlinePassphrase!==undefined){
    inlinePassphrase=normalizeMnemonicPassphrase(inlinePassphrase)
    if (((normalizedPassphrase!=="")&&(normalizedPassphrase!==inlinePassphrase))||((normalizedRepeat!=="")&&(normalizedRepeat!==inlinePassphrase))){
      var inlineError=new Error("BIP39 passphrases do not match")
      inlineError.code="PASSPHRASE_MISMATCH"
      throw inlineError
    }
    normalizedPassphrase=inlinePassphrase
    normalizedRepeat=inlinePassphrase
  }
  if (normalizedPassphrase!==normalizedRepeat){
    var mismatchError=new Error("BIP39 passphrases do not match")
    mismatchError.code="PASSPHRASE_MISMATCH"
    throw mismatchError
  }
  var mnemonicString=normalizeWalletMnemonic(value)
  var wordCount=mnemonicString===""?0:mnemonicString.split(" ").length
  if ((!mnemonicWordCounts.includes(wordCount))||(!mnemonic.check(mnemonicString))){throw new Error("Invalid wallet mnemonic")}
  return {mnemonic:mnemonicString,passphrase:normalizedPassphrase,wordCount:wordCount}
}
function findWalletByMnemonic(mnemonicString,passphrase=""){
  var normalizedPassphrase=normalizeMnemonicPassphrase(passphrase)
  return openDatabase().then(db=>new Promise((resolve,reject)=>{
    const transaction=db.transaction("wallets","readonly")
    const request=transaction.objectStore("wallets").openCursor()
    var foundId
    transaction.oncomplete=()=>{
      db.close()
      resolve(foundId)
    }
    transaction.onerror=(event)=>{
      db.close()
      reject(event.target.error||transaction.error)
    }
    transaction.onabort=()=>{
      db.close()
      reject(transaction.error||new Error("Wallet mnemonic lookup aborted"))
    }
    request.onsuccess=(event)=>{
      const cursor=event.target.result
      if (cursor){
        try{
          const storedWallet=JSON.parse(cursor.value.store)
          if ((typeof storedWallet.bip39==="string")&&(normalizeWalletMnemonic(storedWallet.bip39)===mnemonicString)&&(normalizeMnemonicPassphrase(storedWallet[mnemonicPassphraseStorageKey]||"")===normalizedPassphrase)){
            foundId=cursor.value.id
          }
        }catch(error){}
        cursor.continue()
      }
    }
  }))
}
function balanceRecord(coin){
  if ((walletState.coin===coin)&&(walletState.snapshot!=null)&&isSafeNonNegativeInteger(walletState.snapshot.balanceSats)){
    return {known:true,balanceSats:walletState.snapshot.balanceSats,balance:formatSats(walletState.snapshot.balanceSats,coin)}
  }
  var cached=readConfirmedBalanceCache(coin)
  if (cached==null){return {known:false,balanceSats:null,balance:"—"}}
  return {known:true,balanceSats:cached.balanceSats,balance:formatSats(cached.balanceSats,coin)}
}
function referenceDecimals(currency){
  if ((supportedCoins[currency]!=undefined)&&(supportedCoins[currency].stateService!=undefined)){return supportedCoins[currency].stateService.decimals}
  if (supportedCoins[currency]!=undefined){return 8}
  return 2
}
function convertBalance(balance,coin,reference){
  if ((rates==null)||(rates[coin]==null)||(rates[reference]==null)){return null}
  var sourceRate=Number(rates[coin].value)
  var referenceRate=Number(rates[reference].value)
  var amount=Number(balance)
  if ((!Number.isFinite(sourceRate))||(sourceRate<=0)||(!Number.isFinite(referenceRate))||(referenceRate<=0)||(!Number.isFinite(amount))||(amount<0)){return null}
  var converted=amount/sourceRate*referenceRate
  return Number.isFinite(converted)?converted:null
}
function formatReferenceBalance(value,currency){
  if (!Number.isFinite(value)){return "—"}
  return trim0(value.toFixed(referenceDecimals(currency)))
}
function activateReferenceCurrency(currency){
  var combo=$$$("#comboReference")
  if ((combo==null)||(!Array.from(combo.options).some(function(option){return option.value===currency}))){return false}
  var previous=String(combos.Reference.active||combo.value).replace(/\|/g,"")
  combos.Reference.old=previous
  combo.value=currency
  combos.Reference.active=currency
  localStorage.setItem("combos",JSON.stringify(combos))
  try{reCalc($$$("#inputReference"),false)}catch(error){}
  combos.Reference.old=currency
  localStorage.setItem("combos",JSON.stringify(combos))
  return true
}
function appendBalanceCell(row,tag,className,text){
  var cell=document.createElement(tag)
  if (className!==""){cell.className=className}
  if (text!=null){cell.textContent=text}
  row.appendChild(cell)
  return cell
}
function renderBalanceOverview(){
  var container=$$$("#id_balance")
  var referenceCombo=$$$("#comboReference")
  if ((container==null)||(referenceCombo==null)){return false}
  container.textContent=""

  var table=document.createElement("table")
  table.className="table table-bordered table-hover balance-overview-table"
  var heading=document.createElement("thead")
  var headingRow=document.createElement("tr")
  appendBalanceCell(headingRow,"th","balance-coin-column",T("txtCoin"))
  appendBalanceCell(headingRow,"th","right-align",T("txtBalance"))
  var referenceHeading=appendBalanceCell(headingRow,"th","right-align",null)
  var selector=document.createElement("select")
  selector.id="idBalanceReference"
  selector.className="balance-reference-select"
  selector.setAttribute("aria-label",T("txtReference"))
  Array.from(referenceCombo.options).forEach(function(option){
    var copy=document.createElement("option")
    copy.value=option.value
    copy.dataset.fullLabel=option.dataset.fullLabel||calculatorOptionLabel(option.value)
    copy.dataset.compactLabel=option.dataset.compactLabel||calculatorOptionLabels(option.value).compact
    copy.textContent=copy.dataset.fullLabel
    selector.appendChild(copy)
  })
  selector.value=referenceCombo.value
  selector.disabled=selector.options.length===0
  selector.addEventListener("change",function(){
    if (activateReferenceCurrency(selector.value)){renderBalanceOverview()}
  })
  prepareCompactCurrencySelect(selector)
  referenceHeading.appendChild(selector)
  heading.appendChild(headingRow)
  table.appendChild(heading)

  var body=document.createElement("tbody")
  var reference=selector.value
  var total=0
  var complete=true
  var activeCoin=$$$("#comboSupported").value
  operationalWalletCoins().forEach(function(coin){
    var record=balanceRecord(coin)
    var converted=record.known?convertBalance(record.balance,coin,reference):null
    var row=document.createElement("tr")
    if (coin===activeCoin){row.className="table-active"}
    var coinCell=appendBalanceCell(row,"td","balance-coin-column",null)
    var coinButton=document.createElement("button")
    coinButton.type="button"
    coinButton.className="balance-coin-action"
    coinButton.addEventListener("click",function(){gotoBalance(coin)})
    var icon=document.createElement("img")
    icon.className="balance-coin-icon"
    icon.src="img/"+supportedCoins[coin].coin+".png"
    icon.alt=""
    icon.width=38
    icon.height=38
    var identity=document.createElement("span")
    identity.className="balance-coin-identity"
    var name=document.createElement("div")
    name.className="balance-coin-name"
    name.textContent=supportedCoins[coin].name
    var ticker=document.createElement("div")
    ticker.className="balance-coin-ticker"
    ticker.textContent=coin.toUpperCase()
    identity.appendChild(name)
    identity.appendChild(ticker)
    coinButton.appendChild(icon)
    coinButton.appendChild(identity)
    coinCell.appendChild(coinButton)
    appendBalanceCell(row,"td","right-align balance-native",record.balance)
    appendBalanceCell(row,"td","right-align balance-reference",formatReferenceBalance(converted,reference))
    if ((!record.known)||(converted==null)){complete=false}else{total+=converted}
    body.appendChild(row)
  })
  table.appendChild(body)

  var footer=document.createElement("tfoot")
  var totalRow=document.createElement("tr")
  var totalLabel=appendBalanceCell(totalRow,"th","right-align",T("txtTotal"))
  totalLabel.colSpan=2
  appendBalanceCell(totalRow,"th","right-align balance-total",complete?formatReferenceBalance(total,reference):"—")
  footer.appendChild(totalRow)
  table.appendChild(footer)
  container.appendChild(table)

  var note=document.createElement("p")
  note.className="balance-overview-note"
  note.textContent=T("txtBalanceOverviewNote")
  container.appendChild(note)
  return true
}
async function restoreWalletMnemonic(mnemonicText,passphrase="",repeatedPassphrase=""){
  if (walletRestoring){return false}
  walletRestoring=true
  try{
    const recovery=parseMnemonicRecovery(mnemonicText,passphrase,repeatedPassphrase)
    const mnemonicString=recovery.mnemonic
    await buildWalletView()
    const foundId=await findWalletByMnemonic(mnemonicString,recovery.passphrase)
    if (foundId!=undefined){
      if (foundId==ids[2]){
        walletRestoring=false
        alert("This wallet is already active")
        return false
      }
      await loadWallet(foundId)
      return true
    }
    if (wallets.length>=walletMaximum){
      alert($$$('#txtWalletMaximum').innerHTML)
      walletRestoring=false
      return false
    }
    if (!confirm($$$('#txtRestoreMnemonic').innerHTML)){
      walletRestoring=false
      return false
    }
    resetWalletState("mnemonic-restore")
    localStorage.clear()
    localStorage.setItem("language",language)
    localStorage.setItem("bip39",mnemonicString)
    if (recovery.passphrase!==""){localStorage.setItem(mnemonicPassphraseStorageKey,recovery.passphrase)}
    localStorage.setItem(receiveAddressKey(stateCoin),JSON.stringify(createReceiveAddressState(getStateService(stateCoin).maximumReceiveIndex,stateCoin)))
    sessionStorage.setItem("walletMnemonicRestore","1")
    location.reload()
    return true
  }catch(error){
    walletRestoring=false
    throw error
  }
}
function gotoBalance(coin){
  if (!operationalWalletCoins().includes(coin)){return false}
  //$$$("#inputBalance").value=supportedCoins[coin].balance
  $$$("#comboSupported").value=coin
  $$$("#comboBalance").value=coin  
  $$$("#inputSupported").value=supportedCoins[coin].balance;reCalc()
  $$$("#idPaymentIcon").src="img/"+supportedCoins[coin].coin+".png"
  combos["Supported"]['old']=combos["Supported"]['active']
  combos["Supported"]['active']=coin
  localStorage.setItem("combos",JSON.stringify(combos))
  switchStateCoin(coin,"balance",true)
  bModal.hide();
}
async function stopScanner(){
  var scanner=html5QrcodeScanner
  scannerActive=false
  if (scanner==null){return true}
  try{
    await Promise.race([
      scanner.stop().catch(function(error){return false}),
      new Promise(function(resolve){setTimeout(resolve,350)})
    ])
  }catch(error){}
  try{scanner.clear()}catch(error){}
  if (html5QrcodeScanner===scanner){html5QrcodeScanner=undefined}
  return true
}
function forceScannerModalClosed(){
  var modalElement=$$$("#Modal")
  modalElement.classList.remove("show")
  modalElement.style.display="none"
  modalElement.setAttribute("aria-hidden","true")
  modalElement.removeAttribute("aria-modal")
  document.querySelectorAll('.modal-backdrop').forEach(function(backdrop){backdrop.remove()})
  document.body.classList.remove("modal-open")
  document.body.style.removeProperty("overflow")
  document.body.style.removeProperty("padding-right")
}
async function closeScannerModal(){
  await stopScanner()
  return new Promise(function(resolve){
    var finished=false
    var modalElement=$$$("#Modal")
    function finish(){
      if (finished){return}
      finished=true
      modalElement.removeEventListener("hidden.bs.modal",finish)
      resolve(true)
    }
    modalElement.addEventListener("hidden.bs.modal",finish)
    bModal.hide()
    setTimeout(function(){
      if (!finished){forceScannerModalClosed();finish()}
    },400)
  })
}
const qrCodeSuccessCallback = async (decodedText, decodedResult) => {
  if (!scannerActive){return}
  QR=decodedText
  await closeScannerModal()
  payQR()
};
function payQR(){
  if (QR===""){return}
  var purpose=scanPurpose
  scanPurpose="memo"
  var receiptQr=false
  try{
    decodeTransactionReceipt(QR,stateCoin)
    receiptQr=true
  }catch(error){}
  if ((purpose==="receipt")||((purpose==="universal")&&receiptQr)){
    try{
      var receipt=parseTransactionReceipt(QR,stateCoin)
      cancelZeroConfirmationRequest()
      currentPaymentReceipt=receipt
      showReceiveObservation(currentPaymentReceipt)
      requestZeroConfirmation(currentPaymentReceipt,stateCoin)
    }catch(error){
      alert(error.message)
    }
    return
  }
  if ((purpose==="send")||(purpose==="universal")){
    try{
      if ((purpose==="universal")&&(showSendView()===false)){return}
      applyScannedSendRequest(QR)
    }catch(error){
      if ((purpose==="universal")&&(showSendView()===false)){return}
      setSendStatus(error.message,"error")
    }
    return
  }
  setMemo(QR)
}
function setMemo(txt){skipMemoChange=true;$$$("#idMemo").value=txt}
function scan(){
    html5QrcodeScanner = new Html5Qrcode("reader");
    scannerActive=true
    html5QrcodeScanner.start({facingMode: "environment"},{fps:10,qrbox:250},qrCodeSuccessCallback).catch(function(error){
      scannerActive=false
      console.error("Unable to start QR scanner",error)
    });
}
// DB
function deleteWallet(nr){
  const request = indexedDB.open(dbName);
  request.onsuccess = (event) => {
    const db=event.target.result;
    const transaction=db.transaction('wallets','readwrite')
    const objectStore=transaction.objectStore('wallets')
    const myIndex=objectStore.index("id");
    const getKeyRequest = myIndex.getKey(nr);
    getKeyRequest.onsuccess = () => {
      const request=objectStore.delete(getKeyRequest.result)
    };
    transaction.oncomplete = async function () {
      console_log('Record with key', nr, 'has been deleted.');
      db.close()
      try{await clearWalletHistory(String(nr))}catch(error){console.error("Unable to delete wallet history:",error)}
      if ((wallets.length==1)||(nr==ids[2])){
        resetWalletState("wallet-delete")
        localStorage.clear()
        location.reload()
      }else{
        buildWalletView_()
      }
    }
    transaction.onerror=function (event) {
      console.error('Error deleting record:', event.target.error);};
    transaction.onsuccess=function (event) {
      console_log('OK')}
  }
}
async function loadWallet(id){
  if (walletSwitching){return false}
  walletSwitching=true
  try{
    const db=await openDatabase()
    const data=await new Promise((resolve,reject)=>{
      const transaction=db.transaction("wallets","readonly")
      const request=transaction.objectStore("wallets").index("id").get(id)
      var record
      var transactionError
      request.onsuccess=()=>{record=request.result}
      request.onerror=(event)=>{transactionError=event.target.error}
      transaction.oncomplete=()=>{
        db.close()
        resolve(record)
      }
      transaction.onerror=(event)=>{
        transactionError=event.target.error||transaction.error
      }
      transaction.onabort=()=>{
        db.close()
        reject(transactionError||transaction.error||new Error("Wallet read aborted"))
      }
    })
    if (data==undefined){throw new Error("Wallet not found")}
    const wallet=JSON.parse(data.store)
    const selectedIds=JSON.parse(wallet.ids)
    if ((!Array.isArray(selectedIds))||(selectedIds[2]!=id)){throw new Error("Invalid wallet data")}
    resetWalletState("wallet-switch")
    localStorage.clear()
    if (wallet.log!=undefined) {LOG=wallet.log;delete wallet.log} else {LOG=""}
    for (const key in wallet){localStorage.setItem(key,wallet[key])}
    ids=selectedIds
    location.reload()
    return true
  }catch(error){
    walletSwitching=false
    throw error
  }
}
function deleteAllWallets(){
  const request = indexedDB.open(dbName);
  request.onsuccess = (event) => {
    const db=event.target.result;
    const transaction = db.transaction(["wallets"], "readwrite");
    const objectStore=transaction.objectStore("wallets")
    const request = objectStore.clear();
    request.onsuccess = (event) => {
      db.close()
      console_log("All wallets deleted")}
    request.onerror = (event) => {
      console_log("error:"+error)}
  }
}
function deleteWalletDatabase(){
  return queueDatabase(()=>new Promise((resolve,reject)=>{
    const request=indexedDB.deleteDatabase(dbName)
    request.onsuccess=()=>{resolve()}
    request.onerror=()=>{reject(request.error||new Error("Unable to remove ROOTY"))}
    request.onblocked=()=>{
      console.error("ROOTY removal is waiting for another wallet tab to close")
    }
  }))
}
async function configurationReset(pin) {
  if (pin=='kill') {
    walletResetting=true
    readyState=false
    clearTimeout(onlineTO)
    resetWalletState("wallet-kill")
    try{
      await deleteWalletDatabase()
      console_log("ROOTY removed")
      localStorage.clear()
      location.reload()
      return true
    }catch(error){
      walletResetting=false
      throw error
    }
  }
  const now = stamp();
  const hash = await calculateSHA256Hash(pin+now)
  const db=await openDatabase()
  return new Promise((resolve,reject)=>{
    const transaction = db.transaction("SETTINGS", 'readwrite');
    const objectStore = transaction.objectStore("SETTINGS");
    const getRequest = objectStore.index('id').get(1);
    transaction.oncomplete=()=>{
      db.close()
      location.reload()
      resolve()
    }
    transaction.onerror=(event)=>{
      db.close()
      reject(event.target.error||transaction.error)
    }
    transaction.onabort=()=>{
      db.close()
      reject(transaction.error||new Error("Configuration update aborted"))
    }
    getRequest.onsuccess = function(event) {
      const record = event.target.result;
      if (record) {
        record.birth=now
        record.hash=hash
        objectStore.put(record)
      }
    }
  })
}

async function configuration() {
  const now = stamp()
  const hash = await calculateSHA256Hash(now)
  const db=await openDatabase({id:1,hash:hash,birth:now})
  return new Promise((resolve, reject) => {
    const transaction=db.transaction("SETTINGS","readonly")
    const getRequest=transaction.objectStore("SETTINGS").index("id").get(1)
    getRequest.onsuccess=(event)=>{
      const data=event.target.result
      db.close()
      resolve(data)
    }
    getRequest.onerror=(event)=>{
      db.close()
      reject(event.target.error)
    }
  });
}
var databaseQueue=Promise.resolve()
function queueDatabase(operation){
  const queued=databaseQueue.then(operation,operation)
  databaseQueue=queued.catch(()=>{})
  return queued
}
function openDatabase(initialSettings){
  return new Promise((resolve,reject)=>{
    const request=indexedDB.open(dbName,dbVersion)
    request.onupgradeneeded=(event)=>{
      const db=event.target.result
      const walletsStore=db.createObjectStore("wallets",{autoIncrement:true})
      walletsStore.createIndex("id","id",{unique:true})
      const contactsStore=db.createObjectStore("CONTACTS",{keyPath:"ID",autoIncrement:true})
      contactsStore.createIndex("NAME","NAME",{unique:true})
      contactsStore.createIndex("HASH","HASH",{unique:true})
      const keysStore=db.createObjectStore("KEYS",{keyPath:"IDX",autoIncrement:true})
      keysStore.createIndex("CONTACT_ID","CONTACT_ID",{unique:false})
      const memoStore=db.createObjectStore("MEMO",{keyPath:"ID",autoIncrement:true})
      memoStore.createIndex("CONTACT_ID","CONTACT_ID",{unique:false})
      const settingsStore=db.createObjectStore("SETTINGS",{keyPath:"id",autoIncrement:true})
      settingsStore.createIndex("id","id",{unique:true})
      const historyStore=db.createObjectStore("HISTORY",{keyPath:"ID",autoIncrement:true})
      historyStore.createIndex("WALLET","WALLET",{unique:false})
      historyStore.createIndex("HASH","HASH",{unique:true})
      if (initialSettings==undefined){
        event.target.transaction.abort()
      }else{
        settingsStore.add(initialSettings)
      }
    }
    request.onsuccess=()=>{
      const db=request.result
      if ((db.version!=dbVersion)||databaseStructureMissing(db)){
        db.close()
        reject(new Error("Invalid ROOTY version 1 database structure"))
        return
      }
      db.onversionchange=()=>{db.close()}
      resolve(db)
    }
    request.onerror=()=>{reject(request.error)}
    request.onblocked=()=>{reject(new Error("ROOTY database blocked"))}
  })
}
function databaseStructureMissing(db){
  const stores=["wallets","CONTACTS","KEYS","MEMO","SETTINGS","HISTORY"]
  for (const store of stores){
    if (!db.objectStoreNames.contains(store)){return true}
  }
  const indexes={
    wallets:["id"],
    CONTACTS:["NAME","HASH"],
    KEYS:["CONTACT_ID"],
    MEMO:["CONTACT_ID"],
    HISTORY:["WALLET","HASH"],
    SETTINGS:["id"]
  }
  for (const store in indexes){
    const objectStore=db.transaction(store,"readonly").objectStore(store)
    for (const index of indexes[store]){
      if (!objectStore.indexNames.contains(index)){return true}
    }
  }
  return false
}
function historyWalletId(){return ids.length>2?String(ids[2]):""}
function historyHash(walletId,coin,direction,txid,vout,address,valueSats){
  return [walletId,coin,direction,txid,String(vout),address,String(valueSats)].join("|")
}
function historyBootstrapHash(walletId,coin){return [walletId,coin,"BOOTSTRAP"].join("|")}
function historyStatusRank(status){
  var rank=({SCANNED:0,OFFERED:0,SEEN:1,CONFIRMED:2})[status]
  return rank==null?0:rank
}
function makeHistoryRecord(walletId,coin,direction,txid,vout,valueSats,address,seenAt,status="CONFIRMED",blockHeight=null,blockTime=null){
  var service=getStateService(coin)
  var receipt=direction==="OUT"?encodeTransactionReceipt({type:"transactionReceipt",coin:service.responseCoin,txid:txid,address:address,amountSats:valueSats},coin):null
  return {
    WALLET:walletId,
    HASH:historyHash(walletId,coin,direction,txid,vout,address,valueSats),
    TYPE:"EVENT",
    COIN:coin,
    DIRECTION:direction,
    TXID:txid,
    VOUT:vout,
    AMOUNT_SATS:valueSats,
    ADDRESS:address,
    SEEN_AT:seenAt,
    STATUS:status,
    BLOCK_HEIGHT:blockHeight,
    BLOCK_TIME:blockTime,
    RECEIPT:receipt
  }
}
function historyRecordValid(record,walletId,coin=null){
  if ((record==null)||(typeof record!=="object")||(record.WALLET!==walletId)){return false}
  if ((coin!=null)&&(record.COIN!==coin)){return false}
  if (record.TYPE==="BOOTSTRAP"){return (typeof record.HASH==="string")&&(typeof record.COIN==="string")}
  return (record.TYPE==="EVENT")&&(record.STATUS==="CONFIRMED")&&['IN','OUT'].includes(record.DIRECTION)&&(typeof record.COIN==="string")&&(typeof record.TXID==="string")&&(/^[0-9a-f]{64}$/.test(record.TXID))&&Number.isSafeInteger(record.VOUT)&&(record.VOUT>=0)&&Number.isSafeInteger(record.AMOUNT_SATS)&&(record.AMOUNT_SATS>0)&&(typeof record.ADDRESS==="string")&&Number.isSafeInteger(record.SEEN_AT)&&(record.SEEN_AT>=0)
}
function readHistoryRecords(walletId=historyWalletId(),coin=null,includeBootstrap=false){
  if (walletId===""){return Promise.resolve([])}
  return queueDatabase(async function(){
    const db=await openDatabase()
    try{
      return await new Promise((resolve,reject)=>{
        const records=[]
        const transaction=db.transaction("HISTORY","readonly")
        const request=transaction.objectStore("HISTORY").index("WALLET").openCursor(IDBKeyRange.only(walletId))
        transaction.oncomplete=()=>{resolve(records)}
        transaction.onerror=(event)=>{reject(event.target.error||transaction.error)}
        transaction.onabort=()=>{reject(transaction.error||new Error("History read aborted"))}
        request.onsuccess=(event)=>{
          const cursor=event.target.result
          if (cursor){
            if (historyRecordValid(cursor.value,walletId,coin)&&(includeBootstrap||cursor.value.TYPE==="EVENT")){records.push(cursor.value)}
            cursor.continue()
          }
        }
      })
    }finally{db.close()}
  })
}
function mergeHistoryRecord(existing,record){
  if (existing==null){return record}
  var merged=Object.assign({},existing,record,{ID:existing.ID})
  if (Number.isSafeInteger(existing.SEEN_AT)&&existing.SEEN_AT<record.SEEN_AT){merged.SEEN_AT=existing.SEEN_AT}
  if (historyStatusRank(existing.STATUS)>historyStatusRank(record.STATUS)){merged.STATUS=existing.STATUS}
  if ((record.BLOCK_HEIGHT==null)&&(existing.BLOCK_HEIGHT!=null)){merged.BLOCK_HEIGHT=existing.BLOCK_HEIGHT}
  if ((record.BLOCK_TIME==null)&&(existing.BLOCK_TIME!=null)){merged.BLOCK_TIME=existing.BLOCK_TIME}
  if ((record.RECEIPT==null)&&(existing.RECEIPT!=null)){merged.RECEIPT=existing.RECEIPT}
  return merged
}
function upsertHistoryRecords(records,peek=false){
  if (!Array.isArray(records)||records.length===0){return Promise.resolve(0)}
  if (records.some(function(record){return record.TYPE==="EVENT"&&record.STATUS!=="CONFIRMED"})){return Promise.reject(new Error("Only confirmed history can be persisted"))}
  return queueDatabase(async function(){
    const db=await openDatabase()
    try{
      return await new Promise((resolve,reject)=>{
        var inserted=0
        const transaction=db.transaction("HISTORY","readwrite")
        const store=transaction.objectStore("HISTORY")
        const index=store.index("HASH")
        transaction.oncomplete=()=>{resolve(inserted)}
        transaction.onerror=(event)=>{reject(event.target.error||transaction.error)}
        transaction.onabort=()=>{reject(transaction.error||new Error("History update aborted"))}
        records.forEach(function(record){
          const request=index.get(record.HASH)
          request.onsuccess=()=>{
            if (request.result==null){inserted++}
            store.put(mergeHistoryRecord(request.result,record))
          }
        })
      })
    }finally{db.close()}
  }).then(function(inserted){
    if (historyWalletId()===records[0].WALLET){renderHistory()}
    if (peek&&inserted>0){peekHistoryDrawer()}
    return inserted
  })
}
function clearWalletHistory(walletId){
  if ((typeof walletId!=="string")||(walletId==="")){return Promise.resolve(0)}
  return queueDatabase(async function(){
    const db=await openDatabase()
    try{
      return await new Promise((resolve,reject)=>{
        var removed=0
        const transaction=db.transaction("HISTORY","readwrite")
        const request=transaction.objectStore("HISTORY").index("WALLET").openCursor(IDBKeyRange.only(walletId))
        transaction.oncomplete=()=>{resolve(removed)}
        transaction.onerror=(event)=>{reject(event.target.error||transaction.error)}
        transaction.onabort=()=>{reject(transaction.error||new Error("History reset aborted"))}
        request.onsuccess=(event)=>{
          const cursor=event.target.result
          if (cursor){removed++;cursor.delete();cursor.continue()}
        }
      })
    }finally{db.close()}
  })
}
function removeUnconfirmedHistoryRecords(walletId,coin){
  if ((typeof walletId!=="string")||(walletId==="")){return Promise.resolve(0)}
  return queueDatabase(async function(){
    const db=await openDatabase()
    try{
      return await new Promise((resolve,reject)=>{
        var removed=0
        const transaction=db.transaction("HISTORY","readwrite")
        const request=transaction.objectStore("HISTORY").index("WALLET").openCursor(IDBKeyRange.only(walletId))
        transaction.oncomplete=()=>{resolve(removed)}
        transaction.onerror=(event)=>{reject(event.target.error||transaction.error)}
        transaction.onabort=()=>{reject(transaction.error||new Error("History cleanup aborted"))}
        request.onsuccess=(event)=>{
          const cursor=event.target.result
          if (cursor){
            var record=cursor.value
            if ((record.TYPE==="EVENT")&&(record.COIN===coin)&&(record.STATUS!=="CONFIRMED")){removed++;cursor.delete()}
            cursor.continue()
          }
        }
      })
    }finally{db.close()}
  })
}
function ensureConfirmedHistoryOnly(walletId,coin){
  var key=walletId+"|"+coin
  if (historyCleanupRequests[key]!=null){return historyCleanupRequests[key]}
  historyCleanupRequests[key]=removeUnconfirmedHistoryRecords(walletId,coin).then(function(removed){
    if (removed>0){return renderHistory().then(function(){return removed})}
    return removed
  }).catch(function(error){
    delete historyCleanupRequests[key]
    throw error
  })
  return historyCleanupRequests[key]
}
function parseHistoryResponse(data,addresses,coin=stateCoin){
  var service=getStateService(coin)
  if ((data==null)||(typeof data!=="object")||(data.ok!==true)||(data.coin!==service.responseCoin)||(!Number.isSafeInteger(data.height))||(data.height<0)||(typeof data.blockHash!=="string")||(!/^[0-9a-f]{64}$/.test(data.blockHash))||(!Array.isArray(data.events))||(data.events.length>2000)){throw new Error("Invalid history response")}
  var addressSet=new Set(addresses)
  var seen=new Set()
  var lastHeight=0
  var events=data.events.map(function(event){
    if ((event==null)||(typeof event!=="object")||(!['IN','OUT'].includes(event.direction))||(typeof event.txid!=="string")||(!/^[0-9a-f]{64}$/.test(event.txid))||(!Number.isSafeInteger(event.vout))||(event.vout<0)||(!Number.isSafeInteger(event.value))||(event.value<=0)||(typeof event.address!=="string")||(!Number.isSafeInteger(event.height))||(event.height<1)||(event.height>data.height)||(event.height<lastHeight)||(!Number.isSafeInteger(event.timestamp))||(event.timestamp<1)){throw new Error("Invalid history event")}
    validateCoinAddress(event.address,coin)
    var walletAddress=addressSet.has(event.address)
    if (((event.direction==="IN")&&(!walletAddress))||((event.direction==="OUT")&&walletAddress)){throw new Error("Invalid history direction")}
    var key=[event.txid,event.vout].join(":")
    if (seen.has(key)){throw new Error("Duplicate history event")}
    seen.add(key)
    lastHeight=event.height
    return Object.freeze({direction:event.direction,txid:event.txid,vout:event.vout,valueSats:event.value,address:event.address,blockHeight:event.height,blockTime:event.timestamp*1000})
  })
  return Object.freeze({height:data.height,blockHash:data.blockHash,events:Object.freeze(events),timing:Object.freeze({clientMs:data.clientMs,relayMs:data.relayMs,rotRoundTripMs:data.rotRoundTripMs,attempts:data.attempts})})
}
async function fetchHistory(addresses,coin=stateCoin){
  var service=getStateService(coin)
  var controller=new AbortController()
  var timeout=setTimeout(function(){controller.abort()},service.historyTimeout)
  var started=performance.now()
  try{
    var response=await fetch(service.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({operation:"history",addresses:addresses}),cache:"no-store",signal:controller.signal})
    var data=await response.json()
    data.clientMs=Math.round(performance.now()-started)
    data.httpStatus=response.status
    if (!response.ok){throw new Error(data.error||"History unavailable")}
    return parseHistoryResponse(data,addresses,coin)
  }finally{clearTimeout(timeout)}
}
function ensureHistoryBootstrap(addresses,coin=stateCoin){
  var walletId=historyWalletId()
  if ((walletId==="")||(!Array.isArray(addresses))||(addresses.length<1)){return Promise.resolve(false)}
  var requestKey=walletId+"|"+coin
  if (historyBootstrapRequests[requestKey]!=null){return historyBootstrapRequests[requestKey]}
  var request=(async function(){
    var records=await readHistoryRecords(walletId,coin,true)
    if (records.some(function(record){return record.TYPE==="BOOTSTRAP"&&record.HASH===historyBootstrapHash(walletId,coin)})){return true}
    var history=await fetchHistory(addresses,coin)
    if (historyWalletId()!==walletId){return false}
    var imported=history.events.map(function(event){return makeHistoryRecord(walletId,coin,event.direction,event.txid,event.vout,event.valueSats,event.address,event.blockTime,"CONFIRMED",event.blockHeight,event.blockTime)})
    imported.push({WALLET:walletId,HASH:historyBootstrapHash(walletId,coin),TYPE:"BOOTSTRAP",COIN:coin,HEIGHT:history.height,BLOCK_HASH:history.blockHash,CREATED_AT:Date.now()})
    await upsertHistoryRecords(imported,false)
    return true
  })().catch(function(error){console.error("Unable to bootstrap history:",error);return false}).finally(function(){delete historyBootstrapRequests[requestKey]})
  historyBootstrapRequests[requestKey]=request
  return request
}
function recordSentHistory(record,status="OFFERED"){
  if ((record==null)||(!isTransactionReceipt(record.receipt,record.coin,record.txid))){return Promise.resolve(false)}
  if (status!=="CONFIRMED"){return Promise.resolve(false)}
  var walletId=typeof record.walletId==="string"?record.walletId:historyWalletId()
  if (walletId===""){return Promise.resolve(false)}
  if (record.historyStatus==="CONFIRMED"){return Promise.resolve(false)}
  var recipientVout=Number.isSafeInteger(record.receiptVout)?record.receiptVout:0
  var blockHeight=record.blockHeight==null?null:record.blockHeight
  var historyRecord=makeHistoryRecord(walletId,record.coin,"OUT",record.txid,recipientVout,record.receipt.amountSats,record.receipt.address,record.acceptedAt,"CONFIRMED",blockHeight,null)
  return upsertHistoryRecords([historyRecord],true).then(function(inserted){
    record.historyStatus="CONFIRMED"
    if (pendingBroadcast===record){persistPendingBroadcast(record)}
    return inserted
  })
}
function recordSnapshotHistory(snapshot,coin=stateCoin){
  var walletId=historyWalletId()
  if ((walletId==="")||(snapshot==null)||(!Array.isArray(snapshot.utxos))){return Promise.resolve(false)}
  return readHistoryRecords(walletId,coin,false).then(function(existing){
    var outgoing=new Set(existing.filter(function(record){return record.DIRECTION==="OUT"}).map(function(record){return record.TXID}))
    if ((pendingBroadcast!=null)&&(pendingBroadcast.coin===coin)){outgoing.add(pendingBroadcast.txid)}
    var records=snapshot.utxos.filter(function(utxo){return !outgoing.has(utxo.txid)}).map(function(utxo){return makeHistoryRecord(walletId,coin,"IN",utxo.txid,utxo.vout,utxo.valueSats,utxo.address,Date.now(),"CONFIRMED",utxo.height,null)})
    return upsertHistoryRecords(records,true)
  })
}
function synchronizeHistory(snapshot,addresses,coin=stateCoin){
  var walletId=historyWalletId()
  ensureConfirmedHistoryOnly(walletId,coin).then(function(){return ensureHistoryBootstrap(addresses,coin)}).then(function(ready){
    if (ready){return recordSnapshotHistory(snapshot,coin)}
  }).catch(function(error){console.error("Unable to synchronize history:",error)})
}
function historyVisibleKey(record){return [record.DIRECTION,record.TXID,record.ADDRESS,String(record.AMOUNT_SATS)].join("|")}
function transientHistoryRecords(walletId,coin,persisted){
  var records=[]
  var keys=new Set(persisted.map(historyVisibleKey))
  function append(record){
    var key=historyVisibleKey(record)
    if (!keys.has(key)){record.TRANSIENT=true;records.push(record);keys.add(key)}
  }
  if ((pendingBroadcast!=null)&&((pendingBroadcast.walletId==null)||(pendingBroadcast.walletId===walletId))&&(pendingBroadcast.coin===coin)&&isTransactionReceipt(pendingBroadcast.receipt,coin,pendingBroadcast.txid)){
    append(makeHistoryRecord(walletId,coin,"OUT",pendingBroadcast.txid,Number.isSafeInteger(pendingBroadcast.receiptVout)?pendingBroadcast.receiptVout:0,pendingBroadcast.receipt.amountSats,pendingBroadcast.receipt.address,pendingBroadcast.acceptedAt,pendingBroadcast.status,null,null))
  }
  if ((coin===stateCoin)&&(currentPaymentReceipt!=null)&&((currentPaymentReceiptHistoryStatus==="SEEN")||(currentPaymentReceiptHistoryStatus==="CONFIRMED"))&&isTransactionReceipt(currentPaymentReceipt,coin)){
    var output=(walletState.coin===coin)&&(walletState.snapshot!=null)?walletState.snapshot.utxos.find(function(utxo){return (utxo.txid===currentPaymentReceipt.txid)&&(utxo.address===currentPaymentReceipt.address)&&(utxo.valueSats===currentPaymentReceipt.amountSats)}):null
    append(makeHistoryRecord(walletId,coin,"IN",currentPaymentReceipt.txid,output==null?0:output.vout,currentPaymentReceipt.amountSats,currentPaymentReceipt.address,Number.isSafeInteger(currentPaymentReceiptSeenAt)?currentPaymentReceiptSeenAt:Date.now(),currentPaymentReceiptHistoryStatus,output==null?null:output.height,null))
  }
  return records
}
function historyDisplayTime(record){
  var value=Number.isSafeInteger(record.BLOCK_TIME)&&record.BLOCK_TIME>0?record.BLOCK_TIME:record.SEEN_AT
  var date=new Date(value)
  return date.toLocaleDateString([],{day:"2-digit",month:"2-digit",year:"numeric"})+" "+date.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})
}
function showHistoryReceipt(record){
  if ((record==null)||(record.DIRECTION!=="OUT")){return false}
  var receipt={type:"transactionReceipt",coin:getStateService(record.COIN).responseCoin,txid:record.TXID,address:record.ADDRESS,amountSats:record.AMOUNT_SATS}
  renderPaymentReceipt(receipt,true)
  return showPaymentReceiptQrOverlay()
}
function renderHistory(){
  var walletId=historyWalletId()
  var list=$$$('#idHistoryList')
  var selected=$$$('#comboSupported')
  if ((list==null)||(selected==null)||(walletId==="")){return Promise.resolve(false)}
  var coin=selected.value
  return readHistoryRecords(walletId,coin,false).then(function(records){
    if ((historyWalletId()!==walletId)||($$$('#comboSupported').value!==coin)){return false}
    records=records.concat(transientHistoryRecords(walletId,coin,records))
    records.sort(function(left,right){
      var leftTime=(left.BLOCK_TIME||left.SEEN_AT||0)
      var rightTime=(right.BLOCK_TIME||right.SEEN_AT||0)
      return rightTime-leftTime
    })
    list.replaceChildren()
    records.forEach(function(record){
      var row=document.createElement(record.DIRECTION==="OUT"?"button":"div")
      row.className="history-row"
      if (record.DIRECTION==="OUT"){
        row.type="button"
        row.setAttribute("aria-label","Show payment receipt")
        row.addEventListener("click",function(){showHistoryReceipt(record)})
      }
      var time=document.createElement("span")
      time.className="history-time"
      time.textContent=historyDisplayTime(record)
      var amount=document.createElement("span")
      amount.className="history-amount "+record.DIRECTION.toLowerCase()
      amount.textContent=(record.DIRECTION==="IN"?"+":"−")+formatSats(record.AMOUNT_SATS,coin)
      var address=document.createElement("span")
      address.className="history-address"
      address.textContent=record.DIRECTION==="OUT"?record.ADDRESS:""
      row.append(time,amount,address)
      list.append(row)
    })
    return records
  })
}
function setHistoryDrawerHeight(height){
  var viewport=$$$('#idHistoryViewport')
  var handle=$$$('#idHistoryHandle')
  if ((viewport==null)||(handle==null)){return 0}
  var maximum=Math.max(historyPeekHeight,Math.min(historyMaximumHeight,Math.floor(window.innerHeight*0.65)))
  historyDrawerHeight=Math.max(0,Math.min(maximum,Math.round(height)))
  if (historyDrawerHeight>0){historyLastOpenHeight=historyDrawerHeight}
  viewport.style.height=historyDrawerHeight+"px"
  handle.setAttribute("aria-expanded",historyDrawerHeight>0?"true":"false")
  return historyDrawerHeight
}
function peekHistoryDrawer(){if (historyDrawerHeight<historyPeekHeight){setHistoryDrawerHeight(historyPeekHeight)}}
function toggleHistoryDrawer(){setHistoryDrawerHeight(historyDrawerHeight>0?0:historyLastOpenHeight)}
function startHistoryDrag(event){
  historyDrag={pointerId:event.pointerId,startY:event.clientY,startHeight:historyDrawerHeight,moved:false}
  event.currentTarget.setPointerCapture(event.pointerId)
}
function moveHistoryDrag(event){
  if ((historyDrag==null)||(historyDrag.pointerId!==event.pointerId)){return}
  var difference=event.clientY-historyDrag.startY
  if (Math.abs(difference)>3){historyDrag.moved=true}
  setHistoryDrawerHeight(historyDrag.startHeight+difference)
}
function endHistoryDrag(event){
  if ((historyDrag==null)||(historyDrag.pointerId!==event.pointerId)){return}
  var moved=historyDrag.moved
  historyDrag=undefined
  if (!moved){toggleHistoryDrawer()}
}
function saveActiveWallet(db){
  return new Promise((resolve,reject)=>{
    const transaction=db.transaction("wallets","readwrite")
    const objectStore=transaction.objectStore("wallets")
    const request=objectStore.index("id").openCursor(IDBKeyRange.only(ids[2]))
    var action="saved"
    transaction.oncomplete=()=>{
      console_log(`${stamp()} Wallet data ${action} successfully`)
      resolve()
    }
    transaction.onerror=(event)=>{reject(event.target.error||transaction.error)}
    transaction.onabort=()=>{reject(transaction.error||new Error("Wallet update aborted"))}
    request.onsuccess=(event)=>{
      const cursor=event.target.result
      if (cursor){
        action="updated"
        const data=cursor.value
        data.owner=localStorage.getItem("owner")
        data.store=JSON.stringify(localStorage)
        data.note=stamp()
        cursor.update(data)
      }else{
        objectStore.add({
          id:ids[2],
          owner:localStorage.getItem("owner"),
          store:JSON.stringify(localStorage),
          note:stamp()
        })
      }
    }
  })
}
function updateDb(){
  if (walletResetting){return Promise.reject(new Error("Wallet reset in progress"))}
  return queueDatabase(async function(){
    console_log(stamp()+" update")
    const db=await openDatabase()
    try{
      await saveActiveWallet(db)
    }finally{
      db.close()
    }
  })
}
async function activateWallet(e,id){
  const found=wallets.find(obj=>obj.id==id)
  if (found){
    if (found.id==ids[2]) {
      alert("This wallet is already active")
    } else {
      if (confirm("Activate wallet "+found.name+" ?")) {
        try{
          await loadWallet(id)
        }catch(error){
          console.error("Unable to activate wallet:",error)
        }
      }
    }
  }
}
function integr() {all=""
  const E=document.querySelectorAll('script');
  const srcs=[];
  E.forEach(El => {const src=El.textContent||El.outerHTML;if(src){srcs.push(src);}});
  all=srcs.join('\n');
  return calculateSHA256Hash(all)
}
//===
async function generateKeyPair() {
  keyPair = await crypto.subtle.generateKey(
    { name: 'RSA-OAEP',
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: 'SHA-256' }
    },
    true,
    ['encrypt','decrypt']
  );
  return keyPair;
}
async function showPublicKey(keyPair){
  const publicKey = await crypto.subtle.exportKey('spki', keyPair.publicKey);
  const publicKeyString = arrayBufferToHexString(publicKey);
  const publicKeyBase64 = btoa(publicKeyString);
  
  const decodedPublicKeyString = atob(publicKeyBase64);
  const decodedPublicKey = hexStringToArrayBuffer(decodedPublicKeyString);
  const importedPublicKey = await crypto.subtle.importKey(
    'spki',decodedPublicKey,{name:'RSA-OAEP',hash:{name:'SHA-256'},},true,['encrypt'])
  return(publicKeyBase64)
}

async function encrypt(publicKey, message) {
  const publicKeyImported = await crypto.subtle.importKey('jwk',publicKey,{name:'RSA-OAEP',hash:{name:'SHA-256'}},true,['encrypt']);
  const encodedMessage = new TextEncoder().encode(message);
  return await crypto.subtle.encrypt({name: 'RSA-OAEP',},publicKeyImported,encodedMessage);
}
async function decrypt(decryptKey, encryptedData) {
  const decryptKeyImported = await crypto.subtle.importKey('jwk',decryptKey,{name:'RSA-OAEP',hash:{name:'SHA-256'}},true,['decrypt']);
  const decryptedData = await crypto.subtle.decrypt({name: 'RSA-OAEP',},decryptKeyImported,encryptedData);
  return new TextDecoder().decode(decryptedData);
}
function testEncryptDecrypt() {
  encrypt(JSON.parse(localStorage.getItem("rsa")),"This is a memo")
  .then(encryptedMsg => {
    decrypt(JSON.parse(localStorage.getItem("rsa2")),encryptedMsg) //.privateKey
    .then(decryptedMsg=>{
      console_log(decryptedMsg)
    })
  })
} 
async function ballast(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text+ids[5]);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

function arrayBufferToHexString(arrayBuffer) {
  const view = new DataView(arrayBuffer);
  let hexString = '';
  for (let i = 0; i < view.byteLength; i++) {
    const byte = view.getUint8(i);
    hexString += byte.toString(16).padStart(2, '0');
  }
  return hexString;
}
function hexStringToArrayBuffer(hexString) {
  const length = hexString.length / 2;
  const arrayBuffer = new ArrayBuffer(length);
  const view = new DataView(arrayBuffer);
  for (let i = 0; i < length; i++) {
    const byte = parseInt(hexString.substr(i * 2, 2), 16);
    view.setUint8(i, byte);
  }
  return arrayBuffer;
}
function connectInvite() {
  var short={}
  var jsonString
  short['id1']=ids[1]
  short['pub']=localStorage.getItem("rsa")
  jsonString = JSON.stringify(short);
  const compressedData = pako.deflate(jsonString,{to:'binary'});
  const blob = new Blob([compressedData],{type:'application/octet-stream'});
  fetch(baseName+'short_write.php',{
    method: 'POST',
    body: blob,
    headers: {'Content-Type': 'application/octet-stream'}
  })
  .then(response => response.text())
  .then(data => {
    var x=data
    console_log(x)
  })
  .catch(error => {
    var x=error
  });  
}
function test_short(){
  var short={}
  var jsonString
  short['id1']=ids[1]
  short['pub']=localStorage.getItem("rsa")
  short['q']="Just a message"
  jsonString = JSON.stringify(short);
  const compressedData = pako.deflate(jsonString,{to:'binary'});
  const blob = new Blob([compressedData],{type:'application/octet-stream'});
  fetch(baseName+'short_write.php',{
    method: 'POST',
    body: blob,
    headers: {'Content-Type': 'application/octet-stream'}
  })
  .then(response => response.text())
  .then(data => {
    var x=data
    console_log(x)
  })
  .catch(error => {
    var x=error
  });
}

function test_readshort(shortcode){
  var short={}
  var jsonString
  short['id1']=ids[1]
  short['q']=shortcode
  jsonString = JSON.stringify(short);
  const compressedData = pako.deflate(jsonString,{to:'binary'});
  const blob = new Blob([compressedData],{type:'application/octet-stream'});
  fetch(baseName+'short_read.php',{
    method: 'POST',
    body: blob,
    headers: {'Content-Type': 'application/octet-stream'}
  })
  .then(response => response.text())
  .then(data => {
    var x=data
    console_log(x)
  })
  .catch(error => {
    var x=error
  });
}
function logDatabaseStructure() {
  const request = indexedDB.open(dbName,dbVersion);
  request.onsuccess = function (event) {
    const db = event.target.result;
    console_log(`Database: ${db.name}`)
    console_log(`Version: ${db.version}`)
    // Log object stores
    const objectStoreNames = db.objectStoreNames;
    console_log(`Object Stores in ${dbName}:`);
    for (let i = 0; i < objectStoreNames.length; i++) {
      const objectStoreName = objectStoreNames[i];
      console_log(`- Object Store: ${objectStoreName}`);

      // Log indexes for each object store
      const objectStore = db.transaction([objectStoreName], 'readonly').objectStore(objectStoreName);
      const indexNames = objectStore.indexNames;
      for (let j = 0; j < indexNames.length; j++) {
        const indexName = indexNames[j];
        console_log(`  - Index: ${indexName}`);
      }
    }
    db.close()
  }
  request.onerror = function (event) {
    console.error('Error opening database:', event.target.error);
  }
}
//Bip39
var mnemonics = { "english": new Mnemonic("english") };
var mnemonic = mnemonics["english"];
function deriveCoinAccount(mnemonicString,coin=stateCoin,passphrase=null){
  var network=bitcoin.networks[networks[coin].index]
  if (passphrase===null){passphrase=getMnemonicPassphraseFor(mnemonicString)}
  var seed=mnemonic.toSeed(mnemonicString,normalizeMnemonicPassphrase(passphrase))
  var bip32RootKey=bitcoin.HDNode.fromSeedHex(seed,network)
  return calcBip32ExtendedKey(getDerivationPath(network),bip32RootKey)
}
function deriveCoinKeyPairFromAccount(account,index){
  if ((!Number.isSafeInteger(index))||(index<0)){throw new Error(T("txtInvalidDerivationIndex"))}
  return account.derive(index).keyPair
}
function deriveCoinAddressFromAccount(account,index){
  return deriveCoinKeyPairFromAccount(account,index).getAddress().toString()
}
function deriveCoinKeyPair(mnemonicString,index,coin=stateCoin,passphrase=null){
  return deriveCoinKeyPairFromAccount(deriveCoinAccount(mnemonicString,coin,passphrase),index)
}
function deriveCoinAddress(mnemonicString,index,coin=stateCoin,passphrase=null){
  return deriveCoinKeyPair(mnemonicString,index,coin,passphrase).getAddress().toString()
}
function deriveWalletAddresses(mnemonicString,coin=stateCoin,receiveCount=null,passphrase=null){
  var service=getStateService(coin)
  var addresses=[]
  var addressCount=(receiveCount==null?getWalletAddressCount(coin):receiveCount+1)
  var account=deriveCoinAccount(mnemonicString,coin,passphrase)
  for (var index=service.changeIndex;index<service.changeIndex+addressCount;index++){
    addresses.push(deriveCoinAddressFromAccount(account,index))
  }
  return addresses
}
function isSafeNonNegativeInteger(value){
  return Number.isSafeInteger(value)&&value>=0
}
function formatSats(value,coin=stateCoin){
  if (!isSafeNonNegativeInteger(value)){return "0"}
  var service=getStateService(coin)
  var whole=Math.floor(value/service.unitsPerCoin)
  var fraction=String(value%service.unitsPerCoin).padStart(service.decimals,"0").replace(/0+$/,"")
  return fraction===""?String(whole):whole+"."+fraction
}
function isStateCoinActive(coin=stateCoin){
  var supportedCombo=$$$('#comboSupported')
  var balanceCombo=$$$('#comboBalance')
  return ((supportedCombo!=null)&&(supportedCombo.value===coin))||((balanceCombo!=null)&&(balanceCombo.value===coin))
}
function getStateMode(now=Date.now(),coin=stateCoin){
  if (!isStateCoinActive(coin)){return "inactive"}
  if ((!document.hidden)&&(now<stateActivity.focusUntil)){return "focused"}
  return "sleeping"
}
function updateStateMode(now=Date.now(),coin=stateCoin){
  stateActivity.mode=getStateMode(now,coin)
  return stateActivity.mode
}
function isStateCurrent(coin=stateCoin){
  var service=getStateService(coin)
  return (walletState.coin===coin)&&(walletState.status==="ready")&&(walletState.snapshot!=null)&&(walletState.updatedAt!=null)&&((Date.now()-walletState.updatedAt)<=service.spendableAge)&&(!pendingInputsPresent(walletState.snapshot))
}
function freezeStateSnapshot(snapshot){
  snapshot.utxos.forEach(function(utxo){Object.freeze(utxo)})
  snapshot.addresses.forEach(function(addressState){
    addressState.utxos.forEach(function(utxo){Object.freeze(utxo)})
    Object.freeze(addressState.utxos)
    Object.freeze(addressState)
  })
  Object.freeze(snapshot.utxos)
  Object.freeze(snapshot.addresses)
  if (snapshot.timing!=null){Object.freeze(snapshot.timing)}
  return Object.freeze(snapshot)
}
function getDisplayedBalance(coin=stateCoin){
  if ((walletState.coin!==coin)||(walletState.snapshot==null)){
    var cachedBalance=readConfirmedBalanceCache(coin)
    return cachedBalance==null?"0":formatSats(cachedBalance.balanceSats,coin)
  }
  return formatSats(walletState.snapshot.balanceSats,coin)
}
function readConfirmedBalanceCache(coin=stateCoin){
  try{
    var store=JSON.parse(localStorage.getItem(confirmedBalanceCacheStorageKey)||"{}")
    var record=store[coin]
    if ((record==null)||(record.walletId!==historyWalletId())||(!isSafeNonNegativeInteger(record.balanceSats))||
        (!isSafeNonNegativeInteger(record.height))||(typeof record.blockHash!=="string")||(!/^[0-9a-f]{64}$/.test(record.blockHash))||
        (!Number.isSafeInteger(record.updatedAt))||(record.updatedAt<=0)){
      return null
    }
    return record
  }catch(error){return null}
}
function storeConfirmedBalanceCache(snapshot,coin=stateCoin,updatedAt=Date.now()){
  if ((snapshot==null)||(!isSafeNonNegativeInteger(snapshot.balanceSats))||(!isSafeNonNegativeInteger(snapshot.height))||
      (typeof snapshot.blockHash!=="string")||(!/^[0-9a-f]{64}$/.test(snapshot.blockHash))||
      (!Number.isSafeInteger(updatedAt))||(updatedAt<=0)||(historyWalletId()==="")){
    return false
  }
  var store={}
  try{
    var saved=JSON.parse(localStorage.getItem(confirmedBalanceCacheStorageKey)||"{}")
    if ((saved!=null)&&(!Array.isArray(saved))&&(typeof saved==="object")){store=saved}
  }catch(error){}
  store[coin]={
    walletId:historyWalletId(),
    balanceSats:snapshot.balanceSats,
    height:snapshot.height,
    blockHash:snapshot.blockHash,
    updatedAt:updatedAt
  }
  localStorage.setItem(confirmedBalanceCacheStorageKey,JSON.stringify(store))
  return true
}
function updateBalanceDisplay(coin=stateCoin){
  supportedCoins[coin].balance=getDisplayedBalance(coin)
  if ($$$('#comboBalance').value===coin){
    var balanceInput=$$$('#inputBalance')
    balanceInput.removeAttribute('disabled')
    balanceInput.setAttribute('readonly','true')
    balanceInput.value=supportedCoins[coin].balance
    balanceInput.dataset.stateStatus=walletState.status
    balanceInput.title=isStateCurrent(coin)?T("txtLiveConfirmedBalance"):T("txtLastObservedNotSpendable")
    scaleBalanceValue()
    syncBalanceToCalculator(coin,false)
  }
  updateCoinStateStatus(coin)
}
function clearStateFreshnessTimer(){
  clearTimeout(stateFreshnessTimer)
  stateFreshnessTimer=null
}
function expireWalletState(coin=stateCoin){
  if ((walletState.coin!==coin)||(walletState.snapshot==null)){return}
  walletState={coin:coin,status:"stale",snapshot:walletState.snapshot,error:"State snapshot expired",updatedAt:walletState.updatedAt}
  supportedCoins[coin].connections=0
  updateBalanceDisplay(coin)
}
function scheduleStateExpiry(coin=stateCoin){
  var service=getStateService(coin)
  clearStateFreshnessTimer()
  if ((walletState.coin!==coin)||(walletState.status!=="ready")||(walletState.updatedAt==null)){return}
  var generation=stateGeneration
  var remaining=service.spendableAge-(Date.now()-walletState.updatedAt)
  stateFreshnessTimer=setTimeout(function(){
    if (generation!==stateGeneration){return}
    if (isStateCurrent(coin)){
      scheduleStateExpiry(coin)
      return
    }
    expireWalletState(coin)
  },Math.max(1,remaining+1))
}
function resetWalletState(reason="wallet-change",coin=stateCoin){
  cancelZeroConfirmationRequest()
  clearConfirmedReceiptSyncTimer()
  currentPaymentReceipt=undefined
  currentPaymentReceiptHistoryStatus=undefined
  currentPaymentReceiptSeenAt=undefined
  clearLocalSendPlan(T("txtActiveWalletStateChanged"))
  resetPendingBroadcastRuntime()
  stateGeneration++
  clearTimeout(stateRefreshTimer)
  clearStateFreshnessTimer()
  if (stateRequestController!=null){stateRequestController.abort()}
  stateRequestController=null
  stateRequest=null
  walletAddresses=[]
  walletState={coin:coin,status:"unavailable",snapshot:null,error:reason,updatedAt:null}
  supportedCoins[coin].balance="0"
  supportedCoins[coin].connections=0
}
function switchStateCoin(coin,reason="coin-selection",wake=true){
  if (!operationalWalletCoins().includes(coin)){throw new Error("State service unavailable for "+coin)}
  if (coin===stateCoin){
    updateCoinPresentation(coin)
    return wake?wakeState(reason,true):Promise.resolve(walletState.snapshot||true)
  }
  var previousCoin=stateCoin
  var previousBalance=getDisplayedBalance(previousCoin)
  resetWalletState(reason,previousCoin)
  supportedCoins[previousCoin].balance=previousBalance
  stateCoin=coin
  walletState={coin:coin,status:"unavailable",snapshot:null,error:reason,updatedAt:null}
  stateActivity={mode:"sleeping",focusUntil:0,lastActivityAt:null,lastAttemptAt:null,nextRefreshAt:null,attempts:0,lastReason:reason}
  supportedCoins[coin].balance=getDisplayedBalance(coin)
  updateCoinPresentation(coin)
  updateBalanceDisplay(coin)
  return wake?wakeState(reason,true):Promise.resolve(true)
}
function beginStateRefresh(coin=stateCoin){
  var sameCoin=walletState.coin===coin
  var hadSnapshot=sameCoin&&(walletState.snapshot!=null)
  walletState={coin:coin,status:"loading",snapshot:sameCoin?walletState.snapshot:null,error:null,updatedAt:sameCoin?walletState.updatedAt:null}
  supportedCoins[coin].connections=0
  if (!hadSnapshot){updateBalanceDisplay(coin)}
}
function invalidateWalletState(error,coin=stateCoin){
  var message=error instanceof Error?error.message:String(error)
  clearLocalSendPlan(T("txtConfirmedInputsUnavailable"))
  var sameCoin=walletState.coin===coin
  clearStateFreshnessTimer()
  walletState={coin:coin,status:"unavailable",snapshot:sameCoin?walletState.snapshot:null,error:message,updatedAt:sameCoin?walletState.updatedAt:null}
  supportedCoins[coin].connections=0
  updateBalanceDisplay(coin)
}
function previousAddressResponse(addressState,height){
  return {
    address:addressState.address,
    lastChangeHeight:addressState.lastChangeHeight,
    balance:addressState.balanceSats,
    utxos:addressState.utxos.map(function(utxo){
      return {
        txid:utxo.txid,
        vout:utxo.vout,
        value:utxo.valueSats,
        height:utxo.height,
        confirmations:height-utxo.height+1,
        scriptPubKey:utxo.scriptPubKey
      }
    })
  }
}
function parseAddressState(addressState,expectedAddress,index,height,network,outpoints){
  if ((addressState==null)||(addressState.address!==expectedAddress)){throw new Error("Unexpected address state")}
  if (!isSafeNonNegativeInteger(addressState.balance)){throw new Error("Invalid address balance")}
  if ((addressState.lastChangeHeight!==null)&&((!isSafeNonNegativeInteger(addressState.lastChangeHeight))||(addressState.lastChangeHeight>height))){throw new Error("Invalid last-change height")}
  if (!Array.isArray(addressState.utxos)){throw new Error("Invalid UTXO collection")}

  var expectedScript=bitcoin.address.toOutputScript(expectedAddress,network).toString('hex')
  var addressBalance=0
  var addressUtxos=[]
  for (const candidate of addressState.utxos){
    if ((candidate==null)||(typeof candidate.txid!=="string")||(!/^[0-9a-f]{64}$/.test(candidate.txid))){throw new Error("Invalid UTXO txid")}
    if (!isSafeNonNegativeInteger(candidate.vout)){throw new Error("Invalid UTXO vout")}
    if ((!Number.isSafeInteger(candidate.value))||(candidate.value<=0)){throw new Error("Invalid UTXO value")}
    if ((!Number.isSafeInteger(candidate.height))||(candidate.height<1)||(candidate.height>height)){throw new Error("Invalid UTXO height")}
    if ((!Number.isSafeInteger(candidate.confirmations))||(candidate.confirmations!==height-candidate.height+1)){throw new Error("Invalid UTXO confirmations")}
    if ((typeof candidate.scriptPubKey!=="string")||(candidate.scriptPubKey!==expectedScript)){throw new Error("Invalid UTXO script")}

    var outpoint=candidate.txid+":"+candidate.vout
    if (outpoints[outpoint]){throw new Error("Duplicate UTXO")}
    outpoints[outpoint]=true
    var utxo={
      index:index,
      address:expectedAddress,
      txid:candidate.txid,
      vout:candidate.vout,
      valueSats:candidate.value,
      height:candidate.height,
      confirmations:candidate.confirmations,
      scriptPubKey:candidate.scriptPubKey
    }
    addressUtxos.push(utxo)
    addressBalance+=candidate.value
    if (!Number.isSafeInteger(addressBalance)){throw new Error("Address balance overflow")}
  }
  if (addressBalance!==addressState.balance){throw new Error("Inconsistent address balance")}
  return {
    index:index,
    address:expectedAddress,
    lastChangeHeight:addressState.lastChangeHeight,
    balanceSats:addressBalance,
    utxos:addressUtxos
  }
}
function parseStateResponse(data,expectedAddresses,previousSnapshot=null,coin=stateCoin){
  var service=getStateService(coin)
  var network=bitcoin.networks[networks[coin].index]
  if ((data==null)||(data.ok!==true)||(data.coin!==service.responseCoin)){throw new Error("Invalid state envelope")}
  if ((typeof data.id!=="string")||(!/^[0-9a-f]{32}$/.test(data.id))){throw new Error("Invalid state id")}
  if (!isSafeNonNegativeInteger(data.height)){throw new Error("Invalid state height")}
  if ((typeof data.blockHash!=="string")||(!/^[0-9a-f]{64}$/.test(data.blockHash))){throw new Error("Invalid state checkpoint")}
  if ((!Number.isSafeInteger(data.zeroConfirmationObservers))||(data.zeroConfirmationObservers<1)||(data.zeroConfirmationObservers>service.maximumZeroConfirmationObservers)){throw new Error("Invalid observer count")}
  if (!Array.isArray(data.addresses)){throw new Error("Invalid address state collection")}
  var mode=data.mode==undefined?"full":data.mode
  if ((mode!=="full")&&(mode!=="delta")){throw new Error("Invalid state mode")}
  if ((mode==="full")&&((!isSafeNonNegativeInteger(data.balance))||(data.addresses.length!==expectedAddresses.length))){throw new Error("Invalid full state")}
  if (mode==="delta"){
    if ((previousSnapshot==null)||(!Array.isArray(previousSnapshot.addresses))||(previousSnapshot.addresses.length!==expectedAddresses.length)||(data.height<previousSnapshot.height)){
      throw new Error("Invalid delta base")
    }
  }

  var reported={}
  data.addresses.forEach(function(addressState,position){
    if ((addressState==null)||(typeof addressState.address!=="string")){throw new Error("Unexpected address state")}
    var expectedPosition=expectedAddresses.indexOf(addressState.address)
    if ((expectedPosition<0)||(reported[addressState.address]!=undefined)||((mode==="full")&&(expectedPosition!==position))){throw new Error("Unexpected address state")}
    reported[addressState.address]=addressState
  })

  var totalBalance=0
  var outpoints={}
  var allUtxos=[]
  var addressStates=[]
  for (var index=0;index<expectedAddresses.length;index++){
    var expectedAddress=expectedAddresses[index]
    var addressState=reported[expectedAddress]
    if (addressState==undefined){
      if (mode!=="delta"){throw new Error("Missing address state")}
      var previousAddress=previousSnapshot.addresses[index]
      if ((previousAddress==null)||(previousAddress.address!==expectedAddress)){throw new Error("Invalid delta base address")}
      addressState=previousAddressResponse(previousAddress,data.height)
    }else if ((mode==="delta")&&(addressState.lastChangeHeight===previousSnapshot.addresses[index].lastChangeHeight)){
      throw new Error("Redundant delta address")
    }
    var parsedAddress=parseAddressState(addressState,expectedAddress,index,data.height,network,outpoints)
    addressStates.push(parsedAddress)
    parsedAddress.utxos.forEach(function(utxo){allUtxos.push(utxo)})
    totalBalance+=parsedAddress.balanceSats
    if (!Number.isSafeInteger(totalBalance)){throw new Error("Total balance overflow")}
  }

  if ((mode==="full")&&(totalBalance!==data.balance)){throw new Error("Inconsistent total balance")}
  if ((mode==="delta")&&(data.balance!==undefined)&&((!isSafeNonNegativeInteger(data.balance))||(totalBalance!==data.balance))){throw new Error("Inconsistent delta balance")}
  return {
    id:data.id,
    mode:mode,
    height:data.height,
    blockHash:data.blockHash,
    zeroConfirmationObservers:data.zeroConfirmationObservers,
    balanceSats:totalBalance,
    addresses:addressStates,
    utxos:allUtxos,
    timing:{
      clientMs:Number.isSafeInteger(data.clientMs)?data.clientMs:null,
      relayMs:Number.isSafeInteger(data.relayMs)?data.relayMs:null,
      rotRoundTripMs:Number.isSafeInteger(data.rotRoundTripMs)?data.rotRoundTripMs:null,
      attempts:Number.isSafeInteger(data.attempts)?data.attempts:null
    }
  }
}
function buildStateRequest(addresses,previousSnapshot){
  var body={operation:"state",addresses:addresses}
  if ((previousSnapshot==null)||(!isSafeNonNegativeInteger(previousSnapshot.height))||(!Array.isArray(previousSnapshot.addresses))||(previousSnapshot.addresses.length!==addresses.length)){return body}
  var markers=[]
  for (var index=0;index<addresses.length;index++){
    var addressState=previousSnapshot.addresses[index]
    if ((addressState==null)||(addressState.address!==addresses[index])||((addressState.lastChangeHeight!==null)&&(!isSafeNonNegativeInteger(addressState.lastChangeHeight)))){return body}
    markers.push(addressState.lastChangeHeight)
  }
  body.height=previousSnapshot.height
  body.lastChangeHeights=markers
  return body
}
async function fetchState(addresses,previousSnapshot=null,coin=stateCoin){
  var service=getStateService(coin)
  var controller=new AbortController()
  stateRequestController=controller
  var timeout=setTimeout(function(){controller.abort()},service.requestTimeout)
  var started=performance.now()
  try{
    var response=await fetch(service.url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(buildStateRequest(addresses,previousSnapshot)),
      cache:"no-store",
      signal:controller.signal
    })
    if (!response.ok){throw new Error(service.responseCoin+" state HTTP "+response.status)}
    var data=await response.json()
    data.clientMs=Math.round(performance.now()-started)
    return parseStateResponse(data,addresses,previousSnapshot,coin)
  }finally{
    clearTimeout(timeout)
    if (stateRequestController===controller){stateRequestController=null}
  }
}
async function refreshState(reason="manual",coin=stateCoin){
  var service=getStateService(coin)
  if (stateRequest!=null){return stateRequest}
  stateActivity.lastAttemptAt=Date.now()
  stateActivity.nextRefreshAt=null
  stateActivity.attempts++
  stateActivity.lastReason=reason
  var previousSnapshot=walletState.coin===coin?walletState.snapshot:null
  beginStateRefresh(coin)
  var requestGeneration=stateGeneration
  var request=(async function(){
    try{
      if (!navigator.onLine){throw new Error(service.responseCoin+" state offline")}
      var mnemonicString=localStorage.getItem("bip39")
      if ((typeof mnemonicString!=="string")||(!mnemonic.check(mnemonicString))){throw new Error("Invalid active mnemonic")}
      loadPendingBroadcast(mnemonicString,coin)
      walletAddresses=deriveWalletAddresses(mnemonicString,coin)
      var snapshot=await fetchState(walletAddresses,previousSnapshot,coin)
      if (requestGeneration!==stateGeneration){throw new Error("Active wallet state was invalidated")}
      if (localStorage.getItem("bip39")!==mnemonicString){throw new Error("Active wallet changed during state request")}
      snapshot=freezeStateSnapshot(snapshot)
      walletState={coin:coin,status:"ready",snapshot:snapshot,error:null,updatedAt:Date.now()}
      storeConfirmedBalanceCache(snapshot,coin,walletState.updatedAt)
      observeConfirmedOutpoints(snapshot,coin)
      reconcileLocalSendPlan(snapshot)
      reconcilePendingBroadcast(snapshot)
      reconcileCurrentPaymentReceipt(snapshot,coin)
      supportedCoins[coin].connections=1
      updateBalanceDisplay(coin)
      scheduleStateExpiry(coin)
      synchronizeHistory(snapshot,walletAddresses.slice(),coin)
      console_log(service.responseCoin+" state updated ("+snapshot.mode+"): "+snapshot.height+" / "+formatSats(snapshot.balanceSats,coin))
      return snapshot
    }catch(error){
      if (requestGeneration===stateGeneration){
        invalidateWalletState(error,coin)
        console.error("Unable to update "+service.responseCoin+" state:",error)
      }
      return false
    }finally{
      if (stateRequest===request){stateRequest=null}
      if (requestGeneration===stateGeneration){scheduleStateRefresh()}
    }
  })()
  stateRequest=request
  return request
}
function isSendCommitmentActive(){
  var sendView=$$$('#idSendView')
  return (sendView!=null)&&(!sendView.classList.contains('hidden'))&&((localSendPlan!=null)||(localSignedTransaction!=null))&&(pendingBroadcast==null)
}
function scheduleStateRefresh(){
  var service=getStateService(stateCoin)
  clearTimeout(stateRefreshTimer)
  if (isSendCommitmentActive()){
    stateActivity.nextRefreshAt=null
    return
  }
  var now=Date.now()
  var mode=updateStateMode(now)
  if (mode!=="focused"){
    stateActivity.nextRefreshAt=null
    return
  }

  var base=stateActivity.lastAttemptAt==null?now:stateActivity.lastAttemptAt
  var dueAt=Math.max(now,base+service.focusInterval)
  stateActivity.nextRefreshAt=dueAt
  stateRefreshTimer=setTimeout(async function(){
    if (isSendCommitmentActive()){
      scheduleStateRefresh()
      return
    }
    var checkTime=Date.now()
    var checkMode=updateStateMode(checkTime)
    if (checkMode!=="focused"){
      scheduleStateRefresh()
      return
    }
    var elapsed=stateActivity.lastAttemptAt==null?service.focusInterval:checkTime-stateActivity.lastAttemptAt
    if (elapsed>=service.focusInterval){
      await refreshState(checkMode)
    }else{
      scheduleStateRefresh()
    }
  },Math.max(250,dueAt-now))
}
function wakeState(reason="activity",immediate=true){
  var service=getStateService(stateCoin)
  var now=Date.now()
  stateActivity.focusUntil=now+service.focusDuration
  stateActivity.lastActivityAt=now
  stateActivity.lastReason=reason
  updateStateMode(now)
  var mayRefresh=(stateActivity.lastAttemptAt==null)||((now-stateActivity.lastAttemptAt)>=service.focusInterval)
  if (immediate&&mayRefresh){return refreshState(reason)}
  scheduleStateRefresh()
  return Promise.resolve(walletState.snapshot||false)
}
function recordStateActivity(reason="activity"){
  if (!isStateCoinActive()){return}
  wakeState(reason,!isSendCommitmentActive())
}
function startStateActivity(){
  var service=getStateService(stateCoin)
  var now=Date.now()
  stateActivity.focusUntil=isStateCoinActive(stateCoin)?now+service.focusDuration:0
  stateActivity.lastActivityAt=now
  stateActivity.lastReason="startup"
  updateStateMode(now)
  refreshState("startup")
}
async function requireFreshState(){
  var service=getStateService(stateCoin)
  var now=Date.now()
  stateActivity.focusUntil=now+service.focusDuration
  stateActivity.lastActivityAt=now
  stateActivity.lastReason="send-required"
  updateStateMode(now)
  var snapshot=await refreshState("send-required")
  if ((snapshot===false)||(!isStateCurrent())){throw new Error(T("txtFreshStateUnavailable",{coin:service.responseCoin}))}
  return snapshot
}
function inspectStateActivity(coin=stateCoin){
  updateStateMode(Date.now(),coin)
  return {
    mode:stateActivity.mode,
    focusUntil:stateActivity.focusUntil==0?null:new Date(stateActivity.focusUntil).toISOString(),
    lastActivityAt:stateActivity.lastActivityAt==null?null:new Date(stateActivity.lastActivityAt).toISOString(),
    lastAttemptAt:stateActivity.lastAttemptAt==null?null:new Date(stateActivity.lastAttemptAt).toISOString(),
    nextRefreshAt:stateActivity.nextRefreshAt==null?null:new Date(stateActivity.nextRefreshAt).toISOString(),
    attempts:stateActivity.attempts,
    lastReason:stateActivity.lastReason,
    coin:coin,
    observedBalance:getDisplayedBalance(coin),
    spendable:isStateCurrent(coin)
  }
}
function getConfirmedUtxos(coin=stateCoin){
  if (!isStateCurrent(coin)){return []}
  return walletState.snapshot.utxos.map(function(utxo){return Object.assign({},utxo)})
}
function sendPlanError(code,message){
  var error=new Error(message)
  error.code=code
  return error
}
function parseCoinAmount(amount,coin=stateCoin){
  var service=getStateService(coin)
  var text=String(amount==null?"":amount).trim()
  var amountPattern=new RegExp("^(?:0|[1-9][0-9]*)(?:\\.[0-9]{1,"+service.decimals+"})?$")
  if (!amountPattern.test(text)){
    throw sendPlanError("INVALID_AMOUNT",T("txtInvalidAmountPrecision"))
  }
  var parts=text.split(".")
  var whole=Number(parts[0])
  var fraction=Number((parts[1]||"").padEnd(service.decimals,"0"))
  var sats=whole*service.unitsPerCoin+fraction
  if ((!Number.isSafeInteger(sats))||(sats<=0)){
    throw sendPlanError("INVALID_AMOUNT",T("txtAmountOutsideSafeRange"))
  }
  return sats
}
function validateCoinAddress(address,coin=stateCoin){
  var candidate=String(address==null?"":address).trim()
  if ((candidate==="")||(candidate!==String(address))){throw sendPlanError("INVALID_ADDRESS",T("txtInvalidCoinAddress",{coin:supportedCoins[coin].name}))}
  try{
    var network=bitcoin.networks[networks[coin].index]
    var script=bitcoin.address.toOutputScript(candidate,network).toString("hex")
    if (!/^76a914[0-9a-f]{40}88ac$/.test(script)){throw new Error("Unsupported address type")}
  }catch(error){
    throw sendPlanError("INVALID_ADDRESS",T("txtInvalidCoinAddress",{coin:supportedCoins[coin].name}))
  }
  return candidate
}
function normalizePaymentAmount(value){
  return String(value==null?"":value).replace(/\s+/g,"")
}
function parsePaymentRequest(value,coin=stateCoin){
  var text=String(value==null?"":value).trim()
  var service=getStateService(coin)
  if (text.toLowerCase().indexOf(service.uriScheme)===0){
    var request=text.substring(service.uriScheme.length)
    var queryAt=request.indexOf("?")
    var address=queryAt<0?request:request.substring(0,queryAt)
    var amount=""
    if (queryAt>=0){
      var parameters=new URLSearchParams(request.substring(queryAt+1))
      if ((Array.from(parameters.keys()).some(function(key){return key!=="amount"}))||(parameters.getAll("amount").length!==1)){
        throw sendPlanError("INVALID_REQUEST",T("txtUnsupportedPaymentRequestFields"))
      }
      amount=normalizePaymentAmount(parameters.get("amount")||"")
      if (amount!==""){parseCoinAmount(amount,coin)}
    }
    return {address:validateCoinAddress(address,coin),amount:amount}
  }
  return {address:validateCoinAddress(text,coin),amount:""}
}
function createLocalSendPlan(snapshot,destination,amount,coin=stateCoin){
  var service=getStateService(coin)
  if ((snapshot==null)||(!Array.isArray(snapshot.addresses))||(!Array.isArray(snapshot.utxos))){
    throw sendPlanError("INVALID_STATE",T("txtValidSnapshotRequired"))
  }
  destination=validateCoinAddress(destination,coin)
  if (snapshot.addresses.some(function(addressState){return addressState.address===destination})){
    throw sendPlanError("SELF_ADDRESS",T("txtOwnDestination"))
  }
  var amountSats=parseCoinAmount(amount,coin)
  var candidates=snapshot.utxos.map(function(utxo){return Object.assign({},utxo)}).sort(function(a,b){
    if (a.valueSats!==b.valueSats){return b.valueSats-a.valueSats}
    if (a.txid!==b.txid){return a.txid<b.txid?-1:1}
    return a.vout-b.vout
  })
  var availableSats=candidates.reduce(function(total,utxo){return total+utxo.valueSats},0)
  if ((!Number.isSafeInteger(availableSats))||(availableSats<amountSats+service.minimumFeeSats)){
    throw sendPlanError("INSUFFICIENT_BALANCE",T("txtInsufficientConfirmedBalance"))
  }
  var inputs=[]
  var inputTotalSats=0
  var feeSats=0
  var targetSats=0
  for (const candidate of candidates){
    inputs.push(candidate)
    inputTotalSats+=candidate.valueSats
    feeSats=Math.ceil(inputs.length/service.feeTierInputs)*service.minimumFeeSats
    targetSats=amountSats+feeSats
    if (!Number.isSafeInteger(inputTotalSats)||!Number.isSafeInteger(targetSats)){throw sendPlanError("INVALID_AMOUNT",T("txtAmountOutsideSafeRange"))}
    if (inputTotalSats>=targetSats){break}
  }
  if (inputTotalSats<targetSats){throw sendPlanError("INSUFFICIENT_BALANCE",T("txtInsufficientConfirmedBalance"))}
  var changeState=snapshot.addresses[service.changeIndex]
  if ((changeState==null)||(typeof changeState.address!=="string")){throw sendPlanError("INVALID_STATE",T("txtChangeAddressUnavailable"))}
  var frozenInputs=inputs.map(function(input){return Object.freeze(Object.assign({},input))})
  Object.freeze(frozenInputs)
  return Object.freeze({
    coin:coin,
    checkpoint:Object.freeze({id:snapshot.id,height:snapshot.height,blockHash:snapshot.blockHash}),
    destination:destination,
    amountSats:amountSats,
    feeSats:feeSats,
    feeTiers:Math.ceil(inputs.length/service.feeTierInputs),
    inputTotalSats:inputTotalSats,
    changeSats:inputTotalSats-targetSats,
    changeIndex:service.changeIndex,
    changeAddress:changeState.address,
    inputs:frozenInputs
  })
}
function localPlanInputsMatchSnapshot(plan,snapshot){
  if ((plan==null)||(snapshot==null)||(!Array.isArray(snapshot.utxos))){return false}
  return plan.inputs.every(function(input){
    return snapshot.utxos.some(function(utxo){
      return (utxo.txid===input.txid)&&(utxo.vout===input.vout)&&(utxo.index===input.index)&&(utxo.valueSats===input.valueSats)&&(utxo.scriptPubKey===input.scriptPubKey)
    })
  })
}
function reconcileLocalSendPlan(snapshot){
  if ((localSendPlan!=null)&&(!localPlanInputsMatchSnapshot(localSendPlan,snapshot))){
    clearLocalSendPlan(T("txtPlannedInputUnavailable"))
    return false
  }
  return true
}
function setSendStatus(message,status=""){
  var line=$$$('#idSendStatus')
  if (line==null){return}
  line.textContent=message
  line.className="send-status"+(status===""?"":" "+status)
}
function setTransactionPresentation(mode){
  var allowed=['closed','receiveRequest','receiveObservation','sendEdit','sendConfirm','sendSubmitted']
  if (!allowed.includes(mode)){throw new Error("Invalid transaction presentation")}
  transactionPresentation=mode
  var open=mode!=="closed"
  var receive=mode.indexOf("receive")===0
  var send=mode.indexOf("send")===0
  $$$('#panel-transaction').classList.toggle('hidden',!open)
  $$$('#panel-buttons').classList.toggle('hidden',open)
  $$$('#idReceiveView').classList.toggle('hidden',!receive)
  $$$('#idSendView').classList.toggle('hidden',!send)
  $$$('#idReceiveRequestContent').classList.toggle('hidden',mode!=="receiveRequest")
  $$$('#idReceiveZeroConfirmation').classList.toggle('hidden',mode!=="receiveObservation")
  $$$('#idSendEditor').classList.toggle('hidden',mode!=="sendEdit")
  $$$('#idBroadcastConfirmation').classList.toggle('hidden',mode!=="sendConfirm")
  $$$('#idBroadcastTracking').classList.toggle('hidden',mode!=="sendSubmitted")
  $$$('#panel-calc').classList.toggle('hidden',['receiveObservation','sendConfirm','sendSubmitted'].includes(mode))
  $$$('#wallet').classList.toggle('transaction-active',open)
  return mode
}
function fillCompactTransaction(prefix,coin,amountSats,destination){
  $$$("#"+prefix+"Coin").textContent=getStateService(coin).responseCoin
  $$$("#"+prefix+"Amount").textContent=formatSats(amountSats,coin)
  $$$("#"+prefix+"Destination").textContent=destination
}
function resetSendForm(){
  clearLocalSendPlan()
  $$$('#idSendTo').value=""
  $$$('#idSendTo').readOnly=false
  ;['#inputReference','#inputFiat','#inputSupported'].forEach(function(selector){
    var input=$$$(selector)
    if (input!=null){input.value=""}
  })
  calculatorShowsBalance=false
  setSendStatus(T("txtEnterScanDestination"),"pending")
}
function updateSendTitle(){
  var title=T("txtSendCoin",{coin:supportedCoins[stateCoin].name})
  try{
    var amountSats=parseCoinAmount($$$('#inputSupported').value,stateCoin)
    title=T("txtSendAmountCoin",{amount:formatSats(amountSats,stateCoin),coin:supportedCoins[stateCoin].name})
  }catch(error){}
  $$$('#idTransactionTitle').textContent=title
  return title
}
function clearLocalSignedTransaction(){
  localSignedTransaction=undefined
  var result=$$$('#idSignedTransaction')
  if (result!=null){result.classList.add('hidden')}
  var raw=$$$('#idSignedRaw')
  if (raw!=null){raw.value=""}
  var outputs=$$$('#idSignedOutputs')
  if (outputs!=null){outputs.replaceChildren()}
  var warning=$$$('#idPlanLocalWarning')
  if (warning!=null){warning.textContent=T("txtUnsignedLocalWarning")}
  var confirmation=$$$('#idBroadcastConfirmation')
  if (confirmation!=null){confirmation.classList.add('hidden')}
}
function clearLocalSendPlan(reason=""){
  clearLocalSignedTransaction()
  localSendPlan=undefined
  var preview=$$$('#idSendPlan')
  if (preview!=null){preview.classList.add('hidden')}
  var inputs=$$$('#idSendInputs')
  if (inputs!=null){inputs.replaceChildren()}
  if (reason!==""){setSendStatus(reason,"pending")}
  if ((transactionPresentation==="sendConfirm")&&(pendingBroadcast==null)){setTransactionPresentation("sendEdit")}
}
function renderLocalSendPlan(plan){
  clearLocalSignedTransaction()
  $$$('#idPlanCheckpoint').textContent=plan.checkpoint.height+" · "+plan.checkpoint.blockHash
  $$$('#idPlanDestination').textContent=plan.destination
  $$$('#idPlanAmount').textContent=formatSats(plan.amountSats,plan.coin)+" "+plan.coin.toUpperCase()
  $$$('#idPlanFee').textContent=formatSats(plan.feeSats,plan.coin)+" "+plan.coin.toUpperCase()
  $$$('#idPlanInputTotal').textContent=formatSats(plan.inputTotalSats,plan.coin)+" "+plan.coin.toUpperCase()
  $$$('#idPlanChange').textContent=formatSats(plan.changeSats,plan.coin)+" "+plan.coin.toUpperCase()
  $$$('#idPlanChangeAddress').textContent=plan.changeSats>0?plan.changeAddress+" ("+T("txtIndexNumber",{index:plan.changeIndex})+")":T("txtNoChangeOutput")
  $$$('#idPlanCoinTicker').textContent=plan.coin.toUpperCase()
  var body=$$$('#idSendInputs')
  body.replaceChildren()
  plan.inputs.forEach(function(input){
    var row=document.createElement("tr")
    ;[input.index,input.txid+":"+input.vout,formatSats(input.valueSats,plan.coin)].forEach(function(value){
      var cell=document.createElement("td")
      cell.textContent=value
      row.appendChild(cell)
    })
    body.appendChild(row)
  })
  $$$('#idSendPlan').classList.remove('hidden')
  setSendStatus(T("txtPlanReady"),"ready")
}
function assertLocalPlanCurrent(plan,coin=stateCoin){
  if ((plan==null)||(plan!==localSendPlan)){throw sendPlanError("PLAN_CHANGED",T("txtPlanChanged"))}
  if ((walletState.coin!==coin)||(walletState.snapshot==null)){throw sendPlanError("STATE_CHANGED",T("txtConfirmedInputsUnavailable"))}
  var snapshot=walletState.snapshot
  if ((plan.destination!==$$$('#idSendTo').value)||(plan.amountSats!==parseCoinAmount($$$('#inputSupported').value,coin))){
    throw sendPlanError("PLAN_CHANGED",T("txtPlanChanged"))
  }
  if (!localPlanInputsMatchSnapshot(plan,snapshot)){throw sendPlanError("STATE_CHANGED",T("txtPlannedInputUnavailable"))}
  return true
}
function inspectSignedTransaction(plan,rawHex,coin=stateCoin){
  var network=bitcoin.networks[networks[coin].index]
  if ((typeof rawHex!=="string")||(!/^[0-9a-f]+$/.test(rawHex))||(rawHex.length%2!==0)||(rawHex.length>getStateService(coin).maximumRawTransactionHex)){throw sendPlanError("INVALID_RAW",T("txtInvalidRawTransaction"))}
  var transaction=bitcoin.Transaction.fromHex(rawHex,network)
  if (transaction.toHex()!==rawHex){throw sendPlanError("INVALID_RAW",T("txtRawRoundTripFailed"))}
  if (transaction.ins.length!==plan.inputs.length){throw sendPlanError("INPUT_MISMATCH",T("txtSignedInputMismatch"))}
  var verifiedInputs=plan.inputs.map(function(input,index){
    var txInput=transaction.ins[index]
    var txid=Array.from(txInput.hash).reverse().map(function(byte){return byte.toString(16).padStart(2,"0")}).join("")
    if ((txid!==input.txid)||(txInput.index!==input.vout)){throw sendPlanError("INPUT_MISMATCH",T("txtSignedInputMismatch"))}
    if (bitcoin.script.classifyInput(txInput.script)!==bitcoin.script.types.P2PKH){throw sendPlanError("SIGNATURE_INVALID",T("txtSignatureVerificationFailed"))}
    var chunks=bitcoin.script.decompile(txInput.script)
    var parsed=bitcoin.ECSignature.parseScriptSignature(chunks[0])
    if (parsed.hashType!==bitcoin.Transaction.SIGHASH_ALL){throw sendPlanError("SIGNATURE_INVALID",T("txtSignatureHashTypeMismatch"))}
    var publicKey=bitcoin.ECPair.fromPublicKeyBuffer(chunks[1],network)
    if (publicKey.getAddress().toString()!==input.address){throw sendPlanError("SIGNATURE_INVALID",T("txtSignatureAddressMismatch"))}
    var previousScript=bitcoin.address.toOutputScript(input.address,network)
    if (previousScript.toString("hex")!==input.scriptPubKey){throw sendPlanError("INPUT_MISMATCH",T("txtInputScriptMismatch",{index:input.index}))}
    var signatureHash=transaction.hashForSignature(index,previousScript,parsed.hashType)
    if (!publicKey.verify(signatureHash,parsed.signature)){throw sendPlanError("SIGNATURE_INVALID",T("txtSignatureVerificationFailed"))}
    return Object.freeze({index:index,derivationIndex:input.index,address:input.address,txid:txid,vout:txInput.index,signatureVerified:true})
  })
  Object.freeze(verifiedInputs)

  var expectedOutputs=[{role:"recipient",address:plan.destination,valueSats:plan.amountSats}]
  if (plan.changeSats>0){expectedOutputs.push({role:"change",address:plan.changeAddress,valueSats:plan.changeSats})}
  if (transaction.outs.length!==expectedOutputs.length){throw sendPlanError("OUTPUT_MISMATCH",T("txtSignedOutputMismatch"))}
  var totalOutputSats=0
  var verifiedOutputs=expectedOutputs.map(function(expected,index){
    var output=transaction.outs[index]
    var expectedScript=bitcoin.address.toOutputScript(expected.address,network)
    if ((!output.script.equals(expectedScript))||(output.value!==expected.valueSats)){throw sendPlanError("OUTPUT_MISMATCH",T("txtSignedOutputMismatch"))}
    totalOutputSats+=output.value
    return Object.freeze({index:index,role:expected.role,address:expected.address,valueSats:output.value,scriptPubKey:output.script.toString("hex")})
  })
  if (!Number.isSafeInteger(totalOutputSats)){throw sendPlanError("OUTPUT_MISMATCH",T("txtSignedOutputMismatch"))}
  var actualFeeSats=plan.inputTotalSats-totalOutputSats
  if (actualFeeSats!==plan.feeSats){throw sendPlanError("FEE_MISMATCH",T("txtSignedFeeMismatch"))}
  Object.freeze(verifiedOutputs)
  return Object.freeze({
    coin:coin,
    checkpoint:plan.checkpoint,
    txid:transaction.getId(),
    rawHex:rawHex,
    byteLength:transaction.byteLength(),
    amountSats:plan.amountSats,
    feeSats:actualFeeSats,
    changeSats:plan.changeSats,
    inputs:verifiedInputs,
    outputs:verifiedOutputs,
    signaturesVerified:true
  })
}
function buildSignedTransaction(plan,mnemonicString,coin=stateCoin,passphrase=null,transactionTime=null){
  var network=bitcoin.networks[networks[coin].index]
  var account=deriveCoinAccount(mnemonicString,coin,passphrase)
  var builder=new bitcoin.TransactionBuilder(network)
  if (transactionTime!==null){
    if ((!Number.isSafeInteger(transactionTime))||(transactionTime<0)){throw sendPlanError("INVALID_TIME",T("txtInvalidRawTransaction"))}
    builder.tx.time=transactionTime
  }
  plan.inputs.forEach(function(input){
    builder.addInput(input.txid,input.vout)
  })
  builder.addOutput(plan.destination,plan.amountSats)
  if (plan.changeSats>0){builder.addOutput(plan.changeAddress,plan.changeSats)}
  plan.inputs.forEach(function(input,index){
    var keyPair=deriveCoinKeyPairFromAccount(account,input.index)
    var derivedAddress=keyPair.getAddress().toString()
    if (derivedAddress!==input.address){throw sendPlanError("KEY_MISMATCH",T("txtInputKeyMismatch",{index:input.index}))}
    var derivedScript=bitcoin.address.toOutputScript(derivedAddress,network).toString("hex")
    if (derivedScript!==input.scriptPubKey){throw sendPlanError("KEY_MISMATCH",T("txtInputScriptMismatch",{index:input.index}))}
    builder.sign(index,keyPair)
  })
  var transaction=builder.build()
  return inspectSignedTransaction(plan,transaction.toHex(),coin)
}
function renderSignedTransaction(result){
  $$$('#idSignedTxid').textContent=result.txid
  $$$('#idSignedSize').textContent=T("txtByteCount",{count:result.byteLength})
  $$$('#idSignedFee').textContent=formatSats(result.feeSats,result.coin)+" "+result.coin.toUpperCase()
  $$$('#idSignedSignatures').textContent=T("txtSignaturesVerified",{count:result.inputs.length})
  $$$('#idSignedCoinTicker').textContent=result.coin.toUpperCase()
  var body=$$$('#idSignedOutputs')
  body.replaceChildren()
  result.outputs.forEach(function(output){
    var row=document.createElement("tr")
    ;[T(output.role==="recipient"?"txtRecipient":"txtChange"),output.address,formatSats(output.valueSats,result.coin)].forEach(function(value){
      var cell=document.createElement("td")
      cell.textContent=value
      row.appendChild(cell)
    })
    body.appendChild(row)
  })
  $$$('#idSignedRaw').value=result.rawHex
  $$$('#idSignedTransaction').classList.remove('hidden')
  if (pendingBroadcast==null){$$$('#idBroadcastTracking').classList.add('hidden')}
  $$$('#idPlanLocalWarning').textContent=T("txtReviewedInputsSignedBelow")
  setSendStatus(T("txtTransactionBuiltVerified"),"ready")
}
function prepareSignedTransaction(){
  if (!requireWalletSpendUnlocked()){return false}
  if (transactionBuilding){return false}
  transactionBuilding=true
  clearLocalSignedTransaction()
  setSendStatus(T("txtBuildingSigningTransaction"),"loading")
  try{
    assertLocalPlanCurrent(localSendPlan,stateCoin)
    var mnemonicString=localStorage.getItem("bip39")
    if ((typeof mnemonicString!=="string")||(!mnemonic.check(mnemonicString))){throw sendPlanError("MNEMONIC_INVALID",T("txtActiveMnemonicUnavailable"))}
    var plan=localSendPlan
    var result=buildSignedTransaction(plan,mnemonicString,stateCoin)
    assertLocalPlanCurrent(plan,stateCoin)
    localSignedTransaction=result
    renderSignedTransaction(result)
    return result
  }catch(error){
    clearLocalSignedTransaction()
    setSendStatus(T("txtUnableBuildTransaction",{reason:error.message}),"error")
    return false
  }finally{
    transactionBuilding=false
  }
}
function setBroadcastOutcome(message,status=""){
  var line=$$$('#idBroadcastOutcome')
  if (line==null){return}
  line.textContent=message
  line.className="broadcast-outcome"+(status===""?"":" "+status)
}
function formatBroadcastTiming(response){
  if (response==null){return "-"}
  return T("txtBroadcastTiming",{
    client:timingValue(response.clientMs),
    relay:timingValue(response.relayMs),
    rotRoundTrip:timingValue(response.rotRoundTripMs),
    rot:timingValue(response.rotMs),
    core:timingValue(response.coreMs),
    attempt:timingValue(response.attempts)
  })
}
function compactTiming(response){
  if (response==null){return null}
  return {
    clientMs:Number.isSafeInteger(response.clientMs)?response.clientMs:null,
    relayMs:Number.isSafeInteger(response.relayMs)?response.relayMs:null,
    rotRoundTripMs:Number.isSafeInteger(response.rotRoundTripMs)?response.rotRoundTripMs:null,
    rotMs:Number.isSafeInteger(response.rotMs)?response.rotMs:null,
    coreMs:Number.isSafeInteger(response.coreMs)?response.coreMs:null,
    attempts:Number.isSafeInteger(response.attempts)?response.attempts:null
  }
}
function broadcastOutcomeText(status,response={}){
  if (status==="SUBMITTING"){return T("txtTransactionSubmitting")}
  if (status==="CONFIRMED"){return T("txtTransactionConfirmed")}
  if (status==="REJECTED"){return T("txtTransactionNotAccepted")}
  if ((status==="UNKNOWN")||(status==="UNAVAILABLE")){return T("txtTransactionStatusProgress")}
  return T("txtTransactionSubmitted")
}
function renderBroadcastTracking(record,response){
  if ((record==null)||($$$('#idBroadcastTracking')==null)){return}
  var status=response&&response.status?response.status:record.status
  if (transactionPresentation!=="sendSubmitted"){return record}
  var receipt=record.receipt
  if (isTransactionReceipt(receipt,record.coin,record.txid)){
    fillCompactTransaction("idBroadcast",record.coin,receipt.amountSats,receipt.address)
    renderPaymentReceipt(receipt,true)
  }
  var style=status==="REJECTED"?"error":(status==="CONFIRMED"?"confirmed":((status==="SUBMITTING")||(status==="UNKNOWN")||(status==="UNAVAILABLE")?"unknown":"ready"))
  setBroadcastOutcome(broadcastOutcomeText(status,response||record),style)
  var showReceipt=$$$('#idShowPaymentReceipt')
  showReceipt.classList.toggle('hidden',!isTransactionReceipt(receipt,record.coin,record.txid)||status==="SUBMITTING"||status==="REJECTED")
  return record
}
function parseBroadcastResponse(data,expectedTxid,kind,coin=stateCoin){
  if ((data==null)||(typeof data!=="object")||(typeof data.status!=="string")||(typeof data.technical!=="boolean")){
    throw new Error(T("txtBroadcastUnavailable",{reason:"INVALID_RESPONSE"}))
  }
  if ((typeof data.txid!=="string")||(data.txid!==expectedTxid)){throw new Error(T("txtBroadcastTxidMismatch"))}
  if (data.technical){return Object.freeze(Object.assign({},data))}
  if (data.coin!==getStateService(coin).responseCoin){throw new Error(T("txtBroadcastUnavailable",{reason:"INVALID_COIN"}))}
  var allowed=kind==="broadcast"?['ACCEPTED','KNOWN','REJECTED']:['MEMPOOL','CONFIRMED','UNKNOWN','REJECTED']
  if (!allowed.includes(data.status)){throw new Error(T("txtBroadcastUnavailable",{reason:"INVALID_STATUS"}))}
  if ((data.status==='ACCEPTED'||data.status==='KNOWN')&&((data.ok!==true)||(data.accepted!==true))){throw new Error(T("txtBroadcastUnavailable",{reason:"INVALID_ACCEPTANCE"}))}
  if ((data.status==='MEMPOOL'||data.status==='CONFIRMED'||data.status==='UNKNOWN')&&(data.ok!==true)){throw new Error(T("txtBroadcastUnavailable",{reason:"INVALID_STATUS_RESPONSE"}))}
  if ((data.status==='REJECTED')&&(data.ok!==false)){throw new Error(T("txtBroadcastUnavailable",{reason:"INVALID_REJECTION"}))}
  return Object.freeze(Object.assign({},data))
}
async function requestBroadcastService(payload,coin=stateCoin){
  var service=getStateService(coin)
  var controller=new AbortController()
  broadcastRequestController=controller
  var timeout=setTimeout(function(){controller.abort()},service.broadcastTimeout)
  var started=performance.now()
  try{
    var response=await fetch(service.url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(payload),
      cache:"no-store",
      signal:controller.signal
    })
    var data=await response.json()
    data.clientMs=Math.round(performance.now()-started)
    data.httpStatus=response.status
    return data
  }finally{
    clearTimeout(timeout)
    if (broadcastRequestController===controller){broadcastRequestController=undefined}
  }
}
function parseZeroConfirmationResponse(data,receipt,coin=stateCoin){
  var service=getStateService(coin)
  if ((data==null)||(typeof data!=="object")||(typeof data.ok!=="boolean")||(typeof data.technical!=="boolean")||(data.coin!==service.responseCoin)||(data.txid!==receipt.txid)||(data.address!==receipt.address)||(data.amountSats!==receipt.amountSats)){
    throw new Error("Invalid payment observation response")
  }
  var counts=['configured','available','seen','notSeen','confirmed','outputMismatch','unavailable']
  counts.forEach(function(key){if ((!Number.isSafeInteger(data[key]))||(data[key]<0)){throw new Error("Invalid payment observation counts")}})
  if ((data.configured<1)||(data.available+data.unavailable!==data.configured)||(data.seen+data.notSeen+data.confirmed+data.outputMismatch!==data.available)){
    throw new Error("Inconsistent payment observation counts")
  }
  if (!['UNCONFIRMED','NOT_SEEN','CONFIRMED','OUTPUT_MISMATCH','UNAVAILABLE'].includes(data.status)){throw new Error("Invalid payment observation status")}
  var validStatus=(data.status==="UNCONFIRMED")&&(data.ok===true)&&(!data.technical)&&(data.seen>0)&&(data.confirmed===0)&&(data.outputMismatch===0)
  validStatus=validStatus||((data.status==="NOT_SEEN")&&(data.ok===true)&&(!data.technical)&&(data.seen===0)&&(data.confirmed===0)&&(data.outputMismatch===0))
  validStatus=validStatus||((data.status==="CONFIRMED")&&(data.ok===true)&&(!data.technical)&&(data.confirmed>0)&&(data.outputMismatch===0))
  validStatus=validStatus||((data.status==="OUTPUT_MISMATCH")&&(data.ok===false)&&(!data.technical)&&(data.outputMismatch>0))
  validStatus=validStatus||((data.status==="UNAVAILABLE")&&(data.ok===false)&&(data.technical)&&(data.available===0))
  if (!validStatus){throw new Error("Inconsistent payment observation status")}
  return Object.freeze(Object.assign({},data))
}
function getZeroConfirmationObserverCount(coin=stateCoin){
  var service=getStateService(coin)
  if ((walletState.coin===coin)&&(walletState.snapshot!=null)&&Number.isSafeInteger(walletState.snapshot.zeroConfirmationObservers)&&(walletState.snapshot.zeroConfirmationObservers>=1)&&(walletState.snapshot.zeroConfirmationObservers<=service.maximumZeroConfirmationObservers)){
    return walletState.snapshot.zeroConfirmationObservers
  }
  return service.maximumZeroConfirmationObservers
}
function parseZeroConfirmationObserverResponse(data,receipt,observer,configured,coin=stateCoin){
  var service=getStateService(coin)
  if ((data==null)||(typeof data!=="object")||(typeof data.ok!=="boolean")||(typeof data.technical!=="boolean")||(data.coin!==service.responseCoin)||(data.txid!==receipt.txid)||(data.address!==receipt.address)||(data.amountSats!==receipt.amountSats)||(data.observer!==observer)||(data.queried!==1)||(data.configured!==configured)){
    throw new Error("Invalid payment observer response")
  }
  var counts=['available','seen','notSeen','confirmed','outputMismatch','unavailable']
  counts.forEach(function(key){if ((!Number.isSafeInteger(data[key]))||(data[key]<0)){throw new Error("Invalid payment observer counts")}})
  if ((data.configured<1)||(data.configured>service.maximumZeroConfirmationObservers)||(data.available+data.unavailable!==1)||(data.seen+data.notSeen+data.confirmed+data.outputMismatch!==data.available)){
    throw new Error("Inconsistent payment observer counts")
  }
  if (!['UNCONFIRMED','NOT_SEEN','CONFIRMED','OUTPUT_MISMATCH','UNAVAILABLE'].includes(data.status)){throw new Error("Invalid payment observer status")}
  var validStatus=(data.status==="UNCONFIRMED")&&(data.ok===true)&&(!data.technical)&&(data.seen===1)
  validStatus=validStatus||((data.status==="NOT_SEEN")&&(data.ok===true)&&(!data.technical)&&(data.notSeen===1))
  validStatus=validStatus||((data.status==="CONFIRMED")&&(data.ok===true)&&(!data.technical)&&(data.confirmed===1))
  validStatus=validStatus||((data.status==="OUTPUT_MISMATCH")&&(data.ok===false)&&(!data.technical)&&(data.outputMismatch===1))
  validStatus=validStatus||((data.status==="UNAVAILABLE")&&(data.ok===false)&&(data.technical)&&(data.unavailable===1))
  if (!validStatus){throw new Error("Inconsistent payment observer status")}
  return Object.freeze(Object.assign({},data))
}
function createZeroConfirmationAggregate(receipt,configured){
  return {ok:true,technical:false,status:"NOT_SEEN",txid:receipt.txid,address:receipt.address,amountSats:receipt.amountSats,configured:configured,completed:0,available:0,seen:0,notSeen:0,confirmed:0,outputMismatch:0,unavailable:0,observers:[]}
}
function mergeZeroConfirmationObserver(aggregate,response){
  if (aggregate.observers.includes(response.observer)){throw new Error("Duplicate payment observer response")}
  aggregate.observers.push(response.observer)
  aggregate.completed++
  ;['available','seen','notSeen','confirmed','outputMismatch','unavailable'].forEach(function(key){aggregate[key]+=response[key]})
  aggregate.technical=aggregate.available===0
  aggregate.ok=aggregate.outputMismatch===0
  if (aggregate.outputMismatch>0){aggregate.status="OUTPUT_MISMATCH";aggregate.ok=false}
  else if (aggregate.confirmed>0){aggregate.status="CONFIRMED"}
  else if (aggregate.seen>0){aggregate.status="UNCONFIRMED"}
  else if ((aggregate.completed===aggregate.configured)&&(aggregate.available===0)){aggregate.status="UNAVAILABLE";aggregate.ok=false}
  else {aggregate.status="NOT_SEEN"}
  return aggregate
}
function observerWitnessText(seen,configured){
  if (seen===1){
    return T(configured===1?"txtSingleObserverWitnessed":"txtOneOfObserversWitnessed",{seen:seen,configured:configured})
  }
  return T("txtObserversWitnessed",{seen:seen,configured:configured})
}
function renderZeroConfirmation(response,error="",retrying=false){
  var panel=$$$('#idReceiveZeroConfirmation')
  if (panel==null){return}
  panel.classList.remove('ready','confirmed','error')
  var title=$$$('#idZeroConfirmationTitle')
  if (error!==""){
    if (retrying){return}
    panel.classList.add('error')
    title.textContent=T("txtPaymentReceiptMismatch")
    $$$('#idZeroConfirmationDetail').classList.add('hidden')
    return
  }
  if (response.status==="UNCONFIRMED"){
    panel.classList.add('ready')
    title.textContent=observerWitnessText(response.seen,response.configured)
    if (currentPaymentReceiptHistoryStatus!=="SEEN"&&currentPaymentReceiptHistoryStatus!=="CONFIRMED"){
      currentPaymentReceiptHistoryStatus="SEEN"
      renderHistory().then(function(){peekHistoryDrawer()}).catch(function(error){console.error("Unable to render observed history:",error)})
    }
  }else if (response.status==="CONFIRMED"){
    panel.classList.add('confirmed')
    title.textContent=T("txtBlockchainConfirmationObserved")
    $$$('#idZeroConfirmationDetail').classList.add('hidden')
    if (currentPaymentReceiptHistoryStatus!=="CONFIRMED"){
      currentPaymentReceiptHistoryStatus="CONFIRMED"
      renderHistory().then(function(){peekHistoryDrawer()}).catch(function(error){console.error("Unable to render confirmed receipt:",error)})
    }
  }else if (response.status==="OUTPUT_MISMATCH"){
    panel.classList.add('error')
    title.textContent=T("txtPaymentReceiptMismatch")
    $$$('#idZeroConfirmationDetail').classList.add('hidden')
  }
}
function showReceiveObservation(receipt){
  selectStateCoin(stateCoin)
  hideReceiveQrOverlay()
  hidePaymentReceiptQrOverlay()
  clearConfirmedReceiptSyncTimer()
  currentPaymentReceipt=receipt
  currentPaymentReceiptHistoryStatus=undefined
  currentPaymentReceiptSeenAt=Date.now()
  $$$('#idObservedCoin').textContent=receipt.coin
  $$$('#idObservedAmount').textContent=formatSats(receipt.amountSats,stateCoin)
  $$$('#idZeroConfirmationTitle').textContent=T("txtPaymentReceiptScanned")
  $$$('#idZeroConfirmationDetail').textContent=T("txtTransactionStatusProgress")
  $$$('#idZeroConfirmationDetail').classList.remove('hidden')
  $$$('#idReceiveZeroConfirmation').className="payment-observation"
  $$$('#idTransactionKicker').textContent=T("txtTransaction")
  $$$('#idTransactionTitle').textContent=T("txtReceiveCoin",{coin:supportedCoins[stateCoin].name})
  setTransactionPresentation("receiveObservation")
  renderHistory().catch(function(error){console.error("Unable to reset observed history:",error)})
  wakeState("receipt-observation",true)
  return receipt
}
function clearZeroConfirmationTimer(){
  clearTimeout(zeroConfirmationTimer)
  zeroConfirmationTimer=undefined
}
function cancelZeroConfirmationRequest(){
  clearZeroConfirmationTimer()
  zeroConfirmationRequestId++
  var controller=zeroConfirmationController
  zeroConfirmationController=undefined
  if (controller!=null){controller.abort()}
  return zeroConfirmationRequestId
}
function clearConfirmedReceiptSyncTimer(){
  clearTimeout(confirmedReceiptSyncTimer)
  confirmedReceiptSyncTimer=undefined
}
function receiptOutputInSnapshot(snapshot,receipt){
  if ((snapshot==null)||(!Array.isArray(snapshot.utxos))||(receipt==null)){return false}
  return snapshot.utxos.some(function(utxo){
    return (utxo.txid===receipt.txid)&&(utxo.address===receipt.address)&&(utxo.valueSats===receipt.amountSats)
  })
}
function reconcileCurrentPaymentReceipt(snapshot,coin=stateCoin){
  if ((coin!==stateCoin)||(!isZeroConfirmationActive(currentPaymentReceipt))||(!receiptOutputInSnapshot(snapshot,currentPaymentReceipt))){return false}
  cancelZeroConfirmationRequest()
  clearConfirmedReceiptSyncTimer()
  renderZeroConfirmation({status:"CONFIRMED"})
  return true
}
function isZeroConfirmationActive(receipt=currentPaymentReceipt){
  if ((receipt==null)||(currentPaymentReceipt==null)||(receipt.txid!==currentPaymentReceipt.txid)){return false}
  var transactionPanel=$$$('#panel-transaction')
  var receiveView=$$$('#idReceiveView')
  return (transactionPanel!=null)&&(!transactionPanel.classList.contains('hidden'))&&(receiveView!=null)&&(!receiveView.classList.contains('hidden'))
}
function scheduleZeroConfirmation(receipt=currentPaymentReceipt,coin=stateCoin){
  clearZeroConfirmationTimer()
  if (!isZeroConfirmationActive(receipt)){return false}
  zeroConfirmationTimer=setTimeout(function(){
    zeroConfirmationTimer=undefined
    requestZeroConfirmation(receipt,coin)
  },zeroConfirmationInterval)
  return true
}
function scheduleConfirmedReceiptSync(receipt=currentPaymentReceipt,coin=stateCoin){
  clearConfirmedReceiptSyncTimer()
  if (!isZeroConfirmationActive(receipt)){return false}
  confirmedReceiptSyncTimer=setTimeout(function(){
    confirmedReceiptSyncTimer=undefined
    syncConfirmedReceiptState(receipt,coin)
  },confirmedReceiptSyncInterval)
  return true
}
async function syncConfirmedReceiptState(receipt=currentPaymentReceipt,coin=stateCoin){
  clearConfirmedReceiptSyncTimer()
  if (!isZeroConfirmationActive(receipt)){return false}
  if (receiptOutputInSnapshot(walletState.snapshot,receipt)){
    reconcileCurrentPaymentReceipt(walletState.snapshot,coin)
    scheduleStateRefresh()
    return walletState.snapshot
  }
  var snapshot=await refreshState("receipt-confirmed",coin)
  if (!isZeroConfirmationActive(receipt)){return false}
  if (receiptOutputInSnapshot(snapshot,receipt)){
    reconcileCurrentPaymentReceipt(snapshot,coin)
    scheduleStateRefresh()
    return snapshot
  }
  scheduleConfirmedReceiptSync(receipt,coin)
  return false
}
function isZeroConfirmationRequestCurrent(requestId,receipt){
  return (requestId===zeroConfirmationRequestId)&&isZeroConfirmationActive(receipt)
}
async function requestZeroConfirmation(receipt=currentPaymentReceipt,coin=stateCoin){
  if (!isZeroConfirmationActive(receipt)){return false}
  clearZeroConfirmationTimer()
  var requestId=++zeroConfirmationRequestId
  var previousController=zeroConfirmationController
  if (previousController!=null){previousController.abort()}
  var service=getStateService(coin)
  var controller=new AbortController()
  zeroConfirmationController=controller
  var timeout=setTimeout(function(){controller.abort()},service.broadcastTimeout)
  var configured=getZeroConfirmationObserverCount(coin)
  var aggregate=createZeroConfirmationAggregate(receipt,configured)
  var terminal=false
  try{
    var observers=Array.from({length:configured},function(_,observer){return observer})
    await Promise.allSettled(observers.map(async function(observer){
      var response=await fetch(service.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({operation:"zeroConfirmation",observer:observer,txid:receipt.txid,address:receipt.address,amountSats:receipt.amountSats}),cache:"no-store",signal:controller.signal})
      var data=await response.json()
      var partial=parseZeroConfirmationObserverResponse(data,receipt,observer,configured,coin)
      if ((!isZeroConfirmationRequestCurrent(requestId,receipt))||terminal){return false}
      mergeZeroConfirmationObserver(aggregate,partial)
      if (['UNCONFIRMED','CONFIRMED','OUTPUT_MISMATCH'].includes(aggregate.status)){renderZeroConfirmation(aggregate)}
      if (aggregate.status==="CONFIRMED"){
        terminal=true
        wakeState("receipt-confirmed",false)
        syncConfirmedReceiptState(receipt,coin)
      }else if (aggregate.status==="OUTPUT_MISMATCH"){
        terminal=true
      }
      return partial
    }))
    if (!isZeroConfirmationRequestCurrent(requestId,receipt)){return false}
    return aggregate
  }finally{
    clearTimeout(timeout)
    if (zeroConfirmationController===controller){zeroConfirmationController=undefined}
    if (isZeroConfirmationRequestCurrent(requestId,receipt)&&(!terminal)){
      scheduleZeroConfirmation(receipt,coin)
    }
  }
}
function showReceiveReceiptScanner(){
  if (currentReceiveRequest==null){return false}
  scanPurpose="receipt"
  QR=""
  dial("qrreader",0,0)
  scan()
  return true
}
function showUniversalScanner(){
  scanPurpose="universal"
  QR=""
  dial("qrreader",0,0)
  scan()
}
function createPendingBroadcast(result,status="SUBMITTING",coin=stateCoin){
  var mnemonicString=localStorage.getItem("bip39")
  var recipient=result.outputs.find(function(output){return output.role==="recipient"})
  if (recipient==null){throw new Error("Recipient output unavailable")}
  return {
    coin:coin,
    walletId:historyWalletId(),
    fingerprint:getWalletFingerprint(mnemonicString,coin),
    txid:result.txid,
    receipt:createTransactionReceipt(result,coin),
    receiptVout:recipient.index,
    inputs:result.inputs.map(function(input){return {txid:input.txid,vout:input.vout}}),
    acceptedAt:Date.now(),
    status:status,
    broadcastTiming:null,
    statusTiming:null
  }
}
function showBroadcastConfirmation(){
  if (!requireWalletSpendUnlocked()){return false}
  try{
    if (localSignedTransaction==null){throw new Error(T("txtNoSignedTransaction"))}
    assertLocalPlanCurrent(localSendPlan,stateCoin)
    var inspected=inspectSignedTransaction(localSendPlan,localSignedTransaction.rawHex,stateCoin)
    if (inspected.txid!==localSignedTransaction.txid){throw new Error(T("txtBroadcastTxidMismatch"))}
    fillCompactTransaction("idBroadcastConfirm",stateCoin,localSendPlan.amountSats,localSendPlan.destination)
    setTransactionPresentation("sendConfirm")
    return true
  }catch(error){
    setSendStatus(error.message,"error")
    return false
  }
}
async function broadcastSignedTransaction(){
  if (!requireWalletSpendUnlocked()){return false}
  if (broadcastRequesting){return false}
  if (localSignedTransaction==null){setSendStatus(T("txtNoSignedTransaction"),"error");return false}
  var result=localSignedTransaction
  var plan=localSendPlan
  try{
    assertLocalPlanCurrent(plan,stateCoin)
    var inspected=inspectSignedTransaction(plan,result.rawHex,stateCoin)
    if (inspected.txid!==result.txid){throw new Error(T("txtBroadcastTxidMismatch"))}
  }catch(error){setSendStatus(error.message,"error");return false}

  broadcastRequesting=true
  var button=$$$('#idBroadcastTransaction')
  button.disabled=true
  var record=createPendingBroadcast(result)
  pendingBroadcast=record
  persistPendingBroadcast(record)
  renderHistory().then(function(){peekHistoryDrawer()}).catch(function(error){console.error("Unable to render pending history:",error)})
  updateBalanceDisplay(stateCoin)
  setTransactionPresentation("sendSubmitted")
  renderBroadcastTracking(record)
  try{
    var data=await requestBroadcastService({operation:"broadcast",txid:result.txid,rawTransaction:result.rawHex},stateCoin)
    record.broadcastTiming=compactTiming(data)
    var response=parseBroadcastResponse(data,result.txid,"broadcast",result.coin)
    if (response.technical){throw new Error(response.error||"BROADCAST_UNAVAILABLE")}
    if (response.status==="REJECTED"){
      if (response.priorSubmissionUncertain===true){
        record.status="UNKNOWN"
        persistPendingBroadcast(record)
        if (pendingBroadcast===record){
          renderBroadcastTracking(record,Object.assign({},response,{status:"UNKNOWN"}))
          invalidateWalletState(T("txtPendingTransaction"),stateCoin)
          renderPaymentReceipt(record.receipt,true)
          showPaymentReceiptQrOverlay()
          scheduleBroadcastStatus()
        }
        return false
      }
      removePendingBroadcast(record)
      if (pendingBroadcast===record){pendingBroadcast=undefined}
      renderHistory().catch(function(error){console.error("Unable to remove rejected history:",error)})
      updateBalanceDisplay(stateCoin)
      renderBroadcastTracking(Object.assign({},record,{status:"REJECTED"}),response)
      return false
    }
    record.status=response.status
    if (response.status==="CONFIRMED"){
      record.blockHeight=response.blockHeight
      record.confirmations=response.confirmations
    }
    persistPendingBroadcast(record)
    if (record.status==="CONFIRMED"){await recordSentHistory(record,"CONFIRMED")}
    renderHistory().catch(function(error){console.error("Unable to update pending history:",error)})
    if (pendingBroadcast===record){
      renderBroadcastTracking(record,response)
      invalidateWalletState(T("txtPendingTransaction"),stateCoin)
      renderPaymentReceipt(record.receipt,true)
      showPaymentReceiptQrOverlay()
      scheduleBroadcastStatus()
    }
    return response
  }catch(error){
    record.status="UNKNOWN"
    persistPendingBroadcast(record)
    renderHistory().catch(function(historyError){console.error("Unable to render uncertain history:",historyError)})
    if (pendingBroadcast===record){
      renderBroadcastTracking(record,{status:"UNAVAILABLE",error:error.message})
      invalidateWalletState(T("txtPendingTransaction"),stateCoin)
      renderPaymentReceipt(record.receipt,true)
      showPaymentReceiptQrOverlay()
      scheduleBroadcastStatus()
    }
    return false
  }finally{
    broadcastRequesting=false
    button.disabled=false
  }
}
function scheduleBroadcastStatus(delay){
  if (pendingBroadcast==null){return}
  if ((broadcastStatusTimer!=null)&&(!Number.isSafeInteger(delay))){return}
  clearBroadcastStatusTimer()
  var interval=Number.isSafeInteger(delay)?delay:getStateService(pendingBroadcast.coin).broadcastStatusInterval
  broadcastStatusTimer=setTimeout(function(){
    broadcastStatusTimer=null
    refreshBroadcastStatus("scheduled")
  },interval)
}
async function refreshBroadcastStatus(reason="manual"){
  if (broadcastStatusRequesting||pendingBroadcast==null){return false}
  var record=pendingBroadcast
  broadcastStatusRequesting=true
  try{
    var data=await requestBroadcastService({operation:"transactionStatus",txid:record.txid},record.coin)
    record.statusTiming=compactTiming(data)
    var response=parseBroadcastResponse(data,record.txid,"status",record.coin)
    if (response.technical){throw new Error(response.error||"TRANSACTION_STATUS_UNAVAILABLE")}
    record.status=response.status
    if (response.status==="REJECTED"){
      removePendingBroadcast(record)
      if (pendingBroadcast===record){pendingBroadcast=undefined}
      clearBroadcastStatusTimer()
      renderHistory().catch(function(error){console.error("Unable to remove rejected history:",error)})
      renderBroadcastTracking(Object.assign({},record,{status:"REJECTED"}),response)
      return response
    }
    if (response.status==="CONFIRMED"){
      record.blockHeight=response.blockHeight
      record.confirmations=response.confirmations
    }
    persistPendingBroadcast(record)
    if (record.status==="CONFIRMED"){await recordSentHistory(record,"CONFIRMED")}
    renderHistory().catch(function(error){console.error("Unable to update pending history:",error)})
    if (pendingBroadcast!==record){return response}
    renderBroadcastTracking(record,response)
    if (response.status==="CONFIRMED"){
      await refreshState("broadcast-confirmed",record.coin)
    }
    return response
  }catch(error){
    persistPendingBroadcast(record)
    return false
  }finally{
    broadcastStatusRequesting=false
    if (pendingBroadcast===record){scheduleBroadcastStatus()}
  }
}
function reconcilePendingBroadcast(snapshot){
  if (pendingBroadcast==null){return}
  if ((pendingBroadcast.status==="CONFIRMED")&&(!pendingInputsPresent(snapshot,pendingBroadcast))){
    var settled=pendingBroadcast
    recordSentHistory(settled,"CONFIRMED").then(function(){
      if (pendingBroadcast!==settled){return}
      removePendingBroadcast(settled)
      pendingBroadcast=undefined
      clearBroadcastStatusTimer()
      renderHistory().catch(function(error){console.error("Unable to settle visible history:",error)})
      renderBroadcastTracking(settled,{status:"CONFIRMED",blockHeight:settled.blockHeight==null?snapshot.height:settled.blockHeight,confirmations:settled.confirmations==null?1:settled.confirmations})
    }).catch(function(error){console.error("Unable to settle sent history:",error)})
    return
  }
  scheduleBroadcastStatus()
}
async function prepareLocalSendPlan(){
  if (!requireWalletSpendUnlocked()){return false}
  if (sendPlanning){return false}
  sendPlanning=true
  clearLocalSendPlan()
  setSendStatus(T("txtRefreshingInputs"),"loading")
  try{
    var snapshot=await requireFreshState()
    if ($$$('#idSendView').classList.contains('hidden')){return false}
    var plan=createLocalSendPlan(snapshot,$$$('#idSendTo').value,$$$('#inputSupported').value,stateCoin)
    localSendPlan=plan
    renderLocalSendPlan(plan)
    return plan
  }catch(error){
    setSendStatus(error.message,"error")
    return false
  }finally{
    sendPlanning=false
  }
}
async function reviewSendTransaction(){
  var plan=await prepareLocalSendPlan()
  if ((plan===false)||isExpertMode()){return plan}
  var result=prepareSignedTransaction()
  if (result===false){return false}
  return showBroadcastConfirmation()
}
function verifyLocalSendPlanning(coin=stateCoin){
  var service=getStateService(coin)
  var units=service.unitsPerCoin
  var addresses=deriveWalletAddresses(service.testMnemonic,coin,service.initialReceiveCount,"")
  var destination=deriveCoinAddress(service.testMnemonic,11,coin,"")
  var makeUtxo=function(number,value,index){return {index:index,address:addresses[index],txid:String(number).padStart(64,"0"),vout:0,valueSats:value,height:1,confirmations:1,scriptPubKey:""}}
  var utxos=[makeUtxo(1,3*units,1),makeUtxo(2,3*units/2,2),makeUtxo(3,units/2,3)]
  var snapshot={id:"0".repeat(32),height:1,blockHash:"1".repeat(64),addresses:addresses.map(function(address,index){return {index:index,address:address,utxos:[]}}),utxos:utxos}
  var plan=createLocalSendPlan(snapshot,destination,"3.5",coin)
  if ((!Object.isFrozen(plan))||(plan.inputs.length!==2)||(plan.inputTotalSats!==9*units/2)||(plan.changeSats!==units-service.minimumFeeSats)||(plan.changeIndex!==service.changeIndex)){
    throw new Error("Local send plan selection test failed")
  }
  var failures=0
  try{createLocalSendPlan(snapshot,addresses[1],"1",coin)}catch(error){if (error.code==="SELF_ADDRESS"){failures++}}
  try{createLocalSendPlan(snapshot,destination,"1."+"0".repeat(service.decimals)+"1",coin)}catch(error){if (error.code==="INVALID_AMOUNT"){failures++}}
  if (failures!==2){throw new Error("Local send plan rejection test failed")}
  var small=Array.from({length:7},function(_,index){return makeUtxo(index+10,2*units/100,(index%service.initialReceiveCount)+1)})
  var tiered=createLocalSendPlan(Object.assign({},snapshot,{utxos:small}),destination,"0.138",coin)
  if ((tiered.inputs.length!==7)||(tiered.feeTiers!==2)||(tiered.feeSats!==2*service.minimumFeeSats)||(tiered.changeSats!==0)){
    throw new Error("Local tiered-fee selection test failed")
  }
  console_log(service.responseCoin+" send plan test passed: full UTXO selection, tiered fee, change index 0")
}
function verifyLocalTransactionBuilding(coin=stateCoin){
  var service=getStateService(coin)
  var units=service.unitsPerCoin
  var network=bitcoin.networks[networks[coin].index]
  var addresses=deriveWalletAddresses(service.testMnemonic,coin,service.initialReceiveCount,"")
  var destination=deriveCoinAddress(service.testMnemonic,11,coin,"")
  var makeUtxo=function(txid,vout,value,index){
    return {
      index:index,
      address:addresses[index],
      txid:txid,
      vout:vout,
      valueSats:value,
      height:1,
      confirmations:1,
      scriptPubKey:bitcoin.address.toOutputScript(addresses[index],network).toString("hex")
    }
  }
  var snapshot={
    id:"0".repeat(32),
    height:1,
    blockHash:"1".repeat(64),
    addresses:addresses.map(function(address,index){return {index:index,address:address,utxos:[]}}),
    utxos:[
      makeUtxo("1".repeat(64),0,3*units,1),
      makeUtxo("2".repeat(64),1,3*units/2,2),
      makeUtxo("3".repeat(64),2,units/2,3)
    ]
  }
  var transactionTime=service.testTransactionTime==undefined?null:service.testTransactionTime
  var plan=createLocalSendPlan(snapshot,destination,"3.5",coin)
  var result=buildSignedTransaction(plan,service.testMnemonic,coin,"",transactionTime)
  if ((result.txid!==service.testSignedTxid)||(result.byteLength!==service.testSignedByteLength)||(result.inputs.length!==2)||(result.outputs.length!==2)||(!result.signaturesVerified)||(result.feeSats!==service.minimumFeeSats)){
    throw new Error("Local transaction signing test failed")
  }
  var zeroChangeAmount=formatSats(9*units/2-service.minimumFeeSats,coin)
  var zeroChangePlan=createLocalSendPlan(snapshot,destination,zeroChangeAmount,coin)
  var zeroChangeResult=buildSignedTransaction(zeroChangePlan,service.testMnemonic,coin,"",transactionTime)
  if ((zeroChangePlan.changeSats!==0)||(zeroChangeResult.changeSats!==0)||(zeroChangeResult.inputs.length!==2)||(zeroChangeResult.outputs.length!==1)||(zeroChangeResult.outputs[0].role!=="recipient")||(zeroChangeResult.feeSats!==service.minimumFeeSats)){
    throw new Error("Local zero-change transaction test failed")
  }
  var tieredUtxos=Array.from({length:7},function(_,index){
    return makeUtxo(String(index+10).padStart(64,"0"),index,2*units/100,(index%service.initialReceiveCount)+1)
  })
  var tieredSnapshot=Object.assign({},snapshot,{utxos:tieredUtxos})
  var tieredPlan=createLocalSendPlan(tieredSnapshot,destination,"0.138",coin)
  var tieredResult=buildSignedTransaction(tieredPlan,service.testMnemonic,coin,"",transactionTime)
  if ((tieredResult.inputs.length!==7)||(tieredResult.outputs.length!==1)||(tieredResult.feeSats!==2*service.minimumFeeSats)||(!tieredResult.signaturesVerified)){
    throw new Error("Local tiered transaction test failed")
  }
  console_log(service.responseCoin+" transaction test passed: 2 signatures, txid "+service.testSignedTxid)
  console_log("Local zero-change transaction test passed: change output omitted")
  console_log("Local tiered transaction test passed: 7 signatures, 2 fee tiers")
}
function verifyBroadcastParsing(coin=stateCoin){
  var service=getStateService(coin)
  var txid="b".repeat(64)
  var accepted=parseBroadcastResponse({
    ok:true,
    coin:service.responseCoin,
    technical:false,
    status:"ACCEPTED",
    accepted:true,
    txid:txid,
    coreMs:1,
    rotMs:2,
    rotRoundTripMs:3,
    relayMs:4,
    attempts:1
  },txid,"broadcast",coin)
  if ((!Object.isFrozen(accepted))||(accepted.status!=="ACCEPTED")){throw new Error("Broadcast acceptance parser test failed")}
  var rejected=parseBroadcastResponse({ok:false,coin:service.responseCoin,technical:false,status:"REJECTED",txid:txid,rpcCode:-26,rpcMessage:"test rejection"},txid,"broadcast",coin)
  if ((rejected.status!=="REJECTED")||(rejected.rpcCode!==-26)){throw new Error("Broadcast rejection parser test failed")}
  var mismatched=false
  try{parseBroadcastResponse({ok:true,coin:service.responseCoin,technical:false,status:"ACCEPTED",accepted:true,txid:"c".repeat(64)},txid,"broadcast",coin)}catch(error){mismatched=true}
  if (!mismatched){throw new Error("Broadcast txid mismatch test failed")}
  var receipt={type:"transactionReceipt",coin:service.responseCoin,txid:txid,address:service.testAddresses[1],amountSats:service.unitsPerCoin/20}
  if (!isTransactionReceipt(receipt,coin,txid)){throw new Error("Payment receipt validation test failed")}
  var compactReceipt=encodeTransactionReceipt(receipt,coin)
  var decodedCompactReceipt=decodeTransactionReceipt(compactReceipt,coin)
  var decodedLegacyReceipt=decodeTransactionReceipt(JSON.stringify(receipt),coin)
  if ((compactReceipt.length>=JSON.stringify(receipt).length)||(decodedCompactReceipt.txid!==receipt.txid)||(decodedCompactReceipt.address!==receipt.address)||(decodedCompactReceipt.amountSats!==receipt.amountSats)||(decodedLegacyReceipt.txid!==receipt.txid)){
    throw new Error("Payment receipt encoding test failed")
  }
  if ((findWalletAddressIndex(service.testMnemonic,receipt.address,coin,"")!==1)||(findWalletAddressIndex(service.testMnemonic,deriveCoinAddress(service.testMnemonic,service.maximumReceiveIndex+1,coin,""),coin,"")!==-1)){
    throw new Error("Payment receipt wallet-ownership test failed")
  }
  var configured=service.maximumZeroConfirmationObservers
  var observation=parseZeroConfirmationResponse({ok:true,coin:service.responseCoin,technical:false,status:"UNCONFIRMED",txid:txid,address:receipt.address,amountSats:receipt.amountSats,configured:configured,available:configured,seen:configured,notSeen:0,confirmed:0,outputMismatch:0,unavailable:0},receipt,coin)
  if ((observation.seen!==configured)||(observation.unavailable!==0)){throw new Error("Payment observation parser test failed")}
  console_log("Broadcast parser test passed: accepted, rejected, txid mismatch")
  console_log(service.responseCoin+" payment receipt test passed: compact and legacy encoding, wallet ownership, exact output, "+configured+" of "+configured+" observers")
}
function verifyStateParser(coin=stateCoin){
  var service=getStateService(coin)
  var addresses=deriveWalletAddresses(service.testMnemonic,coin,service.initialReceiveCount,"")
  var network=bitcoin.networks[networks[coin].index]
  var response={
    ok:true,
    id:"0".repeat(32),
    coin:service.responseCoin,
    mode:"full",
    height:1,
    blockHash:"0".repeat(64),
    zeroConfirmationObservers:service.maximumZeroConfirmationObservers,
    balance:0,
    addresses:addresses.map(function(address){return {address:address,lastChangeHeight:null,balance:0,utxos:[]}})
  }
  response.balance=service.unitsPerCoin
  response.addresses[0].balance=service.unitsPerCoin
  response.addresses[0].lastChangeHeight=1
  response.addresses[0].utxos=[{
    txid:"1".repeat(64),
    vout:0,
    value:service.unitsPerCoin,
    height:1,
    confirmations:1,
    scriptPubKey:bitcoin.address.toOutputScript(addresses[0],network).toString('hex')
  }]
  var snapshot=freezeStateSnapshot(parseStateResponse(response,addresses,null,coin))
  if ((snapshot.balanceSats!==service.unitsPerCoin)||(snapshot.addresses.length!==addresses.length)||(snapshot.utxos.length!==1)||(snapshot.utxos[0].index!==0)||(!Object.isFrozen(snapshot))){
    throw new Error("State parser test failed")
  }
  var request=buildStateRequest(addresses,snapshot)
  if ((request.height!==1)||(request.lastChangeHeights.length!==addresses.length)||(request.lastChangeHeights[0]!==1)||(request.lastChangeHeights[1]!==null)){
    throw new Error("State delta request test failed")
  }
  var unchanged=freezeStateSnapshot(parseStateResponse({
    ok:true,
    id:"2".repeat(32),
    coin:service.responseCoin,
    mode:"delta",
    height:2,
    blockHash:"2".repeat(64),
    zeroConfirmationObservers:service.maximumZeroConfirmationObservers,
    addresses:[]
  },addresses,snapshot,coin))
  if ((unchanged.balanceSats!==service.unitsPerCoin)||(unchanged.utxos.length!==1)||(unchanged.utxos[0].confirmations!==2)){
    throw new Error("Unchanged state delta test failed")
  }
  var changed=freezeStateSnapshot(parseStateResponse({
    ok:true,
    id:"3".repeat(32),
    coin:service.responseCoin,
    mode:"delta",
    height:2,
    blockHash:"2".repeat(64),
    zeroConfirmationObservers:service.maximumZeroConfirmationObservers,
    addresses:[{address:addresses[0],lastChangeHeight:2,balance:0,utxos:[]}]
  },addresses,snapshot,coin))
  if ((changed.balanceSats!==0)||(changed.utxos.length!==0)||(changed.addresses[0].lastChangeHeight!==2)){
    throw new Error("Changed state delta test failed")
  }
  var rejected=false
  response.balance=service.unitsPerCoin+1
  try{parseStateResponse(response,addresses,null,coin)}catch(error){rejected=true}
  if (!rejected){throw new Error("Inconsistent state test failed")}
  console_log(service.responseCoin+" state parser test passed: full and delta, "+addresses.length+" addresses")
}
function buildPaymentUri(address,amount,coin=stateCoin){
  var paymentUri=getStateService(coin).uriScheme+address
  var receiveAmount=normalizePaymentAmount(amount)
  if (receiveAmount!=""){paymentUri+="?amount="+encodeURIComponent(receiveAmount)}
  return paymentUri
}
function getReceiveRequest(mnemonicString,amount,coin=stateCoin,index=null,passphrase=null){
  if (index==null){index=getStateService(coin).receiveIndex}
  var address=deriveCoinAddress(mnemonicString,index,coin,passphrase)
  var receiveAmount=normalizePaymentAmount(amount)
  return {coin:coin,index:index,address:address,amount:receiveAmount,uri:buildPaymentUri(address,receiveAmount,coin)}
}
function beginReceiveRequest(coin=stateCoin){
  var mnemonicString=localStorage.getItem("bip39")
  var selection=selectReceiveAddressIndex(walletState.coin===coin?walletState.snapshot:null,coin)
  if (selection.horizonExpanded){resetWalletState("receive-horizon-expanded",coin)}
  currentReceiveRequest=getReceiveRequest(mnemonicString,$$$('#inputSupported').value,coin,selection.index)
  return currentReceiveRequest
}
function selectStateCoin(coin=stateCoin){
  var supportedCombo=$$$('#comboSupported')
  if (supportedCombo.value!=coin){
    supportedCombo.value=coin
    combos["Supported"]['active']=coin
    localStorage.setItem("combos",JSON.stringify(combos))
    $$$("#idPaymentIcon").src="img/"+supportedCoins[coin].coin+".png"
    reCalc($$$("#inputSupported"),false)
    combos["Supported"]['old']=coin
  }
  updateCoinPresentation(coin)
}
function updateReceiveTitle(){
  var coin=currentReceiveRequest==null?stateCoin:currentReceiveRequest.coin
  var title=T("txtReceiveCoin",{coin:supportedCoins[coin].name})
  try{
    var amountSats=parseCoinAmount($$$('#inputSupported').value,coin)
    title=T("txtReceiveAmountCoin",{amount:formatSats(amountSats,coin),coin:supportedCoins[coin].name})
  }catch(error){}
  $$$('#idTransactionTitle').textContent=title
  return title
}
function updateReceiveView(){
  if (transactionPresentation!=="receiveRequest"){return false}
  var transactionPanel=$$$('#panel-transaction')
  var receiveView=$$$('#idReceiveView')
  if ((transactionPanel==null)||transactionPanel.classList.contains('hidden')||(receiveView==null)||receiveView.classList.contains('hidden')){return false}
  if (currentReceiveRequest==undefined){beginReceiveRequest(stateCoin)}
  currentReceiveRequest=getReceiveRequest(localStorage.getItem("bip39"),$$$('#inputSupported').value,stateCoin,currentReceiveRequest.index)
  updateReceiveTitle()
  $$$('#idReceiveAddressMain').textContent=currentReceiveRequest.address
  $$$('#idReceiveUriMain').textContent=currentReceiveRequest.uri
  var qrPanel=$$$('#idReceiveQrMain')
  qrPanel.innerHTML=""
  var qrcode=new QRCode("idReceiveQrMain")
  qrcode.makeCode(currentReceiveRequest.uri)
  paymentMail=currentReceiveRequest.uri
  var overlay=$$$('#idReceiveQrOverlay')
  if ((overlay!=null)&&(!overlay.classList.contains('hidden'))){renderReceiveQrOverlay()}
  return currentReceiveRequest
}
function renderReceiveQrOverlay(){
  if (currentReceiveRequest==null){return false}
  var panel=$$$('#idReceiveQrLarge')
  var address=$$$('#idReceiveQrLargeAddress')
  var amount=$$$('#idReceiveQrLargeAmount')
  if ((panel==null)||(address==null)||(amount==null)){return false}
  var size=Math.max(220,Math.floor(Math.min(window.innerWidth*0.92,window.innerHeight*0.72,640)))
  panel.innerHTML=""
  var qrcode=new QRCode("idReceiveQrLarge",{width:size,height:size})
  qrcode.makeCode(currentReceiveRequest.uri)
  address.textContent=currentReceiveRequest.address
  var ticker=getStateService(currentReceiveRequest.coin).responseCoin
  amount.textContent=currentReceiveRequest.amount===""?"— "+ticker:currentReceiveRequest.amount+" "+ticker
  return true
}
function showReceiveQrOverlay(){
  var overlay=$$$('#idReceiveQrOverlay')
  if ((overlay==null)||(currentReceiveRequest==null)||(!renderReceiveQrOverlay())){return false}
  overlay.classList.remove('hidden')
  return true
}
function hideReceiveQrOverlay(){
  var overlay=$$$('#idReceiveQrOverlay')
  if (overlay!=null){overlay.classList.add('hidden')}
  return true
}
function renderPaymentReceiptQrOverlay(){
  if (!isTransactionReceipt(currentSenderPaymentReceipt,stateCoin)){return false}
  var panel=$$$('#idPaymentReceiptQrLarge')
  var summary=$$$('#idPaymentReceiptQrSummary')
  if ((panel==null)||(summary==null)){return false}
  var encoded=encodeTransactionReceipt(currentSenderPaymentReceipt,stateCoin)
  var size=Math.max(220,Math.floor(Math.min(window.innerWidth*0.92,window.innerHeight*0.56,620)))
  panel.innerHTML=""
  var qrcode=new QRCode("idPaymentReceiptQrLarge",{width:size,height:size,correctLevel:QRCode.CorrectLevel.M})
  qrcode.makeCode(encoded)
  summary.textContent=T("txtPaymentConfirmationSummary",{amount:formatSats(currentSenderPaymentReceipt.amountSats,stateCoin),coin:currentSenderPaymentReceipt.coin,address:currentSenderPaymentReceipt.address})
  return true
}
function showPaymentReceiptQrOverlay(){
  var overlay=$$$('#idPaymentReceiptQrOverlay')
  if ((overlay==null)||(!renderPaymentReceiptQrOverlay())){return false}
  overlay.classList.remove('hidden')
  return true
}
function hidePaymentReceiptQrOverlay(){
  var overlay=$$$('#idPaymentReceiptQrOverlay')
  if (overlay!=null){overlay.classList.add('hidden')}
  return true
}
function scheduleReceiveUpdate(){
  clearTimeout(receiveUpdateTimer)
  receiveUpdateTimer=setTimeout(updateReceiveView,1000)
}
function showReceiveView(){
  selectStateCoin(stateCoin)
  hideReceiveQrOverlay()
  hidePaymentReceiptQrOverlay()
  cancelZeroConfirmationRequest()
  clearConfirmedReceiptSyncTimer()
  currentReceiveRequest=undefined
  currentPaymentReceipt=undefined
  currentPaymentReceiptHistoryStatus=undefined
  currentPaymentReceiptSeenAt=undefined
  clearAutomaticCalculatorBalance()
  beginReceiveRequest(stateCoin)
  wakeState("receive",true)
  $$$('#idTransactionKicker').textContent=T("txtRequest")
  $$$('#idTransactionTitle').textContent=T("txtReceiveCoin",{coin:supportedCoins[stateCoin].name})
  setTransactionPresentation("receiveRequest")
  renderHistory().catch(function(error){console.error("Unable to reset observed history:",error)})
  updateReceiveView()
}
function showSendView(){
  if (!requireWalletSpendUnlocked()){return false}
  selectStateCoin(stateCoin)
  hideReceiveQrOverlay()
  cancelZeroConfirmationRequest()
  clearConfirmedReceiptSyncTimer()
  currentPaymentReceipt=undefined
  currentPaymentReceiptHistoryStatus=undefined
  currentPaymentReceiptSeenAt=undefined
  wakeState("send",true)
  clearTimeout(receiveUpdateTimer)
  $$$('#idTransactionKicker').textContent=T("txtTransaction")
  resetSendForm()
  setTransactionPresentation("sendEdit")
  updateSendTitle()
  renderHistory().catch(function(error){console.error("Unable to reset observed history:",error)})
  return true
}
function applyScannedSendRequest(value){
  if (!requireWalletSpendUnlocked()){return false}
  var request=parsePaymentRequest(value,stateCoin)
  var field=$$$('#idSendTo')
  field.value=request.address
  field.readOnly=false
  if (request.amount!==""){
    $$$('#inputSupported').value=request.amount
    reCalc($$$('#inputSupported'),true)
  }
  clearLocalSendPlan(T("txtScannedDestinationAccepted"))
  return request
}
function showSendScanner(){
  scanPurpose="send"
  QR=""
  dial("qrreader",0,0)
  scan()
}
function closeTransactionView(){
  clearTimeout(receiveUpdateTimer)
  hideReceiveQrOverlay()
  hidePaymentReceiptQrOverlay()
  cancelZeroConfirmationRequest()
  clearConfirmedReceiptSyncTimer()
  currentReceiveRequest=undefined
  currentPaymentReceipt=undefined
  currentPaymentReceiptHistoryStatus=undefined
  currentPaymentReceiptSeenAt=undefined
  clearLocalSendPlan()
  setTransactionPresentation("closed")
  syncBalanceToCalculator(stateCoin,true)
  renderHistory().catch(function(error){console.error("Unable to close observed history:",error)})
  wakeState("transaction-close",true)
}
function shareReceiveRequest(){
  var request=updateReceiveView()
  if (request===false){return}
  var title=T("txtReceiveCoin",{coin:supportedCoins[request.coin].name})
  if (navigator.share){
    navigator.share({title:title,text:request.uri}).catch(function(error){
      if (error.name!=="AbortError"){console.error("Unable to share receive request",error)}
    })
  }else{
    window.location.href="mailto:?subject="+encodeURIComponent(title)+"&body="+encodeURIComponent(request.uri)
  }
}
function setReceiveRequest(){
  if (currentReceiveRequest==undefined){beginReceiveRequest(stateCoin)}
  var addressPanel=document.createElement("div")
  addressPanel.id="idReceiveAddress"
  addressPanel.className="center"
  addressPanel.style.overflowWrap="anywhere"
  addressPanel.textContent=currentReceiveRequest.address
  $$$('#idReceivePayment').appendChild(addressPanel)
}
function testMnemonicDerivation(coin=stateCoin){
  var service=getStateService(coin)
  var account=deriveCoinAccount(service.testMnemonic,coin,"")
  var results=[]
  for (const index in service.testAddresses){
    var address=deriveCoinAddressFromAccount(account,Number(index))
    results.push({index:Number(index),address:address,expected:service.testAddresses[index],passed:address==service.testAddresses[index]})
  }
  return results
}
function verifyMnemonicDerivation(coin=stateCoin){
  var service=getStateService(coin)
  var results=testMnemonicDerivation(coin)
  var failed=results.filter(result=>!result.passed)
  if (failed.length>0){
    console.error(service.responseCoin+" mnemonic test failed",failed)
    throw new Error(service.responseCoin+" mnemonic test failed")
  }
  return true
}
function verifyMnemonicPassphrase(coin=stateCoin){
  var service=getStateService(coin)
  var address=deriveCoinAddress(service.testMnemonic,0,coin,service.testPassphrase)
  if ((address!==service.testPassphraseAddress)||(address===service.testAddresses[0])){
    console.error(service.responseCoin+" passphrase test failed",address)
    throw new Error(service.responseCoin+" passphrase test failed")
  }
  return true
}
function verifyOperationalDerivations(){
  operationalWalletCoins().forEach(function(coin){verifyMnemonicDerivation(coin);verifyMnemonicPassphrase(coin)})
  return true
}
function runWalletDiagnostics(){
  var started=performance.now()
  verifyOperationalDerivations()
  var service=getStateService(stateCoin)
  var receiveRequest=getReceiveRequest(service.testMnemonic,"1.25",stateCoin,service.receiveIndex,"")
  if ((receiveRequest.index!=service.receiveIndex)||(receiveRequest.address!=service.testAddresses[service.receiveIndex])||(receiveRequest.amount!=="1.25")||(receiveRequest.uri!=service.uriScheme+service.testAddresses[service.receiveIndex]+"?amount=1.25")){
    console.error(service.responseCoin+" receive test failed",receiveRequest)
    throw new Error(service.responseCoin+" receive test failed")
  }
  verifyStateParser(stateCoin)
  verifyLocalSendPlanning(stateCoin)
  verifyLocalTransactionBuilding(stateCoin)
  verifyBroadcastParsing(stateCoin)
  console_log("Operational mnemonic tests passed: EFL and DEM indices 0, 1, 10 and BIP39 passphrases")
  return Object.freeze({passed:true,durationMs:Math.round(performance.now()-started)})
}
function setEntropy(){
  if (localStorage.getItem("bip39")!=null){return false}
  var entropy=new Uint8Array(16)
  crypto.getRandomValues(entropy)
  var mnemonicString=mnemonic.toMnemonic(entropy)
  if (!mnemonic.check(mnemonicString)){throw new Error("Invalid locally generated mnemonic")}
  localStorage.setItem("bip39",mnemonicString)
  console_log("Wallet mnemonic created locally")
  return true
}
function implementMnemonic(mnemonicString){
//  localStorage.setItem("bip39",pako.deflate(mnemonicString,{to:'string'}))
  for (const supported in supportedCoins){
    supportedCoins[supported].balance=0
    supportedCoins[supported].scriptHashes=[]
    extendScriptHashes(supported)
  }
  saveSupportedCoins()
}
function getDerivationPath(network) {
  var purpose = 44;
  var coin = network.HD;
  var account = 0
  var change = 0;
  var path = "m/" + purpose + "'/" + coin + "'/" + account + "'/" + change;
  return path;
}
function calcBip32ExtendedKey(path,bip32RootKey) {
  var extendedKey = bip32RootKey;
  // Derive the key from the path
  var pathBits = path.split("/");
  for (var i=0; i<pathBits.length; i++) {
    var bit = pathBits[i];
    var index = parseInt(bit);
    if (isNaN(index)) {
      continue;
    }
    var hardened = bit[bit.length-1] == "'";
    var isPriv = !(extendedKey.isNeutered());
    var invalidDerivationPath = hardened && !isPriv;
    if (invalidDerivationPath) {
      extendedKey = null;
    }
    else if (hardened) {
      extendedKey = extendedKey.deriveHardened(index);
    }
    else {
      extendedKey = extendedKey.derive(index);
    }
  }
  return extendedKey;
}

function scriptHashNet(PublicKey,network) {
    const script=bitcoin.address.toOutputScript(PublicKey,network)
    let hash = bitcoin.crypto.sha256(script).reverse();
    const reversedHashHex = Array.from(hash, byte => byte.toString(16).padStart(2, '0')).join('');
    return reversedHashHex;
}

function prepare_payment(coin){
  var rawTx    
  phrase=localStorage.getItem("bip39")
  var network = bitcoin.networks[networks[coin].index]
  var seed = mnemonic.toSeed(phrase,getStoredMnemonicPassphrase());
  var bip32RootKey = bitcoin.HDNode.fromSeedHex(seed, network);
  var derivationPath = getDerivationPath(network);
  bip32ExtendedKey = calcBip32ExtendedKey(derivationPath,bip32RootKey);
  
  var key = bip32ExtendedKey.derive(0);
  var keyPair = key.keyPair;
  var address = keyPair.getAddress().toString();  //address
  var privkey = keyPair.toWIF();                  //privkey
    
/*  dem */
 	var tx = new bitcoin.TransactionBuilder(network);
    tx.addInput("3deb42b2c5bb36ccf9bfd7cd6389f218338ea3bf92019202df96e8f121374402", 0); 
    tx.addOutput("NQFWuuyz6GryK5Zejnf5Wpwj8YHaJMgK6S", 5000,network); 
    tx.addOutput("NNZw2GwrFweGnFYuoBdkdFu4EtUW8Deqoq", 4000,network); 
    tx.sign(0, keyPair);

/*  cdn 
 		var tx = new bitcoin.TransactionBuilder(network);
    tx.addInput("57373cee82dc9dbb8ce0f5a7cec948b21c138d5e654c7c7a94a3edfacb2e4332", 0); //originele-TX
    tx.addOutput("CNGY1tpAyCXfyhJKsx3uGUQrbXVRPgCsfF",   500000); // send back to adex
    tx.addOutput("CPTSHmcCeWdQRsRB8T9KT1ZJ6zoZEWmEEd",99300000); // send back to cc
    tx.sign(0, keyPair); */
                  
    var builtTx = tx.build();
    var serializedTx = builtTx.toHex();
    rawTx = serializedTx    
    console.log(rawTx)    
}

/* rubtc i7dCyLeXNQ6EPCeqFeVqi1RApV7wgsMJgC
   msg   test
   sign  tItdSa/8eCs8V84N8U+Ql4wilyzU+1A8F6UCh7j4yd8DPsE21UblOZdrWoKgvWMWWsT5B4CQ6CInX2NtVOAvFxwZ0EEOB2v2xet4ETj96ZQ2QCPf9bDR4TqsAyi//z4I
*/
function signMessage(tikker,idx,message){
  phrase=localStorage.getItem("bip39")
  var network=bitcoin2.networks[supportedCoins[tikker].network]
  var seed = mnemonic.toSeed(phrase,getStoredMnemonicPassphrase())
  //const root = bitcoin.HDNode.fromSeedHex(seed, bip);
  //const path = "m/44'/"+network.HD+"'/0'/0/"+idx;
  //const account = root.derivePath(path);
  //const keyPair = account.keyPair;
  var bip32RootKey = bitcoin.HDNode.fromSeedHex(seed, network);
  var derivationPath = getDerivationPath(network);
  bip32ExtendedKey = calcBip32ExtendedKey(derivationPath,bip32RootKey);
  var key = bip32ExtendedKey.derive(idx);
  var keyPair = key.keyPair;
  const privateKey = keyPair.d.toBuffer(32);
  const address=keyPair.getAddress().toString()
  
  const signature = bitcoinjsMessage.sign(message, privateKey, keyPair.compressed, network.messagePrefix).toString('base64');
  console.log(`address: ${address}`);
  console.log(`Message: ${message}`);
  console.log(`Signature: ${signature}`);
  
  isValid = bitcoinjsMessage.verify(message, address, signature, network.messagePrefix);
  console.log('Is valid:', isValid);
  
}

function prepare_payment_rubtc(){
  var rawTx    
  phrase=localStorage.getItem("bip39")
  var network = bitcoin.networks[networks["rubtc"].index]
  var seed = mnemonic.toSeed(phrase,getStoredMnemonicPassphrase());
  var bip32RootKey = bitcoin.HDNode.fromSeedHex(seed, network);
  var derivationPath = getDerivationPath(network);
  bip32ExtendedKey = calcBip32ExtendedKey(derivationPath,bip32RootKey);
  
  var key = bip32ExtendedKey.derive(0);
  
  var keyPair = key.keyPair;
  var address = keyPair.getAddress().toString();  //address
  var privkey = keyPair.toWIF();                  //privkey
        
  var saldo=   10000000
  var verstuur=   90000
  var fee=        10000
  var retour= saldo-verstuur-fee    
 	var tx = new bitcoin.TransactionBuilder(network);
  tx.addInput("49c4f7d172bc8ea82d36220b9fb041b4b0608596c0e3602a4a00fd39119e4208", 0); //originele-TX
  tx.addOutput("iJwaksC33yGQNW7vKJeSDxFKhTqp3Y6jGb", retour); // return-address
  tx.addOutput("iPfU3Suq1eYvneB2uHhaJDpqjwpQ2Pocah", verstuur); // TO:
  tx.sign(0, keyPair);
  var builtTx = tx.build();
  var serializedTx = builtTx.toHex();
  rawTx = serializedTx    
  console.log(rawTx)    
}
function prepare_payment_rubtcXXX(){
  var rawTx
  phrase=localStorage.getItem("bip39")
  var network = bitcoin2.networks["rubtc"]
//  var network2 = bitcoin2.networks["rubtc"]
  
/*  var seed = mnemonic.toSeed(phrase); //
  var bip32RootKey = bitcoin.HDNode.fromSeedHex(seed, network); //
  var derivationPath = getDerivationPath(network); //
  bip32ExtendedKey = calcBip32ExtendedKey(derivationPath,bip32RootKey);
  var key = bip32ExtendedKey.derive(0);
  var keyPair = key.keyPair;
  var address = keyPair.getAddress().toString();  //address
  var privkey = keyPair.toWIF();                  //privkey
*/
  
  const seed = mnemonic.toSeed(phrase,getStoredMnemonicPassphrase())
  const root = bitcoin.HDNode.fromSeedHex(seed, network);
  const path = "m/44'/1502'/0'/0/0";
  const account = root.derivePath(path);
  const keyPair = account.keyPair;
  const privateKey = keyPair.d.toBuffer(32);
  const publicKey = keyPair.Q.getEncoded(true);

  //const {address:p2pkhAddress} = bitcoin.address.fromOutputScript(bitcoin.script.pubKeyHash.output.encode(bitcoin.crypto.hash160(publicKey)), network);
  
//  const p2pkhAddress = bitcoin1.address.toBase58Check(publicKeyHash, network.pubKeyHash);
//  console.log('P2PKH Address (Base58Check):', p2pkhAddress);
  
        // Convert the public key hash to a P2PKH address
        const p2pkhAddress2 = bitcoin2.payments.p2pkh({ pubkey: publicKey, network }).address;
        console.log('P2PKH Address (Base58Check):', p2pkhAddress2);

        // Convert the public key to a P2WPKH address
        const p2wpkhAddress = bitcoin2.payments.p2wpkh({ pubkey: publicKey, network }).address;
        console.log('P2WPKH Address (Bech32):', p2wpkhAddress);

        // Convert the public key to a P2WSH address
        const p2wshAddress = bitcoin2.payments.p2wsh({
            redeem: bitcoin2.payments.p2wpkh({ pubkey: publicKey, network }),
            network
        }).address;
        console.log('P2WSH Address (Bech32):', p2wshAddress);
  

  var raw='01000000000101756e67fca293e19624559559246b7c607059c34d621bb435a7f9c159b61ef1e1010000000000ffffff0280969800000000001976a9141545471ea5cc0d04464198d64b79b6fa86b8cd6f88ac52c65a020000000016001472dda987a9f0709445b50843d86f87fa0af4ac90024131b36e9bf6c792ce63e25ffda475672dec78ba62920f4c08305c7366bd91025e229cd57088d62b6cb73534952835f6d30ed599fa8b2ee2efe01b198a47d29d0e01210307a699c72717ab18a3d0d705e95ef29b2bdd9a47e338a0bf0921758dceb5c323d1220a00';
  const psbt = new bitcoin2.Psbt({ network });
  psbt.addInput({
    hash: '49c4f7d172bc8ea82d36220b9fb041b4b0608596c0e3602a4a00fd39119e4208',
    index: 0,
    nonWitnessUtxo: Buffer.from(raw, 'hex')
  });
  
  const saldo=10000000
  const sendValue = 90000; // Amount to send in satoshis (e.g., 0.0009 BTC)
  const fee = 10000; // Transaction fee in satoshis (e.g., 0.0001 BTC)
  var retour= saldo-sendValue-fee
  psbt.addOutput({address:'iPfU3Suq1eYvneB2uHhaJDpqjwpQ2Pocah',value:sendValue});
  psbt.addOutput({address:'iJwaksC33yGQNW7vKJeSDxFKhTqp3Y6jGb',value:retour});

  //const ecpair = bitcoin.ECPair.fromWIF(keyPair.toWIF(),network)
  
  const privateKeyBuffer = keyPair.d.toBuffer();
//  const ecpair = ECPair.fromPrivateKey(privateKeyBuffer);
  const ecpair = bitcoin.ECPair.fromPublicKeyBuffer(publicKey);
  
  keyPair.publicKey=keyPair.Q.getEncoded(true)
  psbt.signInput(0, keyPair);
  
  //i5QzccSfmDb7TkUwWFmtxfpcZ7417BL6pS=recipient of output
  
  
  
/*   psbt.signInput(0, ecpair);
  psbt.signInput(0, {
      publicKey: Buffer.from(publicKey),
      sign: (hash) => {
          return keyPair.sign(hash).toDER();
      }
  });*/
  psbt.validateSignaturesOfInput(0);
  psbt.finalizeAllInputs();
  const tx = psbt.extractTransaction().toHex();
  console.log('Transaction Hex:', tx);


  
  /* const seed = bitcoin2.bip39.mnemonicToSeedSync(phrase);
  const root = bitcoin2.bip32.fromSeed(seed, bitcoin2.networks["rubtc"]);
  const path = "m/44'/0'/0'/0/0";
  const account = root.derivePath(path);
  const keyPair2 = bitcoin2.ECPair.fromPrivateKey(account.privateKey);  
  const { address2: p2pkhAddress } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
  console.log('P2PKH Address (Base58Check):', p2pkhAddress);
  
  const root = bip32RootKey //bip32.fromSeed(seed, network2);
  const path = "m/44'/0'/0'/0/0";
  const account = root.derivePath(path);  
  const keyPair2 = bitcoin2.ECPair.bitcoin2(account.privateKey);
  const {address2} = bitcoin2.payments.p2pkh({ pubkey: keyPair.getPublicKeyBuffer(), network:network2 }); 

const prevTxId = '49c4f7d172bc8ea82d36220b9fb041b4b0608596c0e3602a4a00fd39119e4208'; // The previous transaction ID
const prevTxIndex = 0; // The index of the output in the previous transaction
const prevTxValue = 10000000; // The value of the output in satoshis (e.g., 0.001 BTC)
const recipientAddress = 'iPfU3Suq1eYvneB2uHhaJDpqjwpQ2Pocah'; // The recipient's Bitcoin address
const sendValue = 90000; // Amount to send in satoshis (e.g., 0.0009 BTC)
const fee = 10000; // Transaction fee in satoshis (e.g., 0.0001 BTC)
var retour= saldo-verstuur-fee
var raw='01000000000101756e67fca293e19624559559246b7c607059c34d621bb435a7f9c159b61ef1e1010000000000ffffff0280969800000000001976a9141545471ea5cc0d04464198d64b79b6fa86b8cd6f88ac52c65a020000000016001472dda987a9f0709445b50843d86f87fa0af4ac90024131b36e9bf6c792ce63e25ffda475672dec78ba62920f4c08305c7366bd91025e229cd57088d62b6cb73534952835f6d30ed599fa8b2ee2efe01b198a47d29d0e01210307a699c72717ab18a3d0d705e95ef29b2bdd9a47e338a0bf0921758dceb5c323d1220a00';
const psbt = new bitcoin2.Psbt({ network2 });
//const pubKeyHash = bitcoin2.crypto.hash160(keyPair2.publicKey);
//const scriptPubKey = bitcoin2.script.pubKeyHash.output.encode(pubKeyHash);
psbt.addInput({
  hash: prevTxId,
  index: prevTxIndex,
  nonWitnessUtxo: Buffer.from(raw, 'hex'), // Full raw hex of the previous transaction
});
psbt.addOutput({address:'iPfU3Suq1eYvneB2uHhaJDpqjwpQ2Pocah',value:sendValue});
psbt.addOutput({address:'iJwaksC33yGQNW7vKJeSDxFKhTqp3Y6jGb',value:retour});
psbt.signInput(0, keyPair2);
psbt.validateSignaturesOfInput(0);
psbt.finalizeAllInputs();
const tx = psbt.extractTransaction().toHex();
console.log('Transaction Hex:', tx);
psbt.validateSignaturesOfInput(0);
psbt.finalizeAllInputs();
const tx = psbt.extractTransaction().toHex();
console.log('Transaction Hex:', tx);

/*
  var saldo=   10000000
  var verstuur= 1000000
  var fee=         1000
  var retour= saldo-verstuur-fee    
 	var tx = new bitcoin.TransactionBuilder(network);
  tx.version=2
  tx.addInput("49c4f7d172bc8ea82d36220b9fb041b4b0608596c0e3602a4a00fd39119e4208", 0); //originele-TX
  //tx.input[0].prevOutType='p2pkh'
  tx.addOutput("iJwaksC33yGQNW7vKJeSDxFKhTqp3Y6jGb", retour); // return-address
  tx.addOutput("iPfU3Suq1eYvneB2uHhaJDpqjwpQ2Pocah", verstuur); // TO:
  //tx.sign({
  //  prevOutScriptType: 'p2pkh',
  //  vin: 0,
  //  keyPair: keyPair,
  //  witnessValue: 10000000, // Value of the UTXO being spent
  //  witnessScript: null // No witness script for non-segwit
  //});  
  tx.sign(0, keyPair, null, null, saldo);
  var builtTx = tx.build();
  var serializedTx = builtTx.toHex();
  rawTx = serializedTx
  console.log(rawTx)
*/

}
function prepare_payment_ltc(){
  var rawTx    
  phrase=localStorage.getItem("bip39")
  var network = bitcoin.networks[networks["ltc"].index]
  var seed = mnemonic.toSeed(phrase,getStoredMnemonicPassphrase());
  var bip32RootKey = bitcoin.HDNode.fromSeedHex(seed, network);
  var derivationPath = getDerivationPath(network);
  bip32ExtendedKey = calcBip32ExtendedKey(derivationPath,bip32RootKey);
  
  var key = bip32ExtendedKey.derive(0);
  //
  var keyPair = key.keyPair;
  var address = keyPair.getAddress().toString();  //address
  var privkey = keyPair.toWIF();                  //privkey
    
  var saldo=   10000000
  var verstuur= 1000000
  var fee=         1000
  var retour= saldo-verstuur-fee    
 	var tx = new bitcoin.TransactionBuilder(network);
  tx.addInput("e546432242bde0e8a60556351659843aca0d669c9d1a1443e552c22081ffd3ad", 0); //originele-TX
  tx.addOutput("LcGeDAb6nrKCnya7oMp2nrrVH3ZgEM3T44", retour); // return-address
  tx.addOutput("LR2bi4mwAooCLN64NLiGxyrbBceHfPDyCy", verstuur); // TO: adex
  tx.sign(0, keyPair);
  var builtTx = tx.build();
  var serializedTx = builtTx.toHex();
  rawTx = serializedTx    
  console.log(rawTx)    
}
function prepare_payment_cdn(){
  // [0]."CJzBzptqTnizcQ3yCX4oP6p1iU5ivUVEBd"
  // 1: CPTSHmcCeWdQRsRB8T9KT1ZJ6zoZEWmEEd
  // 2: Ca8noHFiw2FyUYGLiSJdbaVnQqPwjV9MDX
  // core:CVKmzcXRDDZMHayXSkgirCCPBSJmAhetfX
  var rawTx    
  phrase=localStorage.getItem("bip39")
  var network = bitcoin.networks[networks["cdn"].index]
  var seed = mnemonic.toSeed(phrase,getStoredMnemonicPassphrase());
  var bip32RootKey = bitcoin.HDNode.fromSeedHex(seed, network);
  var derivationPath = getDerivationPath(network);
  bip32ExtendedKey = calcBip32ExtendedKey(derivationPath,bip32RootKey);
  
  var key = bip32ExtendedKey.derive(0);
  //
  var keyPair = key.keyPair;
  var address = keyPair.getAddress().toString();  //address
  var privkey = keyPair.toWIF();                  //privkey
    
  var saldo=   100000000
  var verstuur=  1000000
  var fee=        100000
  var retour= saldo-verstuur-fee    
 	var tx = new bitcoin.TransactionBuilder(network);
  tx.addInput("ecf0eeaf97f92e17a9478015bcf44d457c79f85e1a4d4437b8d60bd875fc5836", 0); //originele-TX
  tx.addOutput("CPTSHmcCeWdQRsRB8T9KT1ZJ6zoZEWmEEd", retour); // return-address
  tx.addOutput("CVKmzcXRDDZMHayXSkgirCCPBSJmAhetfX", verstuur); // TO: adex
  tx.sign(0, keyPair);
  var builtTx = tx.build();
  var serializedTx = builtTx.toHex();
  rawTx = serializedTx    
  console.log(rawTx)    
}

function prepare_payment_pak(){
  var rawTx    
  phrase=localStorage.getItem("bip39")
  var network = bitcoin.networks[networks["pak"].index]
  var seed = mnemonic.toSeed(phrase,getStoredMnemonicPassphrase());
  var bip32RootKey = bitcoin.HDNode.fromSeedHex(seed, network);
  var derivationPath = getDerivationPath(network);
  bip32ExtendedKey = calcBip32ExtendedKey(derivationPath,bip32RootKey);
  
  var key = bip32ExtendedKey.derive(0);
  //
  var keyPair = key.keyPair;
  var address = keyPair.getAddress().toString();  //address
  var privkey = keyPair.toWIF();                  //privkey
    
  var saldo=   100000000
  var verstuur= 10000000
  var fee=        100000
  var retour= saldo-verstuur-fee    
 	var tx = new bitcoin.TransactionBuilder(network);
  tx.addInput("f3b2d9e579136fbbaf2bb7b7aabd70036e048fab64870047cda987ed31c4b118", 1); //originele-TX
  tx.addOutput("PDiVjVEta3ctDtREfchyMnvPw1xmjvfktg", retour); // return-address
  tx.addOutput("PUE6PPv2v6RDLipdcTJ4q1yDq4d4jUdjr4", verstuur); // TO:
  tx.sign(0, keyPair);
  var builtTx = tx.build();
  var serializedTx = builtTx.toHex();
  rawTx = serializedTx    
  console.log(rawTx)    
}


function prepare_payment_slg(){
  var rawTx    
  phrase=localStorage.getItem("bip39")
  var network = bitcoin.networks[networks["slg"].index]
  var seed = mnemonic.toSeed(phrase,getStoredMnemonicPassphrase());
  var bip32RootKey = bitcoin.HDNode.fromSeedHex(seed, network);
  var derivationPath = getDerivationPath(network);
  bip32ExtendedKey = calcBip32ExtendedKey(derivationPath,bip32RootKey);
  
  var key = bip32ExtendedKey.derive(0);
  //
  var keyPair = key.keyPair;
  var address = keyPair.getAddress().toString();  //address
  var privkey = keyPair.toWIF();                  //privkey
    
  var saldo=   100000000
  var verstuur= 10000000
  var fee=        100000
  var retour= saldo-verstuur-fee    
 	var tx = new bitcoin.TransactionBuilder(network);
  tx.addInput("a2d710e8543913d233d8e67686f3156bba769a5fc8d9fa9c99918c481d773028", 1); //originele-TX
  tx.addOutput("SVRGTYLTNpxWtxjiickMCjibL6N8UywjWD", retour); // return-address
  tx.addOutput("SS2aCqta2t53rWELPA3grPiBcXnpuzWqki", verstuur); // TO:
  tx.sign(0, keyPair);
  var builtTx = tx.build();
  var serializedTx = builtTx.toHex();
  rawTx = serializedTx    
  console.log(rawTx)    
}

function prepare_payment_CESC(){
  var rawTx    
  phrase=localStorage.getItem("bip39")
  var network = bitcoin.networks[networks["cesc"].index]
  var seed = mnemonic.toSeed(phrase,getStoredMnemonicPassphrase());
  var bip32RootKey = bitcoin.HDNode.fromSeedHex(seed, network);
  var derivationPath = getDerivationPath(network);
  bip32ExtendedKey = calcBip32ExtendedKey(derivationPath,bip32RootKey);
  
  var key = bip32ExtendedKey.derive(0);
  //
  var keyPair = key.keyPair;
  var address = keyPair.getAddress().toString();  //address
  var privkey = keyPair.toWIF();                  //privkey
    
  var saldo=   100000000
  var verstuur= 10000000
  var fee=        100000
  var retour= saldo-verstuur-fee    
 	var tx = new bitcoin.TransactionBuilder(network);
  tx.addInput("00dbb3859eb245b24ae9b5a4e536de762ef39c948e183a71d3d49b5b5f71ad06", 1); //originele-TX
  tx.addOutput("CZbtgQCoYqe9YkNdiVu1RAEZwURLWPg2KJ", retour); // return-address
  tx.addOutput("CdKAYaaw29tPuJcLCzT6kTFfLfe1XR2GBB", verstuur); // TO:
  tx.sign(0, keyPair);
  var builtTx = tx.build();
  var serializedTx = builtTx.toHex();
  rawTx = serializedTx    
  console.log(rawTx)    
}
function prepare_payment_example(coin=stateCoin){
  var rawTx    
  phrase=localStorage.getItem("bip39")
  var network = bitcoin.networks[networks[coin].index]
  var seed = mnemonic.toSeed(phrase,getStoredMnemonicPassphrase());
  var bip32RootKey = bitcoin.HDNode.fromSeedHex(seed, network);
  var derivationPath = getDerivationPath(network);
  bip32ExtendedKey = calcBip32ExtendedKey(derivationPath,bip32RootKey);
  
  var key = bip32ExtendedKey.derive(0);
  //
  var keyPair = key.keyPair;
  var address = keyPair.getAddress().toString();  //address
  var privkey = keyPair.toWIF();                  //privkey
    
  /*
   0:LYUG9agLcWkVt1jyMgzCwEvLd1TxpXu8hs
   1:LW8bDaaEb4YBLrruS1KtTxp3CdGYKHuPCX
   TO:LSreDWFXysBTAwk5JT2LsKdFp4Fgb49Wnb
  */
  var saldo=   100000000
  var verstuur= 10000000
  var fee=        100000
  var retour= saldo-verstuur-fee    
 	var tx = new bitcoin.TransactionBuilder(network);
  tx.addInput("5b7945e1647bc65a24334273a031a96aa6fc382c17efe04c67799008e5809a35", 0); //originele-TX
  tx.addOutput("LW8bDaaEb4YBLrruS1KtTxp3CdGYKHuPCX", retour); // return-address
  tx.addOutput("LSreDWFXysBTAwk5JT2LsKdFp4Fgb49Wnb", verstuur); // TO:
  tx.sign(0, keyPair);
  var builtTx = tx.build();
  var serializedTx = builtTx.toHex();
  rawTx = serializedTx    
  console.log(rawTx)    
}

function revertTS(txt){
  /* - Timestamp picked from raw transaction
     - converted to 32 bits unix timestamp
     - converted back to rawTX format */
    let hexTimestamp = txt; // Example value
    // Convert the hexadecimal string to a little-endian byte array
    let byteArray = hexTimestamp.match(/.{1,2}/g).map(byte => parseInt(byte, 16));
    // Convert the byte array to a 32-bit unsigned integer (little-endian order)
    let timestamp = byteArray.reduceRight((acc, byte, index) => acc + (byte * Math.pow(256, index)), 0);
    console.log(timestamp); // Output: 1685107460 (Unix timestamp)

    let byte1 = (timestamp & 0xFF).toString(16).padStart(2, '0');
    let byte2 = ((timestamp >> 8) & 0xFF).toString(16).padStart(2, '0');
    let byte3 = ((timestamp >> 16) & 0xFF).toString(16).padStart(2, '0');
    let byte4 = ((timestamp >> 24) & 0xFF).toString(16).padStart(2, '0');
    console.log(byte1+byte2+byte3+byte4)

x='01000000f0f80e6601a649d51bd2eb5ab7cff3083d570cff6b416e491eec3d9e3be5fbc7d02ba84138010000004948304502210092f104af1adeea3197f57a390b072bce2a04697221609fdba17ee74b03c704e0022013b3c6a75effd429eabe5726a4476b0ba52d5b15d206eaee2ece04f11050d3b001ffffffff030000000000000000002044667704000000232102ab01316ce67eb0c7965396c79622944fd9f58fc6240fb7e2b5b05b6585d5339aac0b77667704000000232102ab01316ce67eb0c7965396c79622944fd9f58fc6240fb7e2b5b05b6585d5339aac0000000000';

y='01000000727a32660102443721f1e896df02920192bfa38e3318f28963cdd7bff9cc36bbc5b242eb3d000000006a47304402205c53155c54f1232cf26019b8b38e296413abc96fa23757f206a805543f79dee202204cc5f80b8f61d3ea0852a710542c4090cef5ae1d07ae288ec563feac3509f05501210323832ef421dfd044271359cef193b2a5f8f4dde8cc23766f6c92f29789f03a7fffffffff0220a10700000000001976a9142f92e4029e97a20cf5f8337d073aa634d231a70688ac801a0600000000001976a9141d1e408d5a69b0d59ff2f96002b2d66a77f1503288ac00000000';  

z=''
}

function extendScriptHashes(coin){
  var startTime = performance.now();
  var index=0
  if (networks[coin]!==undefined){
    phrase=localStorage.getItem("bip39")
    var network = bitcoin.networks[networks[coin].index]
    var seed = mnemonic.toSeed(phrase,getStoredMnemonicPassphrase());
    var bip32RootKey = bitcoin.HDNode.fromSeedHex(seed, network);
    var derivationPath = getDerivationPath(network);
    bip32ExtendedKey = calcBip32ExtendedKey(derivationPath,bip32RootKey);

    more=true
    while (more) {
      if (supportedCoins[coin].scriptHashes!=undefined){
        index=supportedCoins[coin].scriptHashes.length
      } else {
        supportedCoins[coin].scriptHashes=[]
      }
      key = bip32ExtendedKey.derive(index);
      var keyPair = key.keyPair;
      var address = keyPair.getAddress().toString();
//      var privkey = keyPair.toWIF();
//      var pubkey = keyPair.getPublicKeyBuffer().toString('hex');
      pk={'index':index,'address':address,'used':false,'spend':false}
      supportedCoins[coin].scriptHashes.push(pk)
      if (supportedCoins[coin].scriptHashes.length%10==0) {
        more=false
        if (supportedCoins[coin].scriptHashes.length==10) {
          supportedCoins[coin].balance=0
          supportedCoins[coin].published=-1
        }
        saveSupportedCoins()
      }
    }
  }

  console_log(`Performance extendScriptHashes: ${coin}: `+(performance.now()-startTime));
}
function scriptHash(PublicKey,coin) {
  var index=networks[coin].index
  const script=bitcoin.address.toOutputScript(PublicKey,libs.bitcoin.networks[index])
  let hash = bitcoin.crypto.sha256(script).reverse();
  const reversedHashHex = Array.from(hash, byte => byte.toString(16).padStart(2, '0')).join('');
  return reversedHashHex;
}
function testPSH(coin){
  // 200/s
  startTime=performance.now()
  supportedCoins[coin].scriptHashes.forEach(SH=>console.log(scriptHash(SH.address,coin)))
  console.log(`duration: ${performance.now()-startTime}`)
}

function console_log(txt){
  console.log(txt)
  $$$("#console").innerText=txt
}

//=============
async function cc(){
  markWalletBoot("startup-begin")
  await translationReady
  markWalletBoot("translation-ready")
  applyExpertMode()
  updateWalletSpendLockPresentation()
  verifyOperationalDerivations()
  markWalletBoot("derivation-canary-ready")
  setEntropy()
  await waitForValidPin()
  markWalletBoot("pin-ready")
  $$$("#idMemo").value=""
  updateLayout()
  refreshCombos()

  $$$('#comboBalance').addEventListener("change", function() {
    testInputBalance()
    if ($$$('#comboBalance').value===stateCoin){wakeState("balance-selection",true)}else{scheduleStateRefresh()}
  })
  $$$('#comboReference').addEventListener("change", function() {
    activateReferenceCurrency($$$('#comboReference').value)
  });
  $$$('#comboFiat').addEventListener("change", function() {
    var selectedOption = $$$('#comboFiat').options[$$$('#comboFiat').selectedIndex];
    combos["Fiat"]['active']=$$$('#comboFiat').value
    localStorage.setItem("combos",JSON.stringify(combos))
    reCalc($$$("#inputFiat"),false);
    combos["Fiat"]['old']=combos["Fiat"]['active']
  });
  $$$('#comboSupported').addEventListener("change", function() {
    var coin=$$$('#comboSupported').value
    combos["Supported"]['active']=coin
    $$$("#idPaymentIcon").src="img/"+supportedCoins[coin].coin+".png"
    localStorage.setItem("combos",JSON.stringify(combos))
    if (!$$$('#panel-transaction').classList.contains('hidden')){closeTransactionView()}
    switchStateCoin(coin,"coin-selection",true)
    reCalc($$$("#inputSupported"),false)
    combos["Supported"]['old']=combos["Supported"]['active']
    renderHistory()
  });
  $$$('#idSendTo').addEventListener("input",function(){clearLocalSendPlan(T("txtDestinationChanged"))})
  $$$('#inputSupported').addEventListener("input",function(){
    var normalizedAmount=normalizePaymentAmount(this.value)
    if (this.value!==normalizedAmount){this.value=normalizedAmount}
    calculatorShowsBalance=false
    if (transactionPresentation==="receiveRequest"){updateReceiveTitle();scheduleReceiveUpdate()}
    if (transactionPresentation==="sendEdit"){clearLocalSendPlan(T("txtAmountChanged"));updateSendTitle()}
  })

  var historyHandle=$$$('#idHistoryHandle')
  if (historyHandle!=null){
    historyHandle.addEventListener("pointerdown",startHistoryDrag)
    historyHandle.addEventListener("pointermove",moveHistoryDrag)
    historyHandle.addEventListener("pointerup",endHistoryDrag)
    historyHandle.addEventListener("pointercancel",function(){historyDrag=undefined})
  }
  window.addEventListener("resize", function(){updateLayout();setHistoryDrawerHeight(historyDrawerHeight)});
  window.addEventListener("offline", (e) => {online();invalidateWalletState("offline");console_log("offline");});
  window.addEventListener("online", (e) => {online();console_log("online");scheduleStateRefresh()});
  document.addEventListener("DOMContentLoaded", function() {updateLayout();});
  document.addEventListener("visibilitychange", function() {
    if ((!document.hidden)&&isStateCoinActive()){
      wakeState("visible",!isSendCommitmentActive())
    }else{
      scheduleStateRefresh()
    }
  });
  document.addEventListener("keydown", function(event) {
    clickedIt=Date.now()
    if (event.key==="Escape"){hideReceiveQrOverlay();hidePaymentReceiptQrOverlay()}
    recordStateActivity("keyboard")
  });
  document.addEventListener("click", handleClick);
  document.addEventListener("paste",handleWalletRecoveryPaste)

  if (localStorage.getItem("owner") == null) {
    localStorage.setItem("owner","")
    localStorage.setItem("owner_inHeader","1")
    localStorage.setItem("owner_inRequest","0")
  }
  setOwner();
  refreshCurrencyAvailability()
  helloWorld()

  await buildWalletView()
  markWalletBoot("wallet-view-ready")
  renderHistory()
  startStateActivity()
  if (sessionStorage.getItem("walletMnemonicRestore")=="1"){
    sessionStorage.removeItem("walletMnemonicRestore")
    console_log("Wallet mnemonic restored successfully")
  }

  if (localStorage.getItem("rsa2")==null) {
    generateKeyPair().then(keypair =>{
      crypto.subtle.exportKey('jwk', keyPair.publicKey)
      .then((publicKey) => {
        crypto.subtle.exportKey('jwk', keyPair.privateKey)
        .then((rsa2) => {
          localStorage.setItem("rsa",JSON.stringify(publicKey))
          localStorage.setItem("rsa2",JSON.stringify(rsa2))
        })
      })
    })
  }
  integr().then(data => {console_log(data)})

  readyState=true
  markWalletBoot("interactive")
  onlineTO=null
  online()
}
cc()

let colorpicker='<label class="label T">Wallet color:&nbsp;</label><input type=text id="resultBox"><!--div id="colorValue"--></div>'
colorpicker+='<canvas id="colorPicker" width="300" height="300"></canvas>'
colorpicker+='<canvas id="luminosityPicker" width="30" height="300"></canvas>'
var baseCanvas,baseContext,luminosityCanvas,luminosityContext,resultBox
var hue=0
var saturation=0
var luminosity=0
var selectedColor=localStorage.getItem("glossiColor")
glossify()

function ini_colorpicker(){
  baseCanvas = document.getElementById('colorPicker');
  baseContext = baseCanvas.getContext('2d');
  luminosityCanvas = document.getElementById('luminosityPicker');
  luminosityContext = luminosityCanvas.getContext('2d');
  resultBox = document.getElementById('resultBox');
  resultBox.value=localStorage.getItem("glossiColor")
  
  selectedColor=localStorage.getItem("glossiColor")
  const hsl=hexToHsl(selectedColor)
  updateLuminosityPicker()
  
  for (let x = 0; x < baseCanvas.width; x++) {
    for (let y = 0; y < baseCanvas.height; y++) {
      hue = Math.round((x / baseCanvas.width) * 360);
      saturation = Math.round((1 - (y / baseCanvas.height)) * 100);
      baseContext.fillStyle = `hsl(${hue}, ${saturation}%, 50%)`;
      baseContext.fillRect(x, y, 1, 1);
    }
  }
  resultBox.addEventListener('input', function(event) {
    let inputValue = resultBox.value.trim();
    inputValue = inputValue.replace(/[^0-9a-fA-F#]/g, '');
    resultBox.value = inputValue;
    const hsl=hexToHsl(inputValue)
    updateLuminosityPicker();
    updateSelectedColor();
  });
  baseCanvas.addEventListener('click', function(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    hue = Math.round((x / event.target.width) * 360);
    saturation = Math.round((1 - (y / event.target.height)) * 100);
    updateLuminosityPicker();
    updateSelectedColor();
  });
  luminosityCanvas.addEventListener('click', function(event) {
    const rect = event.target.getBoundingClientRect();
    const y = event.clientY - rect.top;
    luminosity = Math.round((event.target.height - y) / event.target.height * 100);
    updateSelectedColor();
  });
  function updateLuminosityPicker() {
    const x=1
    for (let y = 0; y < luminosityCanvas.height; y++) {
      const lumin = Math.round((luminosityCanvas.height - y) / luminosityCanvas.height * 100);
      luminosityContext.fillStyle = `hsl(${hue}, ${saturation}%, ${lumin}%)`;
      luminosityContext.fillRect(0, y, luminosityCanvas.width, 1);
    }
  }
  function updateSelectedColor() {
    const color = `hsl(${hue}, ${saturation}%, ${luminosity}%)`;
    resultBox.style.backgroundColor = color;
    resultBox.value = `${hslToHex(hue, saturation, luminosity)}`;
  }
  function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r, g, b;
    if (h < 60) {
        r = c; g = x; b = 0;
    } else if (h < 120) {
        r = x; g = c; b = 0;
    } else if (h < 180) {
        r = 0; g = c; b = x;
    } else if (h < 240) {
        r = 0; g = x; b = c;
    } else if (h < 300) {
        r = x; g = 0; b = c;
    } else {
        r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255).toString(16).padStart(2, '0');
    g = Math.round((g + m) * 255).toString(16).padStart(2, '0');
    b = Math.round((b + m) * 255).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }
  function hexToHsl(hex) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h;
    if (max === min) {
      h = 0; // No saturation, so hue is 0
    } else if (max === r) {
      h = (60 * ((g - b) / (max - min)) + 360) % 360;
    } else if (max === g) {
      h = (60 * ((b - r) / (max - min)) + 120) % 360;
    } else {
      h = (60 * ((r - g) / (max - min)) + 240) % 360;
    }
    const l = (max + min) / 2;  
    let s;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = (max - min) / (2 * l);
    } else {
      s = (max - min) / (2 - 2 * l);
    }
    hue=Math.round(h)
    saturation=Math.round(s*100)
    luminosity=Math.round(l*100)
    return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  }
  
}

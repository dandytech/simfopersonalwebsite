//Craps Main Data
let crapsUsername = "";

//Craps Game Settings
const startingMoney = 1000;
const startingRounds = 0;
const bets = {
  even: "EVEN",
  odd: "ODD",
};
const minimumBet = 100;

//Craps Dice Roll Settings
const numDiceToRoll = 2;
const hideDiceDelayMs = 10000000;
const processDiceDelayMs = 1800;

//HTML Element IDs
const crapsUsernameInput = "craps-username-input";
const crapsRegistrationPane = "craps-registration-pane";
const crapsMainSection = "craps-main-section";
const crapsStatsUsername = "craps-stats-username";
const crapsStatsMoney = "craps-stats-money";
const crapsStatsRounds = "craps-stats-rounds";
const crapsUserBetAmount = "craps-user-bet-amount";
const crapsRollDiceButton = "craps-roll-dice-button";
const crapsRollDiceAnimationContainer = "craps-roll-dice-animation-container";
const crapsBettingGridContainer = "craps-betting-grid-container";
const crapsRoundFinishGridContainer = "craps-round-finish-grid-container";
const crpasRoundFinishMessage = "crpas-round-finish-message";
const crapsNextRoundButton = "craps-next-round-button";
const crapsNextRoundButtonDisabled = "craps-next-round-button-disabled";

//In-Game varibales
let currentMoney = startingMoney;
let currentRounds = startingRounds;
let currentBet = bets.even;
let currentBetAmount = minimumBet;
let canChangeBet = true;

//HTML Manipulation Functions
function showElement(elementID) {
  document.getElementById(elementID).style.display = "block";
}

function hideElement(elementID) {
  document.getElementById(elementID).style.display = "none";
}

function showRegistrationPane() {
  showElement(crapsRegistrationPane);
}
function removeRegistrationPane() {
  hideElement(crapsRegistrationPane);
}

function showMainGameSection() {
  showElement(crapsMainSection);
}

function hideMainGameSection() {
  hideElement(crapsMainSection);
}

//Game Starting Point
function registerCrapsPlayer() {
  crapsUsername = document.getElementById(crapsUsernameInput).value;

  //Username validation check
  let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g;
  if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)) {
    alert(
      "Username must be atleast 5 characters long, alphanumeric and underscore only, no spaces and cannot start with a number!",
    );
  } else {
    removeRegistrationPane();
    showMainGameSection();
    setUpFirstRound();
  }
}

//Round Management Functions
function setUpFirstRound() {
  hideElement(crapsNextRoundButtonDisabled);
  document.getElementById(crapsStatsUsername).innerHTML = crapsUsername;
  showElement(crapsNextRoundButton);
  setMoney(startingMoney);
  setRound(startingRounds);
  betEven();
  setBetAmount(minimumBet);
  setUpNextRound();
}

function setUpNextRound() {
  hideElement(crapsRollDiceAnimationContainer);
  hideElement(crapsRoundFinishGridContainer);
  showElement(crapsRollDiceButton);
  showElement(crapsBettingGridContainer);
  canChangeBet = true;
  betEven();
  setBetAmount(minimumBet);
}

//User Score Settingd Functions
function setMoney(money) {
  currentMoney = money;
  document.getElementById(crapsStatsMoney).innerHTML = money;
}

function setRound(round) {
  currentRounds = round;
  document.getElementById(crapsStatsRounds).innerHTML = round;
}

//Manage User Bet Selection Functions
function betEven() {
  choseBet(bets.even);
}
function betOdd() {
  choseBet(bets.odd);
}
function choseBet(bet) {
  if (canChangeBet) {
    currentBet = bet;
    document.getElementById(bet).style.backgroundColor = "red";
    const deselectBet = bet == bets.even ? bets.odd : bets.even;
    document.getElementById(deselectBet).style.backgroundColor = "transparent";
  }
}

function increaseBet() {
  setBetAmount(Math.min(currentBetAmount + minimumBet, currentMoney));
}
function decreaseBet() {
  setBetAmount(Math.max(currentBetAmount - minimumBet, minimumBet));
}

function setBetAmount(betAmount) {
  if (canChangeBet) {
    currentBetAmount = betAmount;
    document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount;
  }
}

//Roll Dice & Process Results
function rollDice() {
  canChangeBet = false;
  formatDiceScale();
  showElement(crapsRollDiceAnimationContainer);
  hideElement(crapsRollDiceButton);
  const rollDiceElement = document.getElementById(
    crapsRollDiceAnimationContainer,
  );
  rollADie({
    element: rollDiceElement,
    numberOfDice: numDiceToRoll,
    callback: delayedProcessDiceResult,
    delay: hideDiceDelayMs,
  });
}

window.addEventListener("reSize", formatDiceScale);

function formatDiceScale() {
  console.log("reSized");
  const vw = window.innerWidth * 0.8;
  const vh = window.innerHeight * 0.8;
  const widthScale = Math.min(700, vw, vh);
  const heightScale = widthScale * 0.714;
  const scale = heightScale / 494.6592;
  document.getElementById(crapsRollDiceAnimationContainer).style.transform =
    "scale(" + scale + ")";
}

function delayedProcessDiceResult(diceResult) {
  setTimeout(function () {
    processDiceResult(diceResult);
  }, processDiceDelayMs);
}
function processDiceResult(diceResult) {
  const sum = diceResult.reduce((partialSum, a) => partialSum + a, 0);
  let diceSumResult = bets.even;
  if (sum % 2 === 1) {
    diceSumResult = bets.odd;
  }
  setRound(currentRounds + 1);
  let roundFinishMessage = "";
  if (diceSumResult === currentBet) {
    roundFinishMessage = "YOU WIN!";
    setMoney(currentMoney + currentBetAmount);
  } else {
    roundFinishMessage = "YOU LOSE :(";
    setMoney(currentMoney - currentBetAmount);
  }

  if (currentMoney === 0) {
    roundFinishMessage = "YOU'RE OUT";
    showElement(crapsNextRoundButtonDisabled);
    hideElement(crapsNextRoundButton);
  }

  hideElement(crapsBettingGridContainer);
  showElement(crapsRoundFinishGridContainer);
  document.getElementById(crpasRoundFinishMessage).innerHTML =
    roundFinishMessage;
}

//Exit Game Function
function exitGame() {
  alert(
    "After playing " +
      currentRounds +
      " rounds, you leave with " +
      currentMoney +
      "$",
  );
  hideMainGameSection();
  showRegistrationPane();
  document.getElementById(crapsUsernameInput).value = "";
}

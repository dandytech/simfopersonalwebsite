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

//In-Game varibales
let currentMoney = startingMoney;
let currentRounds = startingRounds;
let currentBet = bets.even;
let currentBetAmount = minimumBet;

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

function removeRegistrationPane() {
  document.getElementById(crapsRegistrationPane).style.display = "none";
}

function showMainGameSection() {
  document.getElementById(crapsMainSection).style.display = "block";
}

function setUpFirstRound() {
  document.getElementById(crapsStatsUsername).innerHTML = crapsUsername;
  currentMoney = startingMoney;
  currentRounds = startingRounds;
  setMoney(currentMoney);
  setRound(currentRounds);
  betEven();
  setBetAmount(minimumBet);
}

function setMoney(money) {
  document.getElementById(crapsStatsMoney).innerHTML = money;
}

function setRound(round) {
  document.getElementById(crapsStatsRounds).innerHTML = round;
}

function betEven() {
  choseBet(bets.even);
}
function betOdd() {
  choseBet(bets.odd);
}
function choseBet(bet) {
  currentBet = bet;
  document.getElementById(bet).style.backgroundColor = "red";
  const deselectBet = bet == bets.even ? bets.odd : bets.even;
  document.getElementById(deselectBet).style.backgroundColor = "transparent";
}

function increaseBet() {
  setBetAmount(Math.min(currentBetAmount + minimumBet, currentMoney));
}
function decreaseBet() {
  setBetAmount(Math.max(currentBetAmount - minimumBet, minimumBet));
}

function setBetAmount(betAmount) {
  currentBetAmount = betAmount;
  document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount;
}

function rollDice() {
  document.getElementById(crapsRollDiceButton).style.display = "none";
  const rollDiceElement = document.getElementById(
    crapsRollDiceAnimationContainer,
  );
  rollADie({
    element: rollDiceElement,
    numberOfDice: 2,
    callback: processDiceResult,
    delay: 10000000,
  });
}

function processDiceResult(diceResult) {
  console.log(diceResult);
}

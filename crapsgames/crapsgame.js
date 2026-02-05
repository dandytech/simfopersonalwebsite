//Craps Main Data
let crapsUsername = "";

//Craps Game Settings
const startingMoney = 1000;
const startingRounds = 0;
const bets = {
  even: "EVEN",
  odd: "ODD",
};

//HTML Element IDs
const crapsUsernameInput = "craps-username-input";
const crapsRegistrationPane = "craps-registration-pane";
const crapsMainSection = "craps-main-section";
const crapsStatsUsername = "craps-stats-username";
const crapsStatsMoney = "craps-stats-money";
const crapsStatsRounds = "craps-stats-rounds";

//In-Game varibales
let currentMoney = startingMoney;
let currentRounds = startingRounds;
let currentBet = bets.even;

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

const quoteTextElement = "random-quote-text";
const quoteAuthorElement = "random-quote-author";
const randomQuoteGeneratorElement = "random-quote-generator";

const colors = [
  ["#0c7dee", "#db9d9d"],
  ["#e6e677", "#773a51"],
  ["#3e1010", "#3c08fa"],
  ["#bf54bd", "#12a8d1"],
  ["#0f5003", "#f8d800"],
  ["#5a0972", "#1752aa"],
  ["#3d0303", "#08d0c3"],
  ["#31c93e", "#abd124"],
  ["#111921", "#193426"],
  ["#d08011", "#bbbb18"],
];

function getRandomColorCombo() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

async function getNewRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random", {
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("There was a problem getting a new quote");
    }

    const data = await response.json();
    console.log(data);
    const quoteText = data.content;
    const quoteAuthor = data.author;

    document.getElementById(quoteTextElement).innerHTML = `"${quoteText}"`;
    document.getElementById(quoteAuthorElement).innerHTML = quoteAuthor;

    const colorCombo = getRandomColorCombo();
    document.getElementById(randomQuoteGeneratorElement).style.background =
      `linear-gradient(45deg, ${colorCombo[0]}, ${colorCombo[1]})`;
  } catch (error) {
    console.error(error);
    document.getElementById(quoteTextElement).innerHTML =
      "Unable to fetch quote 😔";
    document.getElementById(quoteAuthorElement).innerHTML = "";
  }
}

// async function getNewRandomQuote() {
//   if (!navigator.onLine) {
//     quoteTextElement.innerHTML = "Check your network 🌐";
//     quoteAuthorElelemt.innerHTML = "";
//     return;
//   }

//   try {
//     const response = await fetch("https://zenquotes.io/api/random");

//     if (!response.ok) {
//       throw new Error("Failed to fetch quote");
//     }

//     const data = await response.json();

//     // ZenQuotes returns an array
//     const quoteText = data[0].q;
//     const quoteAuthor = data[0].a;

//     quoteTextElement.innerHTML = `"${quoteText}"`;
//     quoteAuthorElelemt.innerHTML = quoteAuthor;

//     const colorCombo = getRandomColorCombo();
//     randomQuoteGeneratorElement.style.background = `linear-gradient(45deg, ${colorCombo[0]}, ${colorCombo[1]})`;
//   } catch (error) {
//     console.error(error);
//     quoteTextElement.innerHTML = "Quotes unavailable 😔";
//     quoteAuthorElelemt.innerHTML = "";
//   }
// }

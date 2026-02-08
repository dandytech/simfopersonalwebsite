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

    // Use object directly, not data[0]
    const quoteText = data.content;
    const quoteAuthor = data.author;

    document.getElementById("random-quote-text").innerHTML = `"${quoteText}"`;
    document.getElementById("random-quote-author").innerHTML = quoteAuthor;

    const colorCombo = getRandomColorCombo();

    document.getElementById("random-quote-generator").style.background =
      `linear-gradient(45deg, ${colorCombo[0]}, ${colorCombo[1]})`;
  } catch (error) {
    console.error(error);
    document.getElementById("random-quote-text").innerHTML =
      "Unable to fetch quote 😔";
    document.getElementById("random-quote-author").innerHTML = "";
  }
}

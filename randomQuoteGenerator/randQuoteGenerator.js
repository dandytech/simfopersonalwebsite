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

function getNewRandomQuote() {
  fetch("https://api.quotable.io/quotes/random")
    .then((response) => {
      // Check HTTP status
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("No quote returned from API");
      }

      const colorCombo = getRandomColorCombo();

      document.getElementById("random-quote-generator").style.background =
        "linear-gradient(45deg, " + colorCombo[0] + ", " + colorCombo[1] + ")";
      const quote = data[0];
      const quoteText = quote.content;
      const quoteAuthor = quote.author;
      document.getElementById("random-quote-text").innerHTML =
        '"' + quoteText + '"';
      document.getElementById("random-quote-author").innerHTML = quoteAuthor;
    })
    .catch((error) => {
      alert("Fetch error:", error.message);
    });
}

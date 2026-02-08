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

      const quote = data[0];
      const quoteText = quote.content;
      const quoteAuthor = quote.author;
      document.getElementById("random-quote-text").innerHTML = quoteText;
      document.getElementById("random-quote-author").innerHTML = quoteAuthor;
    })
    .catch((error) => {
      alert("Fetch error:", error.message);
    });
}

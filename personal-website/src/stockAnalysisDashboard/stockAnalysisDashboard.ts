
export async function analyzeStock(stockSymbolToAnalyze: string) {
  if (stockSymbolToAnalyze.length === 0) {
    alert("You must put in a ticket symbol before running the analysis");
    return;
  }
  const url = `http://127.0.0.1:5000/analyze-stock/${stockSymbolToAnalyze}`;

  console.log("Running");
  const response = await fetch(url);
  if (!response.ok) {
    alert("Something went wrong, there was a problem getting your stock");
  }
  const data = await response.json();
  return data;
}

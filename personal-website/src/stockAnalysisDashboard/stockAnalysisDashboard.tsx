function StockAnalysisDashboard() {
  async function runStockAnalysis() {
    alert("Function Called!");
  }

  return (
    <>
      <div>
        <div id="stock-analysis-dashboard-title">STOCK ANALYSIS DASHBOARD</div>

        <div id="stock-analysis-dashboard-subtitle">
          Put in a stock symbol you want to analyze (e.g. MSFT)
        </div>

        <input id="stock-analysis-dashboard-input" />

        <div id="stock-analysis-dashboard-data"></div>

        <button onClick={runStockAnalysis}>Analyze</button>
      </div>
    </>
  );
}

export default StockAnalysisDashboard;

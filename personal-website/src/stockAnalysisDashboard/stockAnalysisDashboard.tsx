import { useState } from "react";
import { analyzeStock } from "./stockAnalysisDashboard";

import SpinnerMini from "../spinnerMini";

function StockAnalysisDashboard() {
  const [stockData, setStockData] = useState();
  const [stockSymbol, setStockSymbol] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gotData, setGotData] = useState(false);

  function goBack() {
    setGotData(false);
    setIsLoading(false);
  }
  async function runStockAnalysis() {
    setIsLoading(true);
    const gotStockData = await analyzeStock(stockSymbol);
    if (gotStockData) {
      setStockData(gotStockData);
      setGotData(true);
      setIsLoading(false);
    } else {
      goBack();
    }
  }

  if (gotData) {
    return (
      <div>
        <button onClick={() => goBack()}>Back</button>
        <div>{JSON.stringify(stockData)}</div>
      </div>
    );
  }

  return (
    <>
      <div>
        <div id="stock-analysis-dashboard-title">STOCK ANALYSIS DASHBOARD</div>

        {isLoading ? (
          <div>
            <SpinnerMini />
          </div>
        ) : (
          <div>
            <div id="stock-analysis-dashboard-subtitle">
              Put in a stock symbol you want to analyze (e.g. MSFT)
            </div>

            <input
              value={stockSymbol}
              onChange={(e) => setStockSymbol(e.target.value)}
            ></input>

            <button onClick={() => runStockAnalysis()}>Analyze</button>
          </div>
        )}
      </div>
    </>
  );
}

export default StockAnalysisDashboard;

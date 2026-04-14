import { useState } from "react";
import {
  analyzeStock,
  VerticalAlignContainer,
  VerticalAlignContent,
  DashboardGridContainer,
  AnalysisContainer,
  AnalysisTitle,
  AnalysisText,
} from "./stockAnalysisDashboard";
import SpinnerMini from "../spinnerMini";
import "./stockAnalysisDashboard.css";
import DashboardGrid from "./dashboardGrid";

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
        <VerticalAlignContainer>
          <VerticalAlignContent>
            <DashboardGridContainer>
              <button onClick={() => goBack()}>Back</button>
              <div>
                <DashboardGrid stockData={stockData}></DashboardGrid>
              </div>
            </DashboardGridContainer>
          </VerticalAlignContent>
        </VerticalAlignContainer>
      </div>
    );
  }

  return (
    <VerticalAlignContainer>
      <VerticalAlignContent>
        <AnalysisContainer>
          <div id="stock-analysis-dashboard-title">
            <AnalysisTitle>STOCK ANALYSIS DASHBOARD</AnalysisTitle>
          </div>

          {isLoading ? (
            <div>
              <SpinnerMini />
            </div>
          ) : (
            <div>
              <div id="stock-analysis-dashboard-subtitle">
                <AnalysisText>
                  Put in a stock symbol you'd want to analyze (e.g. MSFT)
                </AnalysisText>
              </div>

              <input
                value={stockSymbol}
                onChange={(e) => setStockSymbol(e.target.value)}
              ></input>

              <button onClick={() => runStockAnalysis()}>Analyze</button>
            </div>
          )}
        </AnalysisContainer>
      </VerticalAlignContent>
    </VerticalAlignContainer>
  );
}

export default StockAnalysisDashboard;

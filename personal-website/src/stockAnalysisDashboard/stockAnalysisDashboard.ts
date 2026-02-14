import styled from "styled-components";

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

export const VerticalAlignContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const VerticalAlignContent = styled.div`
  display: table;
  vertical-align: middle;
  width: 100%;
`;

export const DashboardGridContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border: solid red 1px;
`;

export const DashboardGridContent = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 15px;
`;

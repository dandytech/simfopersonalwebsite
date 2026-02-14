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

export const PrimaryColor = "#467bb0";

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
`;

export const DashboardGridContent = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 15px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* vertically center items */
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const ChartContainer = styled.div`
  flex: 0 0 150px; /* fixed width for chart */
  height: 100%;
  width: 55%;
`;

export const TitleContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`;

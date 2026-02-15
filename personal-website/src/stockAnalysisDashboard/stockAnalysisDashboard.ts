import styled from "styled-components";

export async function analyzeStock(stockSymbolToAnalyze: string) {
  if (stockSymbolToAnalyze.length === 0) {
    alert("You must put in a ticket symbol before running the analysis");
    return;
  }
  //Local host
  // const url = `http://127.0.0.1:5000/analyze-stock/${stockSymbolToAnalyze}`;

  //Subnet
  //const url = `http://10.157.178.163:5000/analyze-stock/${stockSymbolToAnalyze}`;

  //ngrok (Internet)
  // const url = `https://matrimonially-dodecahedral-keva.ngrok-free.dev/analyze-stock/${stockSymbolToAnalyze}`;

  //Production (render.com)
  const url = `https://text-analysis-tools.onrender.com/analyze-stock/${stockSymbolToAnalyze}`;

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
  width: 50%;
`;

export const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`;

// --- Container ---
export const AnalysisContainer = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;

  /* Style all inputs inside */
  input {
    width: 100%;
    padding: 0.5rem 0;
    font-size: 18px;
    background: transparent;
    border: none;
    border-bottom: 2px solid #f9fbfe;
    color: white;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: #10b981;
    }

    &::placeholder {
      color: #d0137e;
    }
  }
`;

// --- Title ---
export const AnalysisTitle = styled.div`
  font-size: 40px;
  font-weight: bolder;
  /* color: #f77e05; */
  color: #fdfcfb;
  font-family: "Segoe UI", Roboto, sans-serif;
  letter-spacing: 1px;
  text-align: center;
`;

// --- Text ---
export const AnalysisText = styled.div`
  font-size: 20px;
  color: #fbf7f7; /* light gray text */
  font-weight: 500;
  font-family: "Segoe UI", Roboto, sans-serif;
  text-align: center;
  line-height: 1;
  font-weight: bold;
`;

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
  type TooltipItem,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import {
  ChartContainer,
  FlexRow,
  TitleContainer,
} from "./stockAnalysisDashboard";
import NumberStat from "./numberStat";

ChartJS.register(ArcElement, Tooltip, Legend);

// --- Type definitions ---
interface SentimentData {
  pos: number;
  neu: number;
  neg: number;
}

interface NewsTextAnalysis {
  data: {
    sentiment: SentimentData;
  };
  metadata: {
    sentencesAnalyzed: number;
    wordsAnalyzed: number;
  };
}

interface SentimentDoughnutChartProps {
  newsTextAnalysis: NewsTextAnalysis;
}

// --- Styled component ---
const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

// --- Component ---
function NewsSentimentAnalysis({
  newsTextAnalysis,
}: SentimentDoughnutChartProps) {
  const sentiment = newsTextAnalysis.data.sentiment;

  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [sentiment.pos, sentiment.neu, sentiment.neg],
        backgroundColor: ["#10B981", "#9CA3AF", "#EF4444"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          padding: 20,
          usePointStyle: true,
        },
        align: "center",
        maxHeight: 0,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"doughnut">) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
    cutout: "55%",
  };

  return (
    <ChartWrapper>
      <FlexRow>
        <ChartContainer>
          <Doughnut data={data} options={options} />
        </ChartContainer>
        <TitleContainer>
          <h3>News Text Analysis</h3>
          <div>
            <NumberStat
              value={newsTextAnalysis.metadata.sentencesAnalyzed}
              label="Sentences Analyzed"
            />
          </div>
          <div>
            <NumberStat
              value={newsTextAnalysis.metadata.wordsAnalyzed}
              label="Words Analyzed"
            />
          </div>
        </TitleContainer>
      </FlexRow>
    </ChartWrapper>
  );
}

export default NewsSentimentAnalysis;

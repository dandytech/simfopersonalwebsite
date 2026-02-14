import { PrimaryColor } from "./stockAnalysisDashboard";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);

function LineChartContent({ primaryHistory }: { primaryHistory: any }) {
  const lineChartData = {
    labels: primaryHistory.date,
    datasets: [
      {
        data: primaryHistory.price,
        borderColor: PrimaryColor,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  return (
    <Line
      data={lineChartData}
      options={{
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Historical Stock Price",
          },

          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
export default LineChartContent;

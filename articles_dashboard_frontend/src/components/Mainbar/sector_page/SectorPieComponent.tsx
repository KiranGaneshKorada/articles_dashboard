import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useSectorPieComponent from "./useSectorPieComponent";

ChartJS.register(ArcElement, Tooltip, Legend);

export function SectorPieComponent() {

  const { each_sector_related_articles_count, error, isLoading } =
    useSectorPieComponent();

  const Sector = [
    "Aerospace & defence",
    "Automotive",
    "Construction",
    "Energy",
    "Environment",
    "Financial services",
    "Food & agriculture",
    "Government",
    "Healthcare",
    "Information Technology",
    "Manufacturing",
    "Media & entertainment",
    "Retail",
    "Security",
    "Support services",
    "Tourism & hospitality",
    "Transport",
    "Water",
  ];

  const data = {
    labels: each_sector_related_articles_count?.Data.map((sector)=>sector.sector),
    datasets: [
      {
        label: "related news",
        data: each_sector_related_articles_count?.Data.map((sector)=>sector.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(220, 20, 60, 0.6)",
          "rgba(0, 128, 0, 0.6)",
          "rgba(128, 0, 128, 0.6)",
          "rgba(255, 215, 0, 0.6)",
          "rgba(255, 69, 0, 0.6)",
          "rgba(0, 255, 255, 0.6)",
          "rgba(139, 69, 19, 0.6)",
          "rgba(0, 0, 255, 0.6)",
          "rgba(218, 165, 32, 0.6)",
          "rgba(75, 0, 130, 0.6)",
          "rgba(240, 230, 140, 0.6)",
          "rgba(255, 192, 203, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(220, 20, 60, 0.2)",
          "rgba(0, 128, 0, 0.2)",
          "rgba(128, 0, 128, 0.2)",
          "rgba(255, 215, 0, 0.2)",
          "rgba(255, 69, 0, 0.2)",
          "rgba(0, 255, 255, 0.2)",
          "rgba(139, 69, 19, 0.2)",
          "rgba(0, 0, 255, 0.2)",
          "rgba(218, 165, 32, 0.2)",
          "rgba(75, 0, 130, 0.2)",
          "rgba(240, 230, 140, 0.2)",
          "rgba(255, 192, 203, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}

SectorPieComponent;

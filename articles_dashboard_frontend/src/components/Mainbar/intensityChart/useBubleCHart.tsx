import { useQuery } from "react-query";
import baseApiUrl from "../../../backend_api/baseurl";

interface BubbleChartComponent {
  Data: [
    string,
    { intensity__avg: number; impact__avg: number; likelihood__avg: number }
  ][];
}

const useBubbleChart = () => {
  const {
    data: each_topic_count,
    error,
    isLoading,
  } = useQuery<BubbleChartComponent, Error>({
    queryKey: ["BubbleChartComponent"],
    queryFn: () =>
      baseApiUrl
        .get("get_numeric_analysis_buble")
        .then((response) => response.data),
  });

  return { each_topic_count, error, isLoading };
};

export default useBubbleChart;

import { useQuery } from "react-query";
import baseApiUrl from "../../../backend_api/baseurl";

interface StackedBarComponent {
  Data: [string, { intensity__avg: number }][];
}

const useStackedBar = () => {
  const {
    data: intensity_region,
    error,
    isLoading,
  } = useQuery<StackedBarComponent, Error>({
    queryKey: ["StackedBarComponent"],
    queryFn: () =>
      baseApiUrl
        .get("get_intensity_vs_region")
        .then((response) => response.data),
  });

  return { intensity_region, error, isLoading };
};

export default useStackedBar;

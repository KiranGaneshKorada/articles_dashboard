import { useQuery } from "react-query";
import baseApiUrl from "../../../backend_api/baseurl";

interface YearBarCountComponent {
  Data: [string, number][];
}

const useYearBarCount = () => {
  const {
    data: year_count,
    error,
    isLoading,
  } = useQuery<YearBarCountComponent, Error>({
    queryKey: ["YearBarCountComponent"],
    queryFn: () =>
      baseApiUrl
        .get("get_published_records_per_year")
        .then((response) => response.data),
  });

  return { year_count, error, isLoading };
};

export default useYearBarCount;

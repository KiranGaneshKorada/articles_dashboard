import { useQuery } from "react-query";
import baseApiUrl from "../../../backend_api/baseurl";

interface CountryCountComponent {
  Data: [string, number][];
}

const useCountryCount = () => {
  const {
    data: country_count,
    error,
    isLoading,
  } = useQuery<CountryCountComponent, Error>({
    queryKey: ["CountryCountComponent"],
    queryFn: () =>
      baseApiUrl.get("get_countries_count").then((response) => response.data),
  });

  return { country_count, error, isLoading };
};

export default useCountryCount;

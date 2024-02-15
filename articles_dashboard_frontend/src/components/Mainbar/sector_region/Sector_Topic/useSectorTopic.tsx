import { useQuery } from "react-query";
import baseApiUrl from "../../../../backend_api/baseurl";

interface Sector_Topic_Donut {
  Data: [string, number][];
}

const useSectorTopic = (field: string) => {
  const {
    data: field_count,
    error,
    isLoading,
  } = useQuery<Sector_Topic_Donut, Error>({
    queryKey: ["Sector_Topic_Donut", field],
    queryFn: () =>
      baseApiUrl
        .get("get_field_count", { params: { field: field } })
        .then((response) => response.data),
  });

  return { field_count, error, isLoading };
};

export default useSectorTopic;

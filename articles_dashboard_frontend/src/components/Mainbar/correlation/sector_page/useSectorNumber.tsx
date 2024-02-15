import { useQuery } from "react-query";
import baseApiUrl from "../../../../backend_api/baseurl";

interface SectorNumberComponent {
  Data: {
    sector: string;
    count: {
      intensity__max: number;
      intensity__avg: number;
      intensity__min: number;
      impact__max: number;
      impact__avg: number;
      impact__min: number;
      relevance__max: number;
      relevance__avg: number;
      relevance__min: number;
      likelihood__max: number;
      likelihood__avg: number;
      likelihood__min: number;
    };
  }[];
}

const useSectorNumber = () => {
  const {
    data: each_sector_number_aggregations,
    error,
    isLoading,
  } = useQuery<SectorNumberComponent, Error>({
    queryKey: ["SectorNumberComponent"],
    queryFn: () =>
      baseApiUrl.get("get_numeric_analysis").then((response) => response.data),
  });

  return { each_sector_number_aggregations, error, isLoading };
};

export default useSectorNumber;

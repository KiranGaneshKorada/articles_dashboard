import { useQuery } from "react-query";
import baseApiUrl from "../../backend_api/baseurl";


interface SectorPieComponent{
    Data:{"sector":string,"count":number}[];
}


const useSectorPieComponent=()=>{
    const {
      data: each_sector_related_articles_count,
      error,
      isLoading,
    } = useQuery<SectorPieComponent, Error>({
      queryKey: ["SectorPieComponent"],
      queryFn: () =>
        baseApiUrl.get("get_sectors_count").then((response) => response.data),
    });

    return {each_sector_related_articles_count,error,isLoading}
}

export default useSectorPieComponent;
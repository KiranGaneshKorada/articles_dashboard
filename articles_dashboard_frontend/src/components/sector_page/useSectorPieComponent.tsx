import { useQuery } from "react-query";
import baseApiUrl from "../../backend_api/baseurl";


interface SectorPieComponent{
    Data:{string:number}[];
}


const useSectorPieComponent=()=>{
    const{data,error,isLoading}=useQuery<SectorPieComponent,Error>({
        queryKey:["SectorPieComponent"],
        queryFn:()=>baseApiUrl.get("get_sector_count").then((response)=>response.data),
    })

    return {data,error,isLoading}
}

export default useSectorPieComponent;
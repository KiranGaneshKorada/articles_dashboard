import Chart from "react-google-charts";
import useYearBarCount from "./useYearBarCount";


const YearBarCount = () => {
    const{year_count,error,isLoading}=useYearBarCount()
    const data = year_count?.Data

    const options = {
      chart: {
        title: "Published articles throught year",
        subtitle: "Year, Publication count ",
      },
    };
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default YearBarCount
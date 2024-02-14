import Chart from "react-google-charts";
import useCountryCount from "./useCountryCount";

const CountryChart = () => {
    const{country_count,error,isLoading}=useCountryCount()
    const data = country_count?.Data
    const options = {
      colorAxis: { colors: ["#00853f",  "#e31b23","black","blue","orange","green","violet"] },
    //   datalessRegionColor: "#f8bbd0",
    //   defaultColor: "#f5f5f5",
    };
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            if(data!=undefined){
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
            }
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default CountryChart;
import { Chart } from "react-google-charts";
import useStackedBar from "./useStackedBar";




export function StackedBarComponent() {
    const {intensity_region,error,isLoading}=useStackedBar()
    const data = intensity_region?.Data.map((each)=>([each[0],each[1].intensity__avg]))
    console.log(data)

    const options = {
      title: "Population of Largest U.S. Cities",
      chartArea: { width: "50%" },
      isStacked: true,
      hAxis: {
        title: "Total Population",
        minValue: 0,
      },
      vAxis: {
        title: "City",
      },
    };
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

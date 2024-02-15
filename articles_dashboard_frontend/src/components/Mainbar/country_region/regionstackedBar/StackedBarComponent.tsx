import { Chart } from "react-google-charts";
import useStackedBar from "./useStackedBar";




export function StackedBarComponent() {
    const {intensity_region,error,isLoading}=useStackedBar()
    const data = intensity_region?.Data.map((each)=>([each[0],each[1].intensity__avg]))
    console.log(data)

    const options = {
      title: "",
      chartArea: { width: "50%" },
      isStacked: true,
      hAxis: {
        title: "Articles",
        minValue: 0,
      },
      vAxis: {
        title: "Regions",
      },
    };
  return (
    <>
      {error && <p>Error Occured</p>}
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </>
  );
}

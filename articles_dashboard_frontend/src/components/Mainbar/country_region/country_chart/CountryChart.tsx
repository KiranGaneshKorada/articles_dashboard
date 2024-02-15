import Chart from "react-google-charts";
import useCountryCount from "./useCountryCount";

const CountryChart = () => {
    const{country_count,error,isLoading}=useCountryCount()
    const data = country_count?.Data
    const options = {
      colorAxis: {
        colors: [
          "orange",
          "blue",
          "red",
          "green",
          "yellow",
          "pink",
          "violet",
          "gray",
          "gray",
          "gray",
          "gray",
          "gray",
          "gray",
          "gray",
          "gray",
          "gray",
        ],
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
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              if (data != undefined) {
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
    </>
  );
}

export default CountryChart;
import Chart from "react-google-charts";
import useYearBarCount from "./useYearBarCount";

const YearBarCount = () => {
  const { year_count, error, isLoading } = useYearBarCount();
  const data = year_count?.Data;

  const options = {
    chart: {
      title: "Published articles throught year",
      curveType: "function",
      legend: { position: "bottom" },
    },
  };
  return (
    <>
      <div className="d-flex justify-content-start m-2 p-0 fw-bold fs-5 navbar-anchor-css1">
        TimeLine
      </div>
      <div className="container-fluid border border-black p-2 m-2">
        {error && <p>Error Occured</p>}
        {isLoading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <div className="d-flex justify-content-center m-2 p-0 fw-bolder">
          Timeline of Articles published
        </div>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </>
  );
};

export default YearBarCount;

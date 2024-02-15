import { StackedBarComponent } from "./regionstackedBar/StackedBarComponent";
import CountryChart from "./country_chart/CountryChart";

const CountryRegion = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-start m-2 p-0 fw-bold fs-5 navbar-anchor-css1">
        Country and Region
      </div>
      <div className="border border-black p-2 m-3">
        <div className="d-flex justify-content-center m-2 p-0 fw-bolder">
          Articles published among various Countries
        </div>
        <CountryChart />
      </div>
      <div className="border border-black p-2 m-3">
        <div className="d-flex justify-content-center m-2 p-0 fw-bolder">
          Articles published among various Regions
        </div>
        <StackedBarComponent />
      </div>
    </div>
  );
};

export default CountryRegion;

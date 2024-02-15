import { StackedBarComponent } from "./regionstackedBar/StackedBarComponent";
import CountryChart from "./country_chart/CountryChart";

const CountryRegion = () => {
  return (
    <div className="container-fluid">
      <div>
        <CountryChart />
      </div>
      <div>
        <StackedBarComponent />
      </div>
    </div>
  );
};

export default CountryRegion;

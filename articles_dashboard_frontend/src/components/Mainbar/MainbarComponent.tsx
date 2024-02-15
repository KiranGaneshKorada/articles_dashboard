import { Sector_Topic_Donut } from "./Sector_Topic/Sector_Topic_Donut";
import { StackedBarComponent } from "./StackedBar/StackedBarComponent";
import CountryChart from "./country_chart/CountryChart";
import { NumericalIntensity } from "./intensityChart/NumericalIntensity";
import SectorNumberComponent from "./sector_page/SectorNumberComponent";
import YearBarCount from "./year_count/YearBarCount";

const MainbarComponent = () => {
  return (
    <div className="col m-0 p-0">
      <div><Sector_Topic_Donut/></div>
      <div><CountryChart/></div>
      <div><NumericalIntensity/></div>
      <div><StackedBarComponent/></div>
      <div className="container-fluid">
        <SectorNumberComponent />
      </div>
      <div><YearBarCount/></div>
    </div>
  );
};

export default MainbarComponent;

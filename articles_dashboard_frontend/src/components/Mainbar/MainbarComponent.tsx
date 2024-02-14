import CountryChart from "./country_chart/CountryChart";
import SectorNumberComponent from "./sector_page/SectorNumberComponent";
import { SectorPieComponent } from "./sector_page/SectorPieComponent";
import TopicPieComponent from "./topic_page/TopicPieComponent";
import YearBarCount from "./year_count/YearBarCount";

const MainbarComponent = () => {
  return (
    <div className="col m-0 p-0">
      <div><CountryChart/></div>
      <div className="container w-50">
        <h4>Sector Related Info</h4>
        <SectorPieComponent />
      </div>
      <div className="container w-50">
        <h4>Topic Related Info</h4>
        <TopicPieComponent />
      </div>
      <div className="container-fluid">
        <SectorNumberComponent />
      </div>
      <div><YearBarCount/></div>
    </div>
  );
};

export default MainbarComponent;

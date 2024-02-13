import SectorNumberComponent from "./sector_page/SectorNumberComponent";
import { SectorPieComponent } from "./sector_page/SectorPieComponent";

const MainbarComponent = () => {
  return (
    <div className="col m-0 p-0">
      <div className="container-fluid">
        <h4>Sector Related Info</h4>
        <SectorPieComponent />
      </div>
      <div className="container-fluid">
        <SectorNumberComponent />
      </div>
    </div>
  );
};

export default MainbarComponent;

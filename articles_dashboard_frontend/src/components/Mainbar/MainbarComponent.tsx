import { SectorPieComponent } from "../sector_page/SectorPieComponent";


const MainbarComponent = () => {
  return (
    <div className="row">
      <div className="col-6">
        <h4>chART</h4>
        <SectorPieComponent />
      </div>
    </div>
  );
};

export default MainbarComponent;

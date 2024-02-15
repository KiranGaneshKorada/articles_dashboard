import { NumericalIntensity } from "./intensityChart/NumericalIntensity";
import SectorNumberComponent from "./sector_page/SectorNumberComponent";

const Correlation = () => {
  return (
    <div>
      <div>
        <NumericalIntensity />
      </div>
      <div>
        <SectorNumberComponent />
      </div>
    </div>
  );
};

export default Correlation;

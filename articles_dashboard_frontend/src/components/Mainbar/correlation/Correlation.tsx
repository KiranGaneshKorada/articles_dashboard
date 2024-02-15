import { NumericalIntensity } from "./intensityChart/NumericalIntensity";
import SectorNumberComponent from "./sector_page/SectorNumberComponent";

const Correlation = () => {
  return (
    <div>
      <div className="d-flex justify-content-start m-2 p-0 fw-bold fs-5 navbar-anchor-css1">
        Correlation
      </div>
      <div className="container-fluid border border-black p-2 m-2">
        <div className="d-flex justify-content-center m-2 p-0 fw-bolder">
          Intensity, Imapct, Relevance
        </div>
        <NumericalIntensity />
      </div>
      <div className="container-fluid border border-black p-2 m-2 mt-3">
        <div className="d-flex justify-content-center m-2 p-0 mb-5 fw-bolder">
          Max, Min, Avg values of Intensity, Imapct, Relevance, Likelihood of
          various Sectors
        </div>
        <SectorNumberComponent />
      </div>
    </div>
  );
};

export default Correlation;

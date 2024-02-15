import { Sector_Topic_Donut } from "./Sector_Topic/Sector_Topic_Donut";

const SectorTopic = () => {
  return (
    <>
      <div className="d-flex justify-content-start m-2 p-0 fw-bold fs-5 navbar-anchor-css1">
        Sector and Topic
      </div>
      <div className="container-fluid border border-black p-2 m-2">
        <div className="d-flex justify-content-center m-2 p-0 fw-bolder">
          Articles published among various Sectors and Topics
        </div>
        <Sector_Topic_Donut />
      </div>
    </>
  );
};

export default SectorTopic;

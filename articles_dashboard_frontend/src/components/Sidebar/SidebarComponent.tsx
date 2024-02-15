import { Link } from "react-router-dom";

const SidebarComponent = () => {
  return (
    <div className="">
      <div>
        <div className="card m-1">
          <Link
            className="btn btn-outline-dark navbar-anchor-css navbar-css"
            to={`country_region`}
            
          >
            Country and Region
          </Link>
        </div>
        <div className="card m-1">
          <Link
            className="btn btn-outline-dark navbar-anchor-css navbar-css "
            to={`sector_topic`}
            
          >
            Sector and Topic
          </Link>
        </div>
        <div className="card m-1">
          <Link
            className="btn btn-outline-dark navbar-anchor-css navbar-css "
            to={`timeline`}
          >
            TimeLine
          </Link>
        </div>
        <div className="card m-1">
          <Link
            className="btn btn-outline-dark navbar-anchor-css navbar-css"
            to={`correlation`}
          >
            Correlation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;

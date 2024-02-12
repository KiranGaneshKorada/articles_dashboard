const SidebarComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-css">
        <div className="container-fluid">
          <a className="navbar-brand navbar-anchor-css" href="#">
            Dashboard
          </a>
        </div>
      </nav>

      <div>
        <div className="card m-1">
          <div className="card-body p-2 ">Sector</div>
        </div>
        <div className="card">
          <div className="card-body">Pestle</div>
        </div>
        <div className="card">
          <div className="card-body">Country</div>
        </div>
        <div className="card">
          <div className="card-body">Region</div>
        </div>
        <div className="card">
          <div className="card-body">Topic</div>
        </div>
        <div className="card">
          <div className="card-body">Source</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;

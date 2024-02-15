import useSectorNumber from "./useSectorNumber";

const SectorNumberComponent = () => {
  const { each_sector_number_aggregations, error, isLoading } =
    useSectorNumber();
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Intensity</h5>
              {each_sector_number_aggregations?.Data.map((each) => (
                <div className="card-text">
                  <div>{each.sector}</div>
                  <div className="col">
                    <span className="badge text-bg-success">
                      high{each.count.intensity__max.toFixed(2)}
                    </span>
                    <span className="badge text-bg-warning">
                      Avg{each.count.intensity__avg.toFixed(2)}
                    </span>
                    <span className="badge text-bg-danger">
                      low{each.count.intensity__min.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Impact</h5>
              {each_sector_number_aggregations?.Data.map((each) => (
                <div className="card-text">
                  <div>{each.sector}</div>
                  <div className="col">
                    <span className="badge text-bg-success">
                      high{each.count.impact__max}
                    </span>
                    <span className="badge text-bg-warning">
                      Avg{each.count.impact__avg.toFixed(3)}
                    </span>
                    <span className="badge text-bg-danger">
                      low{each.count.impact__min}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            {" "}
            <div className="card-body">
              <h5 className="card-title">Relevance</h5>
              {each_sector_number_aggregations?.Data.map((each) => (
                <div className="card-text">
                  <div>{each.sector}</div>
                  <div className="col">
                    <span className="badge text-bg-success">
                      high{each.count.relevance__max.toFixed(2)}
                    </span>
                    <span className="badge text-bg-warning">
                      Avg{each.count.relevance__avg.toFixed(2)}
                    </span>
                    <span className="badge text-bg-danger">
                      low{each.count.relevance__min.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            {" "}
            <div className="card-body">
              <h5 className="card-title">Likelihood</h5>
              {each_sector_number_aggregations?.Data.map((each) => (
                <div className="card-text">
                  <div>{each.sector}</div>
                  <div className="col">
                    <span className="badge text-bg-success">
                      high{each.count.likelihood__max.toFixed(2)}
                    </span>
                    <span className="badge text-bg-warning">
                      Avg{each.count.likelihood__avg.toFixed(2)}
                    </span>
                    <span className="badge text-bg-danger">
                      low{each.count.likelihood__min.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectorNumberComponent;

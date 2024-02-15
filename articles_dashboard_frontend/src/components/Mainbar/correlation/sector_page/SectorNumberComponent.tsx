import useSectorNumber from "./useSectorNumber";

const SectorNumberComponent = () => {
  const { each_sector_number_aggregations, error, isLoading } =
    useSectorNumber();
  return (
    <>
      {error && <p>Error Occured</p>}
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-center fw-bolder fs-4 card-title">Intensity</div>
              {each_sector_number_aggregations?.Data.map((each) => (
                <div className="card-text border border-black m-1 p-1">
                  <div>{each.sector}</div>
                  <div className="col">
                    <span className="badge text-bg-success m-1">
                      high {each.count.intensity__max.toFixed(2)}
                    </span>
                    <span className="badge text-bg-warning m-1">
                      Avg {each.count.intensity__avg.toFixed(2)}
                    </span>
                    <span className="badge text-bg-danger m-1">
                      low {each.count.intensity__min.toFixed(2)}
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
              <div className="d-flex justify-content-center fw-bolder fs-4 card-title">Impact</div>
              {each_sector_number_aggregations?.Data.map((each) => (
                <div className="card-text border border-black m-1 p-1">
                  <div>{each.sector}</div>
                  <div className="col">
                    <span className="badge text-bg-success m-1">
                      high {each.count.impact__max}
                    </span>
                    <span className="badge text-bg-warning m-1">
                      Avg {each.count.impact__avg.toFixed(3)}
                    </span>
                    <span className="badge text-bg-danger m-1">
                      low {each.count.impact__min}
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
              <div className="d-flex justify-content-center fw-bolder fs-4 card-title">Relevance</div>
              {each_sector_number_aggregations?.Data.map((each) => (
                <div className="card-text border border-black m-1 p-1">
                  <div>{each.sector}</div>
                  <div className="col">
                    <span className="badge text-bg-success m-1">
                      high {each.count.relevance__max.toFixed(2)}
                    </span>
                    <span className="badge text-bg-warning m-1">
                      Avg {each.count.relevance__avg.toFixed(2)}
                    </span>
                    <span className="badge text-bg-danger m-1">
                      low {each.count.relevance__min.toFixed(2)}
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
              <div className="d-flex justify-content-center fw-bolder fs-4 card-title">Likelihood</div>
              {each_sector_number_aggregations?.Data.map((each) => (
                <div className="card-text border border-black m-1 p-1">
                  <div>{each.sector}</div>
                  <div className="col">
                    <span className="badge text-bg-success m-1">
                      high {each.count.likelihood__max.toFixed(2)}
                    </span>
                    <span className="badge text-bg-warning m-1">
                      Avg {each.count.likelihood__avg.toFixed(2)}
                    </span>
                    <span className="badge text-bg-danger m-1">
                      low {each.count.likelihood__min.toFixed(2)}
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

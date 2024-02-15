import { useState } from "react";
import { Chart } from "react-google-charts";
import useSectorTopic from "./useSectorTopic";

export function Sector_Topic_Donut() {

  const [field,setField]=useState('sector');

  const{field_count,error,isLoading}=useSectorTopic(field);

  console.log(field_count)

  const data = field_count?.Data

  const options = {
    title: `Articles published among various : ${field}`,
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <>
      {error && <p>Error Occured</p>}
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <div>
        <div>
          <div className="dropdown d-flex justify-content-center m-3">
            <button
              className="btn dropdown-toggle navbar-css navbar-anchor-css"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Field : {field}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => {
                    setField("sector");
                  }}
                >
                  Sector
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => {
                    setField("topic");
                  }}
                >
                  Topic
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Chart
            chartType="PieChart"
            width="100%"
            height="700px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </>
  );
}

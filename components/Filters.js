import React from "react";

function Filters(props) {
  var dates = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  return (
    <>
      <h2>Filters</h2>
      <section className="sub-filter">
        <h3 className="centre-filter">Launch Year</h3>
        <div className="launch-year">
          {dates.map((item) => (
            <div className="year" key={item}>
              <input
                type="checkbox"
                id={item}
                name="launchyear"
                style={{ flexBasis: "50%" }}
                checked={item.toString() == props.filters.launch_year}
                onChange={(e) =>
                  props.changeFilters(
                    "launch_year",
                    e.target.checked ? item : null
                  )
                }
              ></input>
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      </section>
      <section className="sub-filter">
        <h3 className="centre-filter">Successful Launch</h3>
        <div className="launch-year">
          <div className="year">
            <input
              type="checkbox"
              id="launch1"
              name="launchsuccess"
              checked={props.filters.launch_success === "true"}
              onChange={(e) =>
                props.changeFilters(
                  "launch_success",
                  e.target.checked ? "true" : null
                )
              }
            ></input>
            <label htmlFor="launch1">True</label>
          </div>

          <div className="year">
            <input
              type="checkbox"
              id="launch2"
              name="launchsuccess"
              checked={props.filters.launch_success === "false"}
              onChange={(e) =>
                props.changeFilters(
                  "launch_success",
                  e.target.checked ? "false" : null
                )
              }
            ></input>
            <label htmlFor="launch2">False</label>
          </div>
        </div>
      </section>
      <section className="sub-filter">
        <h3 className="centre-filter">Successful Landing</h3>
        <div className="launch-year">
          <div className="year">
            <input
              type="checkbox"
              id="landing1"
              name="landsuccess"
              checked={props.filters.land_success === "true"}
              onChange={(e) =>
                props.changeFilters(
                  "land_success",
                  e.target.checked ? "true" : null
                )
              }
            ></input>
            <label htmlFor="landing1">True</label>
          </div>
          <div className="year">
            <input
              type="checkbox"
              id="landing2"
              name="landsuccess"
              onChange={(e) =>
                props.changeFilters(
                  "land_success",
                  e.target.checked ? "false" : null
                )
              }
              checked={props.filters.land_success === "false"}
            ></input>
            <label htmlFor="landing2">False</label>
          </div>
        </div>
      </section>
    </>
  );
}

export default Filters;

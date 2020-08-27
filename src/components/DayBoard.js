import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const DayBoard = ({ dayInfo }) => {
  
  let date = new Date();
  const weekday = dayInfo.dt * 1000;
  date.setTime(weekday);

  const temp_celsius = Math.round(dayInfo.main.temp - 273.15);
  const maxTemp_celsius = Math.round(dayInfo.main.temp_max - 273.15);
  const minTemp_celsius = Math.round(dayInfo.main.temp_min - 273.15);

  const imgURL = `owf owf-${dayInfo.weather[0].id} owf-5x`;

  return (
    <div className="col-md-2 col-sm-12">
      <div className="card">
        <div className="card-title">{moment(date).format("dddd")}</div>
        <p className="text-muted">{moment(date).format("MMMM Do, h:mm a")}</p>
        <i className={imgURL}></i>
        <h5>Temp: {temp_celsius + "°C"}</h5>
        <h5>MaxTemp: {maxTemp_celsius + "°C"}</h5>
        <h5>MinTemp: {minTemp_celsius + "°C"}</h5>
        <div>
          <Link
            to={{
              pathname: `/${moment(date).format("dddd")}`,
              aboutProps: {
                day: dayInfo,
              },
            }}
            className="btn btn-primary btn-lg btn-block"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DayBoard;

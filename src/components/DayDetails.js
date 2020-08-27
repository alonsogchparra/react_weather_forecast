import React from "react";
import moment from "moment";

const DayDetails = (props) => {

  let date = new Date();
  const info = props.location.aboutProps.day;
  const weekday = info.dt * 1000;
  date.setTime(weekday);

  const temp_celsius = Math.round(info.main.temp - 273.15);
  const maxTemp_celsius = Math.round(info.main.temp_max - 273.15);
  const minTemp_celsius = Math.round(info.main.temp_min - 273.15);

  const imgURL = `owf owf-${info.weather[0].id} owf-5x`;

  const backToMainView = () => {
    props.history.push("/");
  };

  return (
    <div>
      <h1>Day Detail</h1>
      <h3>Day: {moment(date).format("dddd")}</h3>
      <i className={imgURL}></i>
      <h3>{info.weather[0].description}</h3>
      <h5>Temperature: {temp_celsius + "°C"}</h5>
      <h5>Max.Temp: {maxTemp_celsius + "°C"}</h5>
      <h5>Min.Temp: {minTemp_celsius + "°C"}</h5>
      <h5>Wind Speed: {info.wind.speed + " meter/sec"}</h5>
      <p className="text-muted">{moment(date).format("MMMM Do, h:mm a")}</p>
      <button onClick={() => backToMainView()} className="btn btn-danger">
        Back to Main View
      </button>
    </div>
  );
};
export default DayDetails;
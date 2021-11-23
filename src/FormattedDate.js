import React from "react";

export default function FormattedDate(props) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[props.date.getDay()];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = months[props.date.getMonth()];
    let hours = props.date.getHours();
    let minutes = (props.date.getMinutes() < 10 ? "0" : "") + props.date.getMinutes();

    return (
        <div className= "formattedDate">
        {day}, {props.date.getDate()} {month} {hours}:{minutes}
        </div>
        );
    
}
import React from "react";
import FormattedDate from "./FormattedDate";

export default function CityDate(props) {
    return (
      <div className="cityDate">
        <h2 className="city">{props.data.cityName}</h2>
        <h4 className="currentDate">
          <FormattedDate date={props.data.dateHour} />
        </h4>
      </div>
    );
}
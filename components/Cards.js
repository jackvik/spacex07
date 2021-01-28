import React from "react";

function Cards(props) {
  const listItems = props.missionIds
    ? props.missionIds.map((id) => <li key={id.toString()}>{id}</li>)
    : [];
  return (
    <div className="grid-item">
      <img lazy="true"
        src={props.imgUrl}
        alt={props.missionName}
        style={{
          width: "100%",
          background: "#f2f2f2",
          height: "auto",
          minHeight: "150px",
        }}
      ></img>
      <p className="flight-name">
        {props.missionName} #{props.flightNumber}
      </p>
      <div className="grid-item-row">
        <h3>Mission Ids:</h3>
        <ul>{listItems}</ul>
      </div>
      <div className="grid-item-row">
        <h3>Launch Year:</h3>
        <p>{props.launchYear}</p>
      </div>
      <div className="grid-item-row">
        <h3>Successful Launch:</h3>
        <p>{props.launchSuccess}</p>
      </div>
      <div className="grid-item-row">
        <h3>Successful Landing:</h3>
        <p>{props.launchLanding}</p>
      </div>
    </div>
  );
}

export default Cards;

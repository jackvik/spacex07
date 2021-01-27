import React from 'react';
import Cards from "./Cards";
const CardList = ({ missions }) => {
    return (
        <div className="grid-row">
            {
                missions && missions.map((mission, index) => (
      <Cards
        key={index}
        missionIds={mission["mission_id"]}
        flightNumber={mission["flight_number"]}
        imgUrl={mission.links["mission_patch_small"]}
        missionName={mission["mission_name"]}
        launchYear={mission["launch_year"]}
        launchSuccess={mission["launch_success"] + ""}
        launchLanding={mission.rocket.first_stage.cores[0]["land_success"] + ""}
      />
    ))
            }
        </div>
    )
}

export default CardList;
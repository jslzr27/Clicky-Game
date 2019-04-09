import React from "react";
import "./style.css";

function TeamCard (props) {
    return (
        <div className="row"> 
        <div className="col s12">
        <div className="card" id="teamCard" onClick={() => props.pick(props.id)}>
            <div className="card-image">
                <img src={props.image} alt={props.name} id="teamImage" ></img>
            </div>
            {/* <h2>{props.name}</h2> */}
        </div>
        </div>
        </div>
    )
}

export default TeamCard;
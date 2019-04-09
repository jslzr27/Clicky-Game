import React from "react";
import TeamCard from "../Card";

function Header () {
    return(
        <div className="row">
        <div className="col s12">
            <div className="card-panel">
                <h1>Football Team Selector</h1>
                <h3>Click on the logo of a team to earn points</h3>
            </div>
        </div>
        </div>
    )
}

export default Header;
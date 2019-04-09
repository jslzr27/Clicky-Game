import React from "react";

function Score (props) {
    let textColor = [
        "blue-text",
        "pink-text",
        "teal-text",
        "orange-text",
        "light-green-text"
    ];
    let renderColor = textColor[Math.floor(Math.random() * textColor.length)];
    return(
        <h3><span className={renderColor}>Current Score: {props.currentScore} | Top Score: {props.highScore}</span></h3>
    )
}

export default Score;
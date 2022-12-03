import React from "react";
import "./ResetButton.css"

const ResetButton = ({ resetBoard, ScoreResetBoard }) => {
    return (
        <div>
            <button className="reset-btn" onClick={resetBoard}>Reset Board</button>
            <button className="reset-btn" onClick={ScoreResetBoard}>Full Reset</button>
        </div>
    )
};

export default ResetButton;

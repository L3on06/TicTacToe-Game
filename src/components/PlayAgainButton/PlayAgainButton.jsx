import React from "react";
import "../ResetButton/ResetButton.css"

const ResetButton = ({ PlayAgainButton }) => {

    return (
        <div>
            <button className="reset-btn" onClick={PlayAgainButton}>Play Again</button>
        </div>
    )
};

export default ResetButton;

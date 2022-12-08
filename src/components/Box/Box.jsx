import React from "react";
import './Box.css'

export const Box = ({ value, onClick }) => {
    const style = value === "X" ? "box x" : "box o";

    return (
        <button className={style} style={value ? { cursor: 'url("cursorPointerDone.svg"), pointer' } : { cursor: 'url("cursorPointerStart.svg"), pointer' }} onClick={onClick}>{value}</button>
    )
}

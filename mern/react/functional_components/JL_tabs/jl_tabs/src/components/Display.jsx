import React from "react";

export const Display = (props) => {
    const {tab} = props;
    const {isSelected, message} = tab;
    return (
        <div
            style={isSelected ? {height: "300px", width: "300px", border: "2px solid black"}: {display:"none"}}
        >
            {
                isSelected && <p>{message}</p>
            }
        </div>
    )
}
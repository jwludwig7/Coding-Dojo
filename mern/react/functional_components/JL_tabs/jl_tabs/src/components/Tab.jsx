import React from "react";

export const Tab = (props) => {
    const {tab, index, tabClickHandler} = props;
    const {name, isSelected} = tab;
    return (
        <button
            onClick={(e) => {
                tabClickHandler(e, index)
            }}


            style={ isSelected ? {backgroundColor: "black", color:'white'}: {backgroundColor:"white", color:"black"}}

            
            className="btn-group"
            role="group"
            key={index}
        >
            {name}
        </button>
    )
}
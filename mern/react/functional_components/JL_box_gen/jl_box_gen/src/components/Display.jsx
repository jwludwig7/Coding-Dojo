import React from 'react'

const Display = (props) => {
    return (
        <div>
            {/* {JSON.stringify(props)} */}
            {
                props.boxes.map((color, i) => {
                    return <div style={{ backgroundColor: color, width: "100px", height: "100px", display: "inline-block" }} key={i}>{color}</div>
                })
            }

        </div>
    )
}

export default Display
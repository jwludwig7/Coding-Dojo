import React from 'react'
import { useState } from 'react'

const Form = (props) => {

    //  state for the input

    const [colorName, setColorName] = useState("")

    const customFunction = (e) => {
        // console.log(e.target.value)
        setColorName(e.target.value)
    }

    // for form submit
    const submitHandler = (e) => {
        e.preventDefault()
        // console.log("first", colorName)
        props.addBoxColor({color: colorName})
        // clear state
        setColorName("")

    }

    return (
        <div>
            <p>
                form state {JSON.stringify(colorName)}
            </p>

            <form onSubmit={submitHandler}>
                {/* Name: <input onChange={(e) => setColorName(e.target.value)} /> <button>Add</button> */}
                {/* Name: <input type="color" onChange={customFunction} value={colorName}/> <button>Add</button> */}
                Name: <input onChange={customFunction} value={colorName}/> <button>Add</button>

            </form>

            <p></p>

        </div>
    )
}

export default Form
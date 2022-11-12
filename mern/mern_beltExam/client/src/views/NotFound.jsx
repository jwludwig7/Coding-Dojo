import React from "react";
import { Link } from "react-router-dom";
import ghost from '../views/images/ghost.png'

export const NotFound = (props) => {
    return (
        <div className="text-center">
            <h1 >Page not Found......</h1>
            <img src={ghost} alt="ghost 404" />
            <div>
            <button className="btn btn-sm btn-outline-secondary mx-auto"><Link to={'/pets'}>Home</Link></button>
            </div>
        </div>
    )
}
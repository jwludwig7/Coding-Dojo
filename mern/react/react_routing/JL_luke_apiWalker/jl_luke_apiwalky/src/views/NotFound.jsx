import React from 'react';
import obi from '../views/images/obi.png';

import {Home} from './Home'


export const NotFound = (props) => {
    

    return (
        <div>
            <Home/>
            <p>These are not the droids you are looking for </p>
            <img src={obi} alt="obi dood" />
            
        </div>
    )
}


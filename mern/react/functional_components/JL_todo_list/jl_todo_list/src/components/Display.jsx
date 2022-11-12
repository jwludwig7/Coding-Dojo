import React from 'react'
import List from './List';

const Display = ({ list, deleteHandler }) => {
    return (
        <div>
            <div>
                {
                    list.map((val, i) => 
                    <ul key={i}>
                        <List list={val} idx={i} deleteHandler={deleteHandler} />
                    </ul>
                    )
                }
            </div>
        </div>
    )
}

export default Display
import React, { useState } from 'react';
import Form from './Form';
import Display from './Display';

const ToDoList = (props) => {

    const [list, setList] = useState([
        "Pass Mern",
        "Pass C+",
        "Find Job"
    ]);

    const deleteHandler = (idx) => {
        let newList = list.filter((list, i) => {
            return i !== idx;
        });

        setList(newList);
    }

return (
    <div>
        <Form list={list} setList={setList} />
        <Display list={list} deleteHandler={deleteHandler} />
    </div>
    )
}

export default ToDoList
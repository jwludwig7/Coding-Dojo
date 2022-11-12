import React, {useState} from "react";
// const List = ({list, idx, deleteHandler}) => {
    const List = (props) => {
   
    // const [selectList, setSelectList] = useState(list[0]);
    const [isDone, setIsDone] = useState(false);

    return (
        <div>
            <p>
                <input type="checkbox" checked={isDone} onChange={(e) => setIsDone(e.target.checked)} />
                {props.list}
                <button onClick={(e) => {props.deleteHandler(props.idx)}}>Delete</button>
            </p>
        </div>
    )
}

export default List;

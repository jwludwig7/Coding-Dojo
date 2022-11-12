import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = (props) => {

    const [resource, setResource] = useState("people");
    const [selectedId, setSelectedId] = useState("1");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `/${resource}/${selectedId}`;

        console.log(url);
        navigate(url);
    }

    return (
        <div>
            <header>

                <form onSubmit={(event) => {
                    handleSubmit(event);
                }}>

                    <div className={"m-1 p-1"}>

                        <label className={" form-label"}> Search For:</label>
                        <select
                            name="select resource"
                            onChange={(e) => {
                                setResource(e.target.value);
                            }}>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                        </select>

                    {/* </div>
                    <div> */}
                        <label className={" form-label"}>ID </label>
                        <input
                            className={" form-control-sm"}
                            onChange={(e) => {
                                setSelectedId(e.target.value);
                            }}
                            type="number"
                            name="id input box"
                            />
                    <button className={" btn btn-primary"}>Search</button>
                </div>
                </form>
            </header>
        </div>
    )
}

// const [resource, setResource] = useState("people");
// const [selectedId, setSelectedId] = useState("1");
// const navigate = useNavigate();

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const url = `/${resource}/${selectedId}`;

//   console.log(url);
//   navigate(url);
// }


// {/* <header>

//           <form onSubmit={(event) => {
//             handleSubmit(event);
//           }}>
//             <div>

//               <label> Search For:</label>
//               <select
//                 name="select resource"
//                 onChange={(e) => {
//                   setResource(e.target.value);
//                 }}>
//                 <option value="people">People</option>
//                 <option value="planets">Planets</option>
//               </select>

//             </div>
//             <div>
//               <label>ID: </label>
//               <input
//                 onChange={(e) => {
//                   setSelectedId(e.target.value);
//                 }}
//                 type="number"
//                 name="id input box"
//               />
//             </div>
//             <button>Search</button>
//           </form>
//         </header> */}

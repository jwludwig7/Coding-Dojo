import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import {Home} from './Home'


export const People = (props) => {
    const [person, setPerson] = useState(null);
    const {id} = useParams();
    // const btnClick = (e) => {
    //     axios
    //     .get('https://swapi.dev/api/people/1')
    //     .then((res) => {
    //         console.log(res.data);
    //         setPerson(res.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }

    
    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/people/${id}`)
        .then((res) => {
            console.log(res.data);
            setPerson(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

    }, [id]);

    if (person === null) {
        return <p>Loading</p>;
    }

    return (
        <div>
            <Home/>
            <h2>Name: {person.name} </h2>
            <p>Height: {person.height} cm</p>
            <p>Mass: {person.mass} kg</p>
            <p>Hair Color: {person.hair_color}</p>  
            <p>Skin Color: {person.skin_color}</p>     
        </div>
    );
};



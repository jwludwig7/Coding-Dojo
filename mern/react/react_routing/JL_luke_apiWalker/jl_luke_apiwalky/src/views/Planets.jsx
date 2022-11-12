import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

import {Home} from './Home'

export const Planets = (props) => {
    const [planets, setPlanets] = useState(null);
    const {id} = useParams();

    // const btnClick = (e) => {
    //     axios
    //     .get('https://swapi.dev/api/planets/3/')
    //     .then((res) => {
    //         console.log(res.data);
    //         setPlanets(res.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }
    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then((res) => {
            console.log(res.data);
            setPlanets(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    if (planets === null) {
        return <p>Loading...</p> ;
    }

    return (
        <div>
            <Home/>
            <h2>Name: {planets.name}</h2>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Surface Water:{planets.surface_water}</p>
            <p>Population: {planets.population}</p>
        </div>
    );
};


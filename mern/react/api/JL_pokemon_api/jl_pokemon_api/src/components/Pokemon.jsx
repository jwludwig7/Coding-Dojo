import React, { useEffect, useState } from 'react';
import DisplayPokemon from './DisplayPokemon';
import axios from 'axios';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState(["testing"]);
    // const [visible, setVisible] = useState(false);

    // const onClickHandler = (e) => {
    //     setVisible(true);
    // }

    // useEffect((e) => {
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    //         .then(response => {
    //             return response.json();
    //         }).then(response => {
    //             setPokemon(response.results);
    //             console.log(response.results)
    //         }).catch(errors => {
    //             console.log(errors);
    //         })
    const btnClick = (e) => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(response=>{
            console.log(response);
            setPokemon(response.data.results)
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {

    }, []);
    
    return (
        <div>
            <button onClick={btnClick}>Fetch Pokemon</button>
            {/* {visible && pokemon ? <DisplayPokemon pokemon={pokemon} /> : null} */}
            <DisplayPokemon pokemon={pokemon}/>
        </div>
    )
}

export default Pokemon
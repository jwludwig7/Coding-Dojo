import React from 'react';

const DisplayPokemon = ({pokemon}) => {
    return (
        <div>
            <p>Pokemon Names</p>
            {
                pokemon.map((val, idx) => {
                    return <ul key={idx}>
                        {val.name}
                        </ul>
                })
            }
        </div>
    )
}

export default DisplayPokemon
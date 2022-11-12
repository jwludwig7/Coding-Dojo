import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getAllPets } from '../services/internalApiService';

const AllPets = () => {

    const [pets, setPets] = useState([]);

    useEffect((e) => {
        getAllPets()
            .then((data) => {
                setPets(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    return (
        <div>
            <table className='table tablee-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet, i) => {
                        const { _id, name, type } = pet;
                        return (
                            <tr key={i}>
                                <td>{name}</td>
                                <td>{type}</td>
                                <td>
                                    <Link to={`/pets/${_id}`}>details</Link> 
                                    |
                                    <Link to={`/pets/${_id}/edit`}>edit</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllPets
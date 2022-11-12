import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getPetById, deletePet } from '../services/internalApiService';

export const OnePet = (props) => {
    const { id } = useParams();

    const [pet, setPet] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        getPetById(id)
            .then((data) => {
                setPet(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleDeleteClick = () => {
        deletePet(id)
            .then((data) => {
                navigate('/pets')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const { _id, name, type, description, skill1, skill2, skill3 } = pet
    return (
        <>
            <div className='d-flex justify-content-between'>
                <div>
                    <h3>Pet Shelter</h3>
                    <h4>Details about: {name}</h4>
                </div>
                <div className='d-flex flex-column'>
                    <Link to={'/pets'}>back to home</Link>
                    <button
                        className="btn btn-sm btn-outline-danger mx-auto"
                        onClick={() => {
                            handleDeleteClick()
                        }}> Adopt {name}
                    </button>
                </div>
            </div>
            
            <div className='w-100 mx-auto shadow mb-4 rounded border p-4 text-center'>
                <h5>Pet Type: {type}</h5>
                <p>Description: {description}</p>
                <p>Skils:</p>
                <p>{skill1}</p>
                <p>{skill2}</p>
                <p>{skill3}</p>
                <p>one pet id: {id}</p>
            </div>
        </>
    )
}
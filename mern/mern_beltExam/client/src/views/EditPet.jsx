import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { updatePet, getPetById } from "../services/internalApiService";

export const EditPet = (props) => {

    const { id } = useParams();

    const [formData, setFormData] = useState({});

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getPetById(id)
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        for (const key in formData) {
            if (formData[key] === false) {
                delete formData[key]
            }
        }
        updatePet(id, formData)
            .then((data) => {
                console.log('new pet data:', data)
                navigate('/pets')
            })
            .catch((error) => {
                console.log(error.response);
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    if (formData === null) {
        return null
    }
    return (
        <>
            <div className="d-flex justify-content-evenly">
                <div>
                <h3> Pet Shelter</h3>
                <h5>Edit {formData.name}</h5>
                </div>
                <Link to={'/pets'}><p>back to home</p></Link>
            </div>
            <div className="w-50 p-4 rounded mx-auto shadow">

                <form onSubmit={(e) => {
                    handleSubmit(e);
                }}>
                    <div className="form-group">
                        <label className="h6">Pet Name:</label>
                        <input
                            onChange={handleFormChanges}
                            type="text"
                            name="name"
                            value={formData.name}
                            className="form-control"
                        />
                        {
                            errors?.name && (
                                <span className="text-danger">{errors.name?.message}</span>
                            )
                        }
                    </div>
                    <div className='form-group'>
                        <label className="h6">Pet Type:</label>
                        <input
                            onChange={handleFormChanges}
                            type="string"
                            name='type'
                            value={formData.type}
                            className="form-control"
                        />
                    </div>
                    {
                        errors?.type && (
                            <span className="text-danger">{errors.type?.message}</span>
                        )
                    }
                    <div className="form-group">
                        <label className="h6">Description</label>
                        <input
                            onChange={handleFormChanges}
                            type="text"
                            name="description"
                            value={formData.description}
                            className="form-control"
                        />
                    </div>
                    {
                        errors?.description && (
                            <span className="text-danger">{errors.description?.message}</span>
                        )
                    }
                    <h6>Skills (optional)</h6>
                    <div className='form-group'>
                        <label className="h6">Skill 1:</label>
                        <input
                            onChange={handleFormChanges}
                            type="string"
                            name='skill1'
                            value={formData.skill1}
                            className="form-control"
                        />
                    </div>
                    <div className='form-group'>
                        <label className="h6">Skill 2:</label>
                        <input
                            onChange={handleFormChanges}
                            type="string"
                            name='skill2'
                            value={formData.skill2}
                            className="form-control"
                        />
                    </div>
                    <div className='form-group'>
                        <label className="h6">Skill 3:</label>
                        <input
                            onChange={handleFormChanges}
                            type="string"
                            name='skill3'
                            value={formData.skill3}
                            className="form-control"
                        />
                    </div>

                    <button className='btn btn-sm btn-outline-success'>Edit Pet</button>
                </form>
            </div>
        </>
    )
}
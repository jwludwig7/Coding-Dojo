import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { createPet } from "../services/internalApiService";

export const NewPet = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createPet(formData)
            .then((data) => {
                console.log("new pet data:", data)
                navigate(`/pets`)
            })
            .catch((error) => {
                console.log(error.response?.data?.errors);
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className="d-flex justify-content-evenly">
                <div>
                <h3> Pet Shelter</h3>
                <h5>Know a pet needing a home?</h5>
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

                    <button className='btn btn-sm btn-outline-success'>Add Pet</button>
                </form>
            </div>
        </>
    )
}
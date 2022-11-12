import React from "react"
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { createAuthor } from "../services/internalApiService";

export const NewAuthor = (props) => {
    const [formData, setFormData] = useState({
        name: ""
    })

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createAuthor(formData)
            .then((data) => {
                console.log("new author data:", data)
                navigate('/authors')
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
            <div className="text-center">
            <h1> Favorite Authors</h1>
            <Link to={'/authors'}>Home</Link>
            <h3>Add a new author:</h3>

            </div>
            <div className="w-50 p-4 rounded mx-auto shadow">

                <form onSubmit={(e) => {
                    handleSubmit(e);
                }}>
                    <div className="form-group">
                        <label className="h6">Name:</label>
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
                    <div>
                    <button className='btn btn-sm btn-outline-success'>Submit</button>
                    <button 
                        className="btn btn-sm btn-outline-danger">
                        <Link to={'/authors'}>Cancel</Link>
                    </button>    
                    </div>
                </form>
            </div>
        </>
    )
}
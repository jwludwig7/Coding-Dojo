import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { updateAuthor, getAuthorById } from "../services/internalApiService";

export const EditAuthor = (props) => {

    const {id} = useParams();

    const [formData, setFormData] = useState({});

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        for (const key in formData){
            if (formData[key] === false){
                delete formData[key]
            }
        }
        updateAuthor(id, formData)
            .then((data) => {
                console.log('new author data:', data)
                navigate('/authors')
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
    return(
        <div className="w-50 p-4 rounded mx-auto shadow">
        <p>Author id is:{id}</p>
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
    )
}
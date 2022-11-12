import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getAllAuthors, deleteAuthor } from '../services/internalApiService';

const AllAuthors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect((e) => {
        getAllAuthors()
            .then((data) => {
                setAuthors(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const handleDeleteClick = (idToDelete) => {
        deleteAuthor(idToDelete)
            .then((data) => {
                console.log(data)
                const filteredAuthors = authors.filter((author) => {
                    return author._id !== idToDelete
                })
                setAuthors(filteredAuthors)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div>
            <table className='table-group'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody >
                    {authors.map((author, i) => {
                        const { _id, name } = author;
                        return (
                                <tr key={i}>
                                    <td>{name}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-outline-danger mx-auto m-1"
                                            onClick={() => {
                                                handleDeleteClick(_id)
                                            }}> Delete
                                        </button>
                                        <button className="btn btn-sm btn-outline-secondary mx-auto"><Link to={`/authors/${_id}/edit`}>Edit</Link></button>
                                    </td>
                                </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors

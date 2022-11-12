import { useEffect, useState } from 'react'
// import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById, deleteProduct } from '../services/internalApiService';

export const OneProduct = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/products/${id}`)
//         .then(res => {
//             console.log(res.data);
//             setProduct(res.data);})
// }, [])

    const handleDeleteClick = () => {
        deleteProduct(id)
            .then((data) => {
                navigate('/products')
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const {_id, title, price, description} = product
    return (
            <div className='w-100 mx-auto shadow mb-4 rounded border p-4 text-center'>
                <h4>{title}</h4>
                <h5>Price: $ {price}</h5>
                <p>Description: {description}</p>
                <p>Product id : {id} </p>
                <div>
            <button
                className="btn btn-sm btn-outline-danger mx-auto"
                onClick={()=> {
                    handleDeleteClick()
                }}> Delete</button>
                <button className="btn btn-sm btn-outline-secondary mx-auto"><Link to={`/products/${_id}/edit`}>Edit</Link></button>
                <button className="btn btn-sm btn-outline-success mx-auto"><Link to={'/products'}>Home</Link></button>

                </div>
            </div>
    )
}
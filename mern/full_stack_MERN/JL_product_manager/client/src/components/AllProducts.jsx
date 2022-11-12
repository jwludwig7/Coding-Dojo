import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { getAllProducts } from "../services/internalApiService";

const AllProducts = (props) => {
    const [products, setProducts] = useState([])

    useEffect((e) => {
        getAllProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [products])

    // const handleDeleteClick = (idToDelete) => {
    //     deleteProduct(idToDelete)
    //         .then((data) => {
    //             console.log(data)
    //             const filteredProducts = products.filter((product) => {
    //                 return product._id !== idToDelete
    //             })
    //             setProducts(filteredProducts)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    return (
        <div className="w-50 mx-auto text-center">
            <h2>All Products:</h2>
            {products.map((product, i) => {
                const {_id, title} = product;
                return (
                    <div key={i}>
                        <Link to={`/products/${_id}`}>
                            <h4>{title}</h4>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllProducts

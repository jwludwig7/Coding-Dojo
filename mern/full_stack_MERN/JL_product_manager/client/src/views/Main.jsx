import AllProducts from "../components/AllProducts"
import NewProduct from "../components/NewProduct"

export const Main = (props) => {
    return (
        <>
        <div>
            <h1 className="text-center">Product Manager</h1>
            <hr />
            <NewProduct/>
        </div>
        <hr />
        <div>
            <AllProducts />
        </div>
        </>
    )
}
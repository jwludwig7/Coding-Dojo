import { Link } from "react-router-dom"
import AllPets from "../components/AllPets"

export const Main = (props) => {
    return (
        <>
            <div className="d-flex justify-content-between">
                <div>
                    <h1>Pet Shelter</h1>
                    <h4>These pets are looking for a good home</h4>
                </div>
                <Link to={'/pets/new'}><p>add a pet to the shelter</p></Link>
            </div>
            <AllPets />
        </>
    )
}
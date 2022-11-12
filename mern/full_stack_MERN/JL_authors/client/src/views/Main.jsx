import  AllAuthors  from '../components/AllAuthors';
import { Link } from 'react-router-dom';

export const Main = (props) => {
    return (
        <>
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/authors/new'}>Add an Author</Link>
            <p>We have quotes by:</p>
        </div>
        <div>
            <AllAuthors/>
        </div>
        
        </>
    )
}

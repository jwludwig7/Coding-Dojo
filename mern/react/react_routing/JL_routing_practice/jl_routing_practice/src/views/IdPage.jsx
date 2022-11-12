import { useParams } from 'react-router-dom'

export const IdPage = (props) => {
    const { id } = useParams();
    return (
        <div>
            <p>The number is: {id}</p>
        </div>
    )
}


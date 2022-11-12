import { useParams } from 'react-router-dom'


export const WordCustom = (props) => {
    const { word } = useParams();
    const { xcolor } = useParams();
    const { color } = useParams();
    console.log(xcolor)
    return (
        <div style={{ backgroundColor: xcolor, color:color }}>The word is: {word}</div>
    )
}

export default WordCustom
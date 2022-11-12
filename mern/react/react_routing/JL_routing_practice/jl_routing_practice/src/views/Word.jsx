import { useParams } from 'react-router-dom'


export const Word = (props) => {
  const {word} = useParams();
  return (
    <div>The Word is: {word}</div>
  )
}


// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgurl} = destinationDetails

  return (
    <li className="list-card">
      <img className="img" alt={name} src={imgurl} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem

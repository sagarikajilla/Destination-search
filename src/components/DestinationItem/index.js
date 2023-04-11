// Write your code here
import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {name, imgUrl} = details

  return (
    <li className="list-card">
      <img src={imgUrl} className="img" alt={name} />
      <p className="desc">{name}</p>
    </li>
  )
}
export default DestinationItem

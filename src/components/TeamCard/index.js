import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {name, imageUrl, id} = cardDetails
  return (
    <Link className="link" to={`/team-matches/${id}`}>
      <li key={id} className="listContainer">
        <img className="image" src={imageUrl} alt={`${name}`} />
        <p className="heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

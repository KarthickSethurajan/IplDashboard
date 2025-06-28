import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(item => ({
      name: item.name,
      imageUrl: item.team_image_url,
      id: item.id,
    }))

    this.setState({teamData: updatedData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teamListContainer">
            {teamData.map(eachItem => (
              <TeamCard key={eachItem.id} cardDetails={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home

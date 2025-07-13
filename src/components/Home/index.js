import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamList()
  }

  getIplTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(updatedData)
    this.setState({teamList: updatedData, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamList} = this.state
    return (
      <ul className="item-list">
        {teamList.map(eachItem => (
          <TeamCard key={eachItem.id} TeamDetails={eachItem} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="logo-container">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="headings">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}
export default Home

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getTeamListDetails()
  }

  getTeamListDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      bannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatch: data.recent_matches.map(eachMatch => ({
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manoftheMatch: eachMatch.man_of_the_match,
        id: match.id,
        date: eachMatch.date,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      })),
    }
    this.setState({teamItemDetails: updatedData, isLoading: false})
  }

  renderRecentMatchesList = () => {
    const {teamItemDetails} = this.state
    const {recentMatch} = teamItemDetails

    return (
      <ul className="recent-matches-list">
        {recentMatch.map(Item => (
          <MatchCard matchDetails={Item} key={Item.id} />
        ))}
      </ul>
    )
  }

  renderTeamMatchesDetails = () => {
    const {teamItemDetails} = this.state
    const {bannerUrl, latestMatchDetails} = teamItemDetails
    return (
      <ul>
        <img src={bannerUrl} alt="team banner" />
        <LatestMatch latestMatch={latestMatchDetails} />
        {this.renderRecentMatchesList()}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="team-Match-Bg-Container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatchesDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches

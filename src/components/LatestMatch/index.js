import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatch

  return (
    <div>
      <h1>LatestMatch</h1>
      <div className="match-details-container">
        <div>
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
        <div>
          <h1>First Innings</h1>
          <p>{firstInnings}</p>
          <h1>Second Innings</h1>
          <p>{secondInnings}</p>
          <h1>Man of the Match</h1>
          <p>{manOfTheMatch}</p>
          <h1>Umpire</h1>
          <p>{umpires}</p>
          <p>{matchStatus}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch

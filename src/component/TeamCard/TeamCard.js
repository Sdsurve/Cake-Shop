import "./TeamCard.css"
import { theme } from "../../configData"

function TeamCard({TeamImage,TeamName,TeamPosition}) {
  return (
    <div className="team-card-container">
        <img src={TeamImage} className="team-image" alt="memberImage"/>
        <span className="team-name-text" style={{color: theme.Heading}} >{TeamName}</span><br/>
        <span className="team-position-text" style={{color: theme.description}}>{TeamPosition}</span>
    </div>
  )
}

export default TeamCard
import "./ButtonBox.css"
import { theme } from "../../configData"

function Button({text}) {
  return (
    <button className="butn" style={{backgroundColor: theme.secondaryColor, color: theme.Heading}}>
        {text}
    </button>
  )
}

export default Button
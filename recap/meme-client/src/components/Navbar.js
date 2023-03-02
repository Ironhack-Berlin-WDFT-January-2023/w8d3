import { Link } from "react-router-dom"
import DropDown from "./DropDown"

function Navbar(props) {
  return (
    <nav>
      <Link to="/">Back to home</Link>
      <Link to="/add-meme">Add a meme</Link>

      <DropDown memes={props.memes} filterMemes={props.filterMemes} />
    </nav>
  )
}

export default Navbar

import { Link } from "react-router-dom"

function Menu() {
  return (
    <> 
          <Link to="/">
            <li>Home</li>
          </Link> 
          <Link to="/profile">
            <li>Profile</li>
          </Link>
        </> 
  )
}


export default Menu
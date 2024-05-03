import { Link } from "react-router-dom"
import "../Styles/nav.css"

const Navigation = () => {
    return (
        <div className="nav-container">
            <h1>Nutty Neighbors</h1>
            <div className="nav-items-container">
                <ul className="nav-ul">
                   <Link to="/most-wanted"><li className="nav-items-li">Most Wanted</li></Link> 
                   <Link to="/beware"><li className="nav-items-li">Beware of these Squirrels</li></Link> 
                </ul>
            </div>
        </div>
    )
}

export default Navigation 
import { Link } from "react-router-dom";
import "../Styles/nav.css";
import "../assets/squirrels.svg";

const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="nav-h1-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="nav-h1">Nutty Neighbors</h1>
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-squirrel"
        >
          <path d="M15.236 22a3 3 0 0 0-2.2-5" />
          <path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
          <path d="M18 13h.01" />
          <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
        </svg>
      </div>
      <div className="nav-items-container">
        <ul className="nav-ul">
          <Link to="/most-wanted" style={{ textDecoration: "none" }}>
            <li className="nav-items-li">Most Wanted</li>
          </Link>
          <Link to="/beware" style={{ textDecoration: "none" }}>
            <li className="nav-items-li">Beware of these Squirrels</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

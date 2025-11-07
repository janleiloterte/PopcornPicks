import { NavLink } from "react-router-dom"
import "../css/NavBar.css"
import PopcornPicksLogo from "../assets/PopcornPicksLogo.png";

function NavBar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <img className="logo-image" src={PopcornPicksLogo} alt="PopcornPicks Logo" />
                <NavLink to="/" className="logo-text">PopcornPicks</NavLink>
            </div>

            <div className="navbar-links">
                <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
                    Home
                </NavLink>
                <NavLink to="/favourites" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
                    Picks
                </NavLink>
                <NavLink to="/watched" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
                    Watched
                </NavLink>
                <NavLink to="/watch-list" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
                    Watch List
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar

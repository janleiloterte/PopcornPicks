import { Link } from "react-router-dom"
import "../css/NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/"className="navbar-brand">PopcornPicks</Link>
            </div>

            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourites" className="nav-link">Picks</Link>
                <Link to="/watched" className="nav-link">Watched</Link>
                <Link to="/watch-list" className="nav-link">Watch List</Link>
            </div>

        </nav>
    )
}

export default NavBar
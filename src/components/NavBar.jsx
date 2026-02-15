import { Link } from "react-router-dom";
import "../css/navbar.css"
function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Project: FurEver Protected </Link>
                <img src="./animal-logo.png" alt="logo" className="logo"/>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/donate" className="nav-link">Donate</Link>
                <Link to="/about-us" className="nav-link">About Us</Link>
            </div>
        </nav>
    )
}

export default NavBar
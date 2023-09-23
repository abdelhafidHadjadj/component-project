import { Link } from "react-router-dom"
import "./NavBar.css"


function NavBar() {
    return(
    <header className="header">
        <div className="header-inner">

        <div id="logo">Logo</div>
        <nav >
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/contact-us">Contact us</Link>
        </nav>
        <div>
            <Link to='#'>
            Sign Up
            </Link>
        </div>
        </div>
    </header>
    )
}

export default NavBar
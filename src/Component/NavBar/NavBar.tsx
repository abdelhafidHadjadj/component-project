import { Link } from "react-router-dom"

function NavBar() {
    return(
    <header>
        <div id="logo">Logo</div>
        <nav className="navbar">
            <Link to="/Home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/contact-us">Contact us</Link>
        </nav>
    </header>
    )
}

export default NavBar
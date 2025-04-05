import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Sākumplapa</Link>
                <Link to="/par-mums" className="navbar-link">Par mums</Link>
                <Link to="/Kontakti" className="navbar-link">Kontakti</Link>
            </div>
        </div>
    )
}

export default Navbar;
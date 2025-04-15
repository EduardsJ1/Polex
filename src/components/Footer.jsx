import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <footer>
            <div className="footer-content">
                <div className="footer-logo-info">
                    <div className="footer-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <p>© 2025 Polex</p>
                </div>
                    <div className='footer-links'>
                        <h2>Navigācija</h2>
                        <Link to="/" className="navbar-link">Sākumplapa</Link>
                        <Link to="/par-mums" className="navbar-link">Par mums</Link>
                        <Link to="/Kontakti" className="navbar-link">Kontakti</Link>
                    </div>
                    <div className='footer-contact'>
                        <h2>Kontakti</h2>
                        <div className='footer-contact-container'>
                            <div>
                                <p>Telefons:</p>
                                <p>+371 29 429 608</p>
                            </div>

                            <div>
                                <p>E-pasts:</p>
                                <p>info@polex.lv</p>
                            </div>

                            <div>
                                <p>Sociālie:</p>
                                <p>Facebook</p>
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;
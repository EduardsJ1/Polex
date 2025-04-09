import logo from '../assets/logo.webp';
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
                <div className='footer-info'>
                    <div className='footer-links'>
                        <h2>Navigācija</h2>
                        <a href="/">Sākumlapā</a>
                        <a href="/par-mums">Par mums</a>
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
                                <p>polex@inbox.lv</p>
                            </div>

                            <div>
                                <p>Sociālie:</p>
                                <p>Facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
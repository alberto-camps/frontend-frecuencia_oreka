import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import FrecuenciaOrekaLogo from '../assets/FrecuenciaOrekaLogo.png';
import './Navbar.css';

function Navbar() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">

                <div className="nav-top">
                    <Link to="/">
                        <img className="navLogo" src={FrecuenciaOrekaLogo} alt="logo" />
                    </Link>

                    {/* BOTÓN HAMBURGUESA */}
                    <div 
                        className={`burger ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <select
                        className="lang-select"
                        value={i18n.language}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                    >
                        <option value="es">ES</option>
                        <option value="en">EN</option>
                    </select>
                </div>

                {/* MENÚ */}
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><Link to='/' onClick={() => setMenuOpen(false)}>{t('navbar_home')}</Link></li>
                    <li><Link to='/sobre-mi' onClick={() => setMenuOpen(false)}>{t('navbar_about')}</Link></li>
                    <li><Link to='/masajes' onClick={() => setMenuOpen(false)}>{t('navbar_massages')}</Link></li>
                    <li><Link to='/tarot' onClick={() => setMenuOpen(false)}>{t('navbar_tarot')}</Link></li>
                    <li><Link to='/acompanamiento-emocional' onClick={() => setMenuOpen(false)}>{t('navbar_emotional_support')}</Link></li>
                    <li><Link to='/contact' onClick={() => setMenuOpen(false)}>{t('navbar_contact')}</Link></li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;
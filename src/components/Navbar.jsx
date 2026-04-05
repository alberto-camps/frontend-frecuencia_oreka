import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import FrecuenciaOrekaLogo from '../assets/FrecuenciaOrekaLogo.png';
import './Navbar.css';

function Navbar() {
    const { t, i18n } = useTranslation();

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-top">
                    <Link to="/">
                        <img className="navLogo" src={FrecuenciaOrekaLogo} alt="Frecuencia Oreka logo" />
                    </Link>
                    
                    <select
                        className="lang-select"
                        value={i18n.language}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                    >
                        <option value="es">ES</option>
                        <option value="en">EN</option>
                    </select>
                </div>

                <ul className="nav-links">
                    <li><Link to='/'>{t('navbar_home')}</Link></li>
                    <li><Link to='/sobre-mi'>{t('navbar_about')}</Link></li>
                    <li><Link to='/masajes'>{t('navbar_massages')}</Link></li>
                    <li><Link to='/tarot'>{t('navbar_tarot')}</Link></li>
                    <li><Link to='/acompanamiento-emocional'>{t('navbar_emotional_support')}</Link></li>
                    <li><Link to='/contact'>{t('navbar_contact')}</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
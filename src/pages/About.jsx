import { useTranslation } from "react-i18next";
import crystal from '../assets/crystal.jpg';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="about-wrapper">
        
        <div className="about-overlay"></div>

        <div className="about-card">
          <div className="about-image">
            <img src={crystal} alt="Sobre mí" />
          </div>

          <div className="about-text">
            <h2>{t('about_text')}</h2>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
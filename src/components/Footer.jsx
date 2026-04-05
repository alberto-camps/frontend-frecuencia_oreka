import { useTranslation } from 'react-i18next';
import './Footer.css'

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-grid">

          {/* Datos de Contacto */}
          <div className="footer-section">
            <p>{t('footer_address')}</p>
            <p>{t('footer_phone')}</p>
            <p>{t('footer_email')}</p>
          </div>

          {/* Horario */}
          <div className="footer-section">
            <h4>{t('footer_hours_title')}</h4>
            <p>{t('footer_hours')}</p>
            <button 
              className="btn-booking"
              onClick={() => window.open('https://wa.me/34623028832', '_blank')}
            >
                {t('footer_booking_button')}
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

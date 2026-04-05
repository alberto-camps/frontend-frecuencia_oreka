import { useTranslation } from 'react-i18next';
import ButtonWA from '../services/ButtonWA';
import './Tarot.css';

function Tarot() {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="section-overlay tarot-section">
                <h1>{t('tarot_title')}</h1>
                <p dangerouslySetInnerHTML={{ __html: t('tarot_description') }} />
                <div className="buttonWA-container">
                    <ButtonWA />
                </div>
            </div>
        </div>
    );
}

export default Tarot;
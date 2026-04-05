import { useTranslation } from "react-i18next";
import ButtonWA from '../services/ButtonWA';
import './AcompanamientoEmocional.css';

function AcompañamientoEmocional() {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="section-overlay emotional-support-section">
                <h1>{t('emotional_support_title')}</h1>
                <p dangerouslySetInnerHTML={{ __html: t('emotional_support_description') }} />
                <div className="buttonWA-container">
                    <ButtonWA />
                </div>
            </div>
        </div>
    );
}

export default AcompañamientoEmocional;
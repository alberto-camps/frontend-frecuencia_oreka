import { Link, useParams } from "react-router-dom";
import massages from "../services/massages";
import ButtonWA from "../services/ButtonWA";
import { useTranslation } from 'react-i18next';
import './MassageDetails.css';

function MassageDetails() {
    const { t } = useTranslation();
    const { id } = useParams();
    
    const massage = massages.find(m => m.id === id?.toLowerCase());

    if(!massage) {
        return <h2>{t('massage_not_found')}</h2>;
    }

    return ( 
        <div className="container">
            <div 
                className="section-overlay massage-details"
                style={{ backgroundImage: `url(${massage.img})` }}
            >
                <h1>{t(massage.name)}</h1>
                <p dangerouslySetInnerHTML={{ __html: t(massage.description) }} />
                <p>{t(massage.duration)}</p>
                <p>{t(massage.price)}</p>
                <div className="buttonWA-container">
                    <ButtonWA />
                </div>
            </div>
        </div>
    );
}

export default MassageDetails;
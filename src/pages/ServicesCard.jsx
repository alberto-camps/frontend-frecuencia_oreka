import ButtonWA from "../services/ButtonWA";
import { Link } from 'react-router-dom';
import './ServicesCard.css';
import { useTranslation } from "react-i18next";

function ServicesCard({id, name, img}) {
    const { t } = useTranslation();
    return (
        <article className="service-card">
            <Link to={`/masajes/${id}`}>
                <h2>{t(name)}</h2>
                <img src={img} alt={t(name)}/>
            </Link>
            <ButtonWA />
        </article>
    );
}

export default ServicesCard;
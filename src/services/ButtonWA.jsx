import { useTranslation } from 'react-i18next';

const ButtonWA = () => {
    const { t } = useTranslation();
    const phone = '34623028832'
    return(
        <button
            className="btn-whatsapp"
            onClick={() => window.open(`https://wa.me/${phone}`, '_blank')}
            >
                {t('button_reserve')}
        </button>
    )
}

export default ButtonWA
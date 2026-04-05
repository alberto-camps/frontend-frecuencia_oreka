import { useTranslation } from 'react-i18next';
import './Home.css';

function Home() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <div className="section-overlay">
        <h1>{t('home_title')}</h1>
        <p>{t('home_description')}</p>
      </div>
    </section>
  );
}

export default Home;
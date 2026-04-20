import { useTranslation } from 'react-i18next';
import video from '../assets/VideoMasaje.mp4';
import './Home.css';

function Home() {
  const { t } = useTranslation();

  return (
    <section className="home-hero">

      {/* VIDEO DE FONDO */}
      <video
        className="home-video"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* OVERLAY + CONTENIDO */}
      <div className="home-overlay">
        <div className="home-content">
          <h1>{t('home_title')}</h1>
          <p>{t('home_description')}</p>
        </div>
      </div>

    </section>
  );
}

export default Home;
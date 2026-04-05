import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-grid">

          {/* Datos de Contacto */}
          <div className="footer-section">
            <p>📍 Pasaia Kalea, 5, Donostia / San Sebastián</p>
            <p>📞 +34 623 028 832</p>
            <p>✉️ crystalzeitlingonzalez@gmail.com</p>
          </div>

          {/* Horario */}
          <div className="footer-section">
            <h4>Horario</h4>
            <p>Lunes a Sábado: 09:00 - 19:00</p>
            <button 
              className="btn-booking"
              onClick={() => window.open('https://wa.me/34623028832', '_blank')}
            >
                Reserva tu cita
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

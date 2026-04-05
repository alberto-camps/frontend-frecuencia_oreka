import ServicesCard from './ServicesCard';
import massages from '../services/massages'
import './Massages.css'

function Massages() {
    return (
        <div className="container">
            <div className="section-overlay">
                <h1>Masajes</h1>
                <div className='massages-container'>
                    {massages.map(massage => (
                        <ServicesCard key={massage.id} {...massage} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Massages;
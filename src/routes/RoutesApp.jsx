import { Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Massages from '../pages/Massages'
import Tarot from '../pages/Tarot'
import Contact from '../pages/Contact'
import AcompañamientoEmocional from '../pages/AcompanamientoEmocional'
import MassageDetails from '../pages/MassageDetails'

function RoutesApp() {
    return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre-mi' element={<About />} />
        <Route path='/masajes' element={<Massages />} />
        <Route path='/masajes/:id' element={<MassageDetails />} />
        <Route path='/tarot' element={<Tarot />} />
        <Route path='/acompanamiento-emocional' element={<AcompañamientoEmocional />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    );
}

export default RoutesApp;
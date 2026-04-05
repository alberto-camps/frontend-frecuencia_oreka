import RoutesApp from './routes/RoutesApp'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.css'
import { useState } from 'react'

function App() {
  return (
    <>
      <Navbar />
      <RoutesApp />
      <Footer />
    </>
  )
}

export default App

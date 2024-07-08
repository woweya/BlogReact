import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Atro from './components/Atro'
import PricingCards from './components/PricingCards'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      {/* Guarda il sito di https://www.behance.net/gallery/194808573/Digital-Agency-Protifolo-Website-UI-Design?tracking_source=search_projects|blog+web+design+blogging+website&l=8
        Per continuare la realizzazione di questo website. 
      */}
      <Atro />

      <PricingCards />
        <Footer />
    </>
  )
}

export default App

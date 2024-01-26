import React from 'react'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Social_Aprof from './Components/Social aprof/Social_Aprof'
import ByRegions from './Components/ByRegions/ByRegions'
import ByOccsions from './Components/ByOccasions/ByOccsions'
import ByIngrediants from './Components/ByIngrediant/ByIngrediant'
import Blayas from './Components/LocationAlg/Blayas'
import Newslatter from './Components/Newslatter/Newslatter'
import Madona from './Components/Madona/Madona'
import Footer from './Components/Footer/Footerr'

const App = () => {
  return (
    <div>
      
      <Navbar/>
      
      <body>
        <Hero/>
        <Social_Aprof/>
        <ByRegions/>
        <ByOccsions/>
        <ByIngrediants/>
         <Blayas/>
         <Newslatter/>
         <Madona/>
         
      </body>

      <footer>
        <Footer/>
      </footer>

    </div>
  )
}

export default App

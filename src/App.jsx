// TODO: prepare the project for Behbod's review
// Steps: b- Start working on the pricing page (add a modal)
import Navbar from './components/Navbar'
import Hero from './pages/Home/Hero'
import Features from './pages/Home/Features'
import Testimonials from './pages/Home/Testimonials'
import CallToAction from './pages/Home/CallToAction'
import Footer from './components/Footer'
import TrainingRegimenMain from './pages/TrainingRegimen/TRmain'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <Router>
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
         <>
         <Hero/>
         <Features/>
         <Testimonials/>
         <CallToAction/>
         </>
       }/>
      <Route path='/training-regimen' element={<TrainingRegimenMain />} />
      </Routes>
      <Footer/>
    </>
    </Router>
  )
}

export default App

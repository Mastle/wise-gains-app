//TODO: prepare the project for Behbod's review
// Steps: a- Re-arrange the content of the homepage  b- Might be a good idea to create a modal c- Figure out what the next page should be like (pricing is probably next)
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



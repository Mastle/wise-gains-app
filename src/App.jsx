// TODO: prepare the project for Behbod's review
// Steps: b- Start working on the results page (add a modal)

import { Navbar, Hero, Features, Testimonials, CallToAction, Footer } from './pages/Home/HomeIndex'
import TrainingRegimenMain from './pages/TrainingRegimen/TRmain'
import ResultsMain from './pages/Results/ResultsMain'
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
      <Route path='/results' element={<ResultsMain />} />
      </Routes>
      <Footer/>
    </>
    </Router>
  )
}

export default App

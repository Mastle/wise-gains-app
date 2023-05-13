// TODO: prepare the project for Behbod's review
// Steps: b- Start working on the results page (add a modal) c- must fix the items of the responsive menu

import { Navbar, Hero, Features, Testimonials, CallToAction, Footer } from './pages/Home/HomeIndex'
import TrainingRegimenMain from './pages/TrainingRegimen/TRmain'
import ResultsMain from './pages/Results/ResultsMain'
import PlansMain from './pages/Plans/PlansMain'
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
      <Route path='/plans' element={<PlansMain />} />
      </Routes>
      <Footer/>
    </>
    </Router>
  )
}

export default App

import Navbar from './components/Navbar'
import Hero from './pages/Home/Hero'
import Features from './pages/Home/Features'
import Testimonials from './pages/Home/Testimonials'
import CalltoAction from './pages/Home/CalltoAction'
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
         <CalltoAction/>
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



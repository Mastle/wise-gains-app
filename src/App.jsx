import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CalltoAction from './components/CalltoAction'
import Footer from './components/Footer'
import TrainingRegimen from './components/TrainingRegimen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

const App = () => {

  return (
    <Router>
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={ 
        <>
         <Hero/>
         <Features/>
         <Testimonials/> 
         <CalltoAction/>
       </>
      }>
      
     </Route>
      <Route path='/training-regimen' element={
      <TrainingRegimen/>}  />
     </Routes>
     <Footer/>
    </>
    </Router>
  )
}

export default App

/*
General thoughts:
   - Must use this app to learn react as much as I can
   - Brad's react app might be a good inspiration for this
   - "Get Started" leads to a whole new page where user interactivity will begin
  
TODO:
   - TrainingRegimen component comments
  
  

  
Phase two:
   - Add Typescript


*/

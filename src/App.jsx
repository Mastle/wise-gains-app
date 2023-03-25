import Navbar from './components/Homepage/Navbar'
import Hero from './components/Homepage/Hero'
import Features from './components/Homepage/Features'
import Testimonials from './components/Homepage/Testimonials'
import CalltoAction from './components/Homepage/CalltoAction'
import Footer from './components/Homepage/Footer'
import TrainingRegimenInputs from './components/TrainingRegimen/TRinputs'
import TrainingRegimenData from './components/TrainingRegimen/TRdata'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

const App = () => {

   const [isSubmitted, setIsSubmitted] = useState(false)



  return (
    <Router>
    <>
    <Navbar isSubmitted={setIsSubmitted}/>
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
         isSubmitted ? (<TrainingRegimenData/>): (<TrainingRegimenInputs isSubmitted={setIsSubmitted}/>)
      }  />
     </Routes>
     <Footer/>
    </>
    </Router>
  )
}

export default App

/*
   Phase one:
    -Learn React
    -Finish the app
    -Deploy?

  
   Phase two:
    - Add Typescript

   Phase three:
    - Next.js
    - Strapi

*/

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CalltoAction from './components/CalltoAction'
import Footer from './components/Footer'
import TrainingRegimenInputs from './components/TrainingRegimenInputs'
import TrainingRegimenData from './components/TrainingRegimenData'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  //Need to create a function that adds the user input to the JSON server 
  //Prolly a good idea to see if I'm connected to the JSON server first
  //Could try fetching random data from it
   const [data, setData] = useState('')
   const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect( () =>{
   const getData = async () => {
    const dataFromServer = await fetchData()
    setData(dataFromServer)
    
    
   }

   getData()
  },[])


const fetchData = async () => {
    const res = await fetch('http://localhost:5000/posts')
    const data = await res.json()

    return data
   }


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

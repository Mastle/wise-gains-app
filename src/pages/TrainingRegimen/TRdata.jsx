import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";



const TRdata = ({setIsTrainingFormSubmitted}) => {

  const [newData, setNewData] = useState('')
  let location = useLocation()
  const [randomState, setRandomState] = useState(1)

  useEffect( () =>{
   
     const getData = async () => {
     const dataFromServer = await fetchData()
     setNewData(dataFromServer)
     


   }

   getData()


   return () => setIsTrainingFormSubmitted(false)
   

  },[])



  useEffect(()=> 
  { return () => setIsTrainingFormSubmitted(false)} , [location]) //TODO: post-production -> Is there a way to do this without disabling the strict mode? it's a problem that we can only solve once we've taken care of all the other parts of our app

  
  


const fetchData = async () => {
    const res = await fetch('http://localhost:5000/routines')
    const data = await res.json()

    return data
   }


const showState = () => {
  newData.map((data, index) => console.log('This is the data: ' + data.title + ' \n This is index: ' + data.id))
}


const incrRandomState =  () => {
  setRandomState(randomState => randomState += 1)
}

  return (
    <div className="text-center text-lg">
      TrainingRegimenData:
      <button onClick={incrRandomState} className="border-4">Click me</button>
    </div>
    
  )
}

export default TRdata


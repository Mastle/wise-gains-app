import TrainingRegimenExercises from './TRexercises'
import { useState, useEffect } from 'react'

const TRdata = ({ weight, height, age, experienceLevel }) => {
  const [newData, setNewData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData()
      setNewData(dataFromServer)
    }

    getData()
  }, [])

  const fetchData = async () => {
    const res = await fetch(`http://localhost:5000/routines?title=${experienceLevel}`)
    const data = await res.json()

    return data
  }

  return (
    <div className="relative flex flex-col text-center text-lg min-h-screen pt-10 justify-evenly space-y-20">
    <div className='pb-5 border-4 border-black rounded-lg md:max-w-base md:mx-auto mx-2 border-brightRedLight'>
       <h1 className="text-2xl"> Your stats: </h1>
       <div className='md:relative md:right-4 flex mt-10 pl-3 justify-between'>
         <span className="mx-3">Weight: {weight}</span>
         <span className="mx-3">Height: {height}</span>
         <span className="mx-3">Age: {age}</span>
         <span className="mx-3">Experience Level: {experienceLevel}</span>
       </div>
     </div>
     <div className="mt-3 pb-5">
           {/* TODO: I will fix the styling once I've taken care of the logic of the TRexercise component */}
       <h1 className="text-2xl"> Your regimen:  </h1>
       <div className='md:relative md:right-4 flex flex-col space-y-5 justify-between mt-10 md:max-w-sm md:mx-auto'>
        <TrainingRegimenExercises exercises={newData}/>
       </div>
     </div>
    </div>

  )
}

export default TRdata

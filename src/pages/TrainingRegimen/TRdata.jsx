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
    <div className="relative flex flex-col text-center text-lg min-h-200 pt-10 justify-evenly space-y-4">
    <div className='pb-5 border-4  rounded-lg md:max-w-base md:mx-auto mx-2 border-darkBlue bg-pinkishOrange'>
       <h1 className="text-2xl"> Your stats: </h1>
       <div className='md:relative md:right-4 flex mt-10 pl-3 justify-between'>
         <span className="mx-3">Weight: {weight}</span>
         <span className="mx-3">Height: {height}</span>
         <span className="mx-3">Age: {age}</span>
         <span className="mx-3">Experience Level: {experienceLevel}</span>
       </div>
     </div>
     <div>
       <h1 className="text-2xl pb-4"> Your regimen:</h1>
        <TrainingRegimenExercises exercises={newData}/>
     </div>
    </div>

  )
}

export default TRdata

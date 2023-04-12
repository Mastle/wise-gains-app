//TODO: Finish training regimen components
import TrainingRegimenInputs from './TRinputs'
import TrainingRegimenData from './TRdata'
import { useState, useEffect } from 'react'


const TRmain = () => {
    const [isTrainingFormSubmitted, setIsTrainingFormSubmitted] = useState(false) 
    const [weight, setWeight] = useState('') 
    const [height, setHeight] = useState('')
    const [age, setAge] = useState('')



  return (
    <>
     {isTrainingFormSubmitted ? (<TrainingRegimenData setIsTrainingFormSubmitted={setIsTrainingFormSubmitted} />)  : (<TrainingRegimenInputs isTrainingFormSubmitted={setIsTrainingFormSubmitted}/>)}
    </>
  )
}
export default TRmain



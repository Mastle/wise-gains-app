import TrainingRegimenInputs from './TRinputs'
import TrainingRegimenData from './TRdata'
import { useState } from 'react'


const TRmain = () => {
    const [isTrainingFormSubmitted, setIsTrainingFormSubmitted] = useState(false) 
    const [weight, setWeight] = useState('') 
    const [height, setHeight] = useState('')
    const [age, setAge] = useState('')



  return (
    <>
     {isTrainingFormSubmitted ? (<TrainingRegimenData 
     setIsTrainingFormSubmitted={setIsTrainingFormSubmitted} 
     />)
       : (<TrainingRegimenInputs 
       isTrainingFormSubmitted={setIsTrainingFormSubmitted}
       age={age}
       setAge={setAge}
       weight={weight}
       setWeight={setWeight}
       height={height}
       setHeight={setHeight}
       />)}
    </>
  )
}
export default TRmain



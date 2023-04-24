import TrainingRegimenInputs from './TRinputs'
import TrainingRegimenData from './TRdata'
import { useState } from 'react'

const TRmain = () => {
  const [isTrainingFormSubmitted, setIsTrainingFormSubmitted] = useState(false)
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [experienceLevel, setExperienceLevel] = useState('Intermediate')

  return (
    <>
     {isTrainingFormSubmitted
       ? (<TrainingRegimenData
     weight={weight}
     height={height}
     age={age}
     experienceLevel={experienceLevel}
     />)
       : (<TrainingRegimenInputs
       setIsTrainingFormSubmitted={setIsTrainingFormSubmitted}
       age={age}
       setAge={setAge}
       weight={weight}
       setWeight={setWeight}
       height={height}
       setHeight={setHeight}
       experienceLevel={experienceLevel}
       setExperienceLevel={setExperienceLevel}

       />)}
    </>
  )
}
export default TRmain

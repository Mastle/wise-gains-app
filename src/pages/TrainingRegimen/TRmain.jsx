import TrainingRegimenInputs from './TRinputs'
import TrainingRegimenData from './TRdata'
import { useState } from 'react'


const TRmain = ({isSubmitted, setIsSubmitted}) => {
    const [weight, setWeight] = useState('') 
    const [height, setHeight] = useState('')
    const [age, setAge] = useState('')

  return (
    <>
     {isSubmitted ? (<TrainingRegimenData isSubmitted={setIsSubmitted} />) : (<TrainingRegimenInputs isSubmitted={setIsSubmitted}/>)}

    </>
  )
}
export default TRmain

// We don't want to re-route the user to anywhere, so we're just gonna use conditional rendering


/* <Route path='/training-regimen' element={
         isSubmitted ? (<TrainingRegimenData isSubmitted={setIsSubmitted} />) : (<TrainingRegimenInputs isSubmitted={setIsSubmitted}/>)
      } /> */
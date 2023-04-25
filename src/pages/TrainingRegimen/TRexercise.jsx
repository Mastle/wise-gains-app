// TODO:  1- Design the exercise components on Figma first and then (Arash we'll take care of the deisgn, so:  2-See if you can edit the exercises 3- Try to add some exercises
// steps: a- add an icon library b- 
import { FaTimes, FaPencilAlt } from 'react-icons/fa'

const TRexercise = ({ exercise }) => {
  return (
    <>

        <h1>{exercise.title} Routine <FaTimes style={{color: 'red', cursor: 'pointer'}}/>  <FaPencilAlt/></h1>
        <p>{exercise.exercise_1} <FaTimes/> <FaPencilAlt/> </p>
        <p>{exercise.exercise_2 } <FaTimes/> <FaPencilAlt/></p>
        <p>{exercise.exercise_3} <FaTimes/> <FaPencilAlt/></p>
    </>
  )
}
export default TRexercise

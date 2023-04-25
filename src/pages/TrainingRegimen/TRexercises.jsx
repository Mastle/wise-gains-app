import TrainingRegimenExercise from './TRexercise.jsx'

const TRexercise = ({ exercises }) => {
  return (
    <>
       {exercises.map((exercise, index) => (<TrainingRegimenExercise key={index} exercise={exercise}
       />))}
    </>
  )
}
export default TRexercise

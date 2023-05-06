import TrainingRegimenExercise from './TRexercise.jsx'

const TRexercises = ({ exercises }) => {
  return (
    <>
       {exercises.map((exercise, index) => (<TrainingRegimenExercise key={index} exercise={exercise}
       />))}
    </>
  )
}
export default TRexercises

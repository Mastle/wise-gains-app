import TrainingRegimenExercise from './TRexercise.jsx'

const TRexercise = ({ exercises }) => {
  return (
    <>
       <h1>Here is your regimen:</h1>
       <br />
       {exercises.map((exercise, index) => (<TrainingRegimenExercise key={index} exercise={exercise}
       />))}
    </>
  )
}
export default TRexercise

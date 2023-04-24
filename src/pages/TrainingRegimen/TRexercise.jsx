// TODO: 1- See if you can edit the exercises 2- Try to add some exercises

const TRexercise = ({ exercise }) => {
  return (
    <>
        <h1>{exercise.title} Routine</h1>
        <p>{exercise.exercise_1}</p>
        <p>{exercise.exercise_2}</p>
        <p>{exercise.exercise_3}</p>
    </>
  )
}
export default TRexercise

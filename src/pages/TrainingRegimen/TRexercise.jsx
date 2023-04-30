// TODO: Designing the exercise cards
import { FaTimes, FaPencilAlt } from 'react-icons/fa'

const TRexercise = ({ exercise }) => {
  const myArr = []
  let j = 0; let exerciseStringIndex = 0
  let exerciseTitle = ''; let exerciseInstruction = ''

  for (const i in exercise) {
    myArr[j++] = exercise[i]
  }

  const returnExercises = () => {
    return (
      myArr.map((element, index) => {
        if (typeof (element) === 'string') {
          if (element.includes(':')) {
            exerciseStringIndex = element.indexOf(':')
            exerciseTitle = element.slice(0, exerciseStringIndex)
            exerciseInstruction = element.slice(exerciseStringIndex + 1, element.length)
          }
        }
        return (
    <div key={index}>
      <h1> {exerciseTitle}</h1>
      <p> {exerciseInstruction}</p>
    </div>
        )
      })
    )
  }

  return (
    <>
         {returnExercises()}
         {/* current step: delete the elements below and style the elements above */}
       <h1> {exercise.title} Routine</h1>
        <div className="md:min-w-full md:px-20 justify-between flex flex-row">
          <div className="">
              <p>{exercise.exercise_1}
              </p>
              <FaTimes style={{ color: 'red', cursor: 'pointer' }}/>
              <FaPencilAlt className='ml-20'/>
            </div>
          <div className=""><p>{exercise.exercise_2 } <FaTimes/> <FaPencilAlt/></p></div>
          <div className=""><p>{exercise.exercise_3} <FaTimes/> <FaPencilAlt/></p></div>
        </div>

    </>
  )
}
export default TRexercise

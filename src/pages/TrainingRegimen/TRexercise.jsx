const TRexercise = ({ exercise }) => {
  const myArr = []
  let j = 0
  let exerciseStringIndex = 0
  let exerciseTitle = ''
  let exerciseInstruction = ''

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
        if (exerciseTitle) {
          return (
           <div key={index} className='border-4 border-darkBlue rounded-xl bg-pinkishOrange p-6 mt-6'>
             <h1 className='font-bold'> {exerciseTitle}</h1>
             <p className='mt-4'> {exerciseInstruction}</p>
           </div>
          )
        } else { return null }
      })
    )
  }

  return (
    <div className='my-14'>
       <h1 className='text-xl'> {exercise.title} Routine</h1>
       <div className='flex justify-evenly px-8 mt-8'>
         {returnExercises()}
       </div>
    </div>
  )
}
export default TRexercise

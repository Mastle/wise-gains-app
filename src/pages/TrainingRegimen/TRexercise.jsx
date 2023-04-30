// TODO: Designing the exercise cards, Creating Add, remove and edit functionalities

import { useEffect } from 'react'
import { FaTimes, FaPencilAlt } from 'react-icons/fa'

const TRexercise = ({ exercise }) => {
 //I want to separate each exercise, extract the title and the instruction, and in the end, put them in the presentation area
 //It looks like I need an array that holds each exercise individually
const myArr = []
let j = 0


for (const i in exercise){
  myArr[j++] = exercise[i]
 }
 
myArr.map( e => console.log(e))
 //current step: finally fucking got the array of strings that holds each exercise separately, time to parse them properly


  return (
    <>

        <h1>{exercise.title} Routine</h1>
        <div className="md:min-w-full md:px-20 justify-between flex flex-row">
          <div className="">
              <p>{exercise.exercise_1}  {/* Must use Javascript string manipulation to separate the title from the instruction, 
              will use h1 for the title of the card */}
              </p>
              <FaTimes style={{color: 'red', cursor: 'pointer'}}/> 
              <FaPencilAlt className='ml-20'/>
            </div>
          <div className=""><p>{exercise.exercise_2 } <FaTimes/> <FaPencilAlt/></p></div>
          <div className=""><p>{exercise.exercise_3} <FaTimes/> <FaPencilAlt/></p></div>
        </div>
    </>
  )
}
export default TRexercise

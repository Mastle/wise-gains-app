import { useState } from "react"


const TRinputs = ({isSubmitted}) => {
  const [weight, setWeight] = useState('') 
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [experienceLevel, setExperienceLevel] = useState('Intermediate')
     
       const onTrainingOptionChange = e => {
        setExperienceLevel(e.target.value)
       }



       const onSubmit = (e) => {
        e.preventDefault()
    
        // if (!text) {
        //   alert('Please add a task')
        //   return
        // }
        
        isSubmitted(true)
      
      }


  return (
     <>
    <div className="text-center text-2xl text-darkBlue md:text-4xl py-5">Enter your information to get a proper training regimen</div>
    <div className="container mx-auto p-5 flex flex-col justify-center items-center text-2xl md:text-3xl ">
      <form onSubmit={onSubmit}>
        <div className="my-20 text-center">
          <label
            htmlFor="weight-input"
            className="block mb-8 md:text-3xl text-xl">Weight (kg)</label>
          <input
            type="text"
            placeholder="e.g. 50, 70, 100"
            className="border border-black focus:outline-none focus:border-brightRed focus:border-2 shadow-sm shadow-brightRed md:text-2xl text-sm p-2"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}/>
        </div>

        <div className="my-20 text-center">
          <label
            htmlFor="weight-input"
            className="block mb-8 md:text-3xl text-xl">Height (cm)</label>
          <input
            type="text"
            placeholder="170, 180, 190"
            className="border border-black focus:outline-none focus:border-brightRed focus:border-2 shadow-sm shadow-brightRed md:text-2xl text-sm p-2"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            />
          </div>

        <div className="my-20 text-center">
          <label
            htmlFor="weight-input"
            className="block mb-8 md:text-3xl text-xl">Age</label>
          <input
            type="text"
            className="border border-black focus:outline-none focus:border-brightRed focus:border-2 shadow-sm shadow-brightRed md:text-2xl text-sm p-2"
            value={age}
            onChange={(e) => setAge(e.target.value)}/>
          </div>

        <div className="my-20 text-center">
          <label htmlFor="training-experience-input"
          className="block mb-8 md:text-3xl text-xl">Training experience</label>
          <div className="mb-3 md:text-3xl text-xl">
            <input
              type="radio"
              name="training-experience"
              className="mx-5"
              value="Beginner"
              checked={experienceLevel === "Beginner"}
              onChange={onTrainingOptionChange}
            />
          <label>
            Beginner
          </label>
        </div>

        <div className="mb-3 md:text-3xl text-xl">
            <input
              type="radio"
              name="training-experience"
              className="mx-5"
              value="Intermediate"
              checked={experienceLevel === "Intermediate"}
              onChange={onTrainingOptionChange}
            />
          <label>
            Intermediate
          </label>
        </div>

        <div className="mb-3 md:text-3xl text-xl">
            <input
              type="radio"
              name="training-experience"
              className="mx-5"
              value="Expert"
              checked={experienceLevel === "Expert"}
              onChange={onTrainingOptionChange}
            />
          <label>
           Expert
          </label>
        </div>
          </div>
          <div>
          <input
            type='submit'
            value='Enter'
            className='text-lg whitespace-nowrap p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block md:mx-auto my-10 ml-16 hover:cursor-pointer' />
          </div>
      </form>
    </div>
    </>

  )
}

export default TRinputs


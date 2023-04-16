import { useState } from 'react'

const TRinputs = ({ isTrainingFormSubmitted, age, setAge, height, setHeight, weight, setWeight }) => {
  const [experienceLevel, setExperienceLevel] = useState('Intermediate')
  const [errors, setErrors] = useState({ weightError:'', heightError:'', ageError:''})
  let formIsValidted = true

  const onTrainingOptionChange = e => {
    setExperienceLevel(e.target.value)
  }

  const formValidation = () => {
    //TODO: review the form validation functions for one final time then move on to data
    
    // weight input validation
    if (!weight) {
      formIsValidted = false
      setErrors(errors => ({...errors, weightError: 'Please add your weight!' }))
      return
    }
    const newWeight = weight.replace(/\s/g, '')
    if (isNaN(newWeight)) {
      formIsValidted = false
      setErrors(errors => ({...errors, weightError: 'only numbers are allowed in the weight field!' }))
    }

    if (Number(newWeight) <= 30 || Number(newWeight) >= 200) {
      formIsValidted = false
      setErrors(errors => ({...errors, weightError: 'weight field will not accept less than 30 or more than 200!' }))
    }

    // height input validation
    if (!height) {
      formIsValidted = false
      setErrors(errors => ({...errors, heightError: 'please add your height' }))
      return
    }
    const newHeight = height.replace(/\s/g, '')
    if (isNaN(newHeight)) {
      formIsValidted = false
      setErrors(errors => ({...errors, heightError: 'only numbers are allowed in the height field' }))
    }

    if (Number(newHeight) <= 140 || Number(newHeight) >= 230) {
      formIsValidted = false
      setErrors(errors => ({...errors, heightError: 'height field will not accept less than 140 or more than 230' }))
      
    }

    // age input validation
    if (!age) {
      formIsValidted = false
      setErrors(errors => ({...errors, ageError: 'please add your age' }))
      return

    }
    const newAge = age.replace(/\s/g, '')
    if (isNaN(newAge)) {
      formIsValidted = false
      setErrors(errors => ({...errors, ageError: 'only numbers are allowed in the age field' }))
    }

    if (Number(newAge) <= 18 || Number(newAge) >= 50) {
      formIsValidted = false
      setErrors(errors => ({...errors, ageError: 'age field will not accept less than 18 or more than 50' }))
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    formValidation()

    if (formIsValidted) {
      isTrainingFormSubmitted(true)
    }
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
            <span className="block mt-5 text-base text-red-700">{errors.weightError}</span>
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
            <span className="block mt-5 text-base text-red-700">{errors.heightError}</span>
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
            <span className="block mt-5 text-base text-red-700">{errors.ageError}</span>
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
              checked={experienceLevel === 'Beginner'}
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
              checked={experienceLevel === 'Intermediate'}
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
              checked={experienceLevel === 'Expert'}
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

import { useState } from 'react'

const TRinputs = ({ setIsTrainingFormSubmitted, age, setAge, height, setHeight, weight, setWeight, experienceLevel, setExperienceLevel }) => {
  const [errors, setErrors] = useState({ weightError: '', heightError: '', ageError: '' })
  let formIsValidted = true

  const onTrainingOptionChange = e => {
    setExperienceLevel(e.target.value)
  }

  // weight input validation
  const weightValidation = (weight) => {
    const newWeight = weight.replace(/\s/g, '')
    if (!weight) {
      formIsValidted = false
      setErrors(errors => ({ ...errors, weightError: 'Please add your weight!' }))
    } else if (isNaN(weight)) {
      formIsValidted = false
      setErrors(errors => ({ ...errors, weightError: 'only numbers are allowed in the weight field!' }))
    } else if (Number(weight) < 30 || Number(newWeight) > 200) {
      formIsValidted = false
      setErrors(errors => ({ ...errors, weightError: 'weight field will not accept less than 30 or more than 200!' }))
    } else {
      setErrors(errors => ({ ...errors, weightError: '' }))
    }
  }

  // height input validation
  const heightValidation = (height) => {
    const newHeight = height.replace(/\s/g, '')
    if (!newHeight) {
      formIsValidted = false
      setErrors(errors => ({ ...errors, heightError: 'please add your height' }))
    } else if (isNaN(newHeight)) {
      formIsValidted = false
      setErrors(errors => ({ ...errors, heightError: 'only numbers are allowed in the height field' }))
    } else if (Number(newHeight) < 140 || Number(newHeight) > 230) {
      formIsValidted = false
      setErrors(errors => ({ ...errors, heightError: 'height field will not accept less than 140 or more than 230' }))
    } else {
      setErrors(errors => ({ ...errors, heightError: '' }))
    }
  }

  // age input validation
  const ageValidation = (age) => {
    const newAge = age.replace(/\s/g, '')
    if (!newAge) {
      formIsValidted = false
      setErrors(errors => ({ ...errors, ageError: 'please add your age' }))
    } else if (isNaN(newAge)) {
      formIsValidted = false
      setErrors(errors => ({ ...errors, ageError: 'only numbers are allowed in the age field' }))
    } else if (Number(newAge) < 18 || Number(newAge) > 50) {
      formIsValidted = false
      setErrors(errors => ({ ...errors, ageError: 'age field will not accept less than 18 or more than 50' }))
    } else {
      setErrors(errors => ({ ...errors, ageError: '' }))
    }
  }

  const formValidation = (weight, height, age) => {
    weightValidation(weight)
    heightValidation(height)
    ageValidation(age)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    formValidation(weight, height, age)

    if (formIsValidted) {
      setIsTrainingFormSubmitted(true)
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
            type="number"
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

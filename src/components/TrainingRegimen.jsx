import React from 'react'

const TrainingRegimen = () => {
  return (
     <>
    <div className="text-center text-2xl text-darkBlue md:text-4xl py-5">Enter your information to get a proper training regimen</div>
    <div className="container mx-auto p-5 flex flex-col justify-center items-center text-2xl md:text-3xl ">
      <form>
        <div className="my-20 text-center">
          <label
            htmlFor="weight-input"
            className="block mb-8 md:text-3xl text-xl">Weight (kg)</label>
          <input
            type="text"
            placeholder="e.g. 50, 70, 100"
            className="border border-black focus:outline-none focus:border-brightRed focus:border-2 shadow-sm shadow-brightRed md:text-2xl text-sm p-2"/>
        </div>

        <div className="my-20 text-center">
          <label
            htmlFor="weight-input"
            className="block mb-8 md:text-3xl text-xl">Height (cm)</label>
          <input
            type="text"
            placeholder="170, 180, 190"
            className="border border-black focus:outline-none focus:border-brightRed focus:border-2 shadow-sm shadow-brightRed md:text-2xl text-sm p-2"/>
          </div>

        <div className="my-20 text-center">
          <label
            htmlFor="weight-input"
            className="block mb-8 md:text-3xl text-xl">Age</label>
          <input
            type="text"
            className="border border-black focus:outline-none focus:border-brightRed focus:border-2 shadow-sm shadow-brightRed md:text-2xl text-sm p-2"/>
          </div>

        <div className="my-20 text-center">
          <label htmlFor="training-experience-input"
          className="block mb-8 md:text-3xl text-xl">Training experience</label>
          <div className="mb-3 md:text-3xl text-xl">
          <label>
            <input
              type="radio"
              name="training-experience"
              value="option1"
              checked={true}
              className="mx-5"
            />
            Beginner
          </label>
        </div>

        <div className="mb-3 md:text-3xl text-xl">
          <label>
            <input
              type="radio"
              name="training-experience"
              value="option2"
              className="mx-5"
            />
            Intermediate
          </label>
        </div>

        <div className="mb-3 md:text-3xl text-xl">
          <label>
            <input
              type="radio"
              name="training-experience"
              value="option3"
              className="mx-5"
            />
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

export default TrainingRegimen

/*
 TO DO:

 - need to add a "go back" button
 - Return a random work out regimen once the inputs are handled
 - Make the regimen as dynamic as you want
 - Add a JSON server backend

*/

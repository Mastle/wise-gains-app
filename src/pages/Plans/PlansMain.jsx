//TODO: main container requires better placement for mobile version
// Each plan becomes a component of its own with a commenting system that shows user reviews
import { bodyWeightTrainingPic, advancedWeightTrainingPic, completeAthleteTrainingPic, dumbbellTrainingProgramPic, completeAthleteTrainingTwoPic } from '../../assets/plans-pics'

const PlansMain = () => {
  return (
    <>
        <div>
          <h1 className="mx-auto text-darkBlue text-center md:text-7xl
          text-5xl mt-20 border-8 max-w-4xl border-brightRedLight p-10 rounded-xl mx-10"> THE TRAINING </h1>
        </div>
        <div className="mb-6 container mx-auto md:flex flex-wrap justify-between">
            <div className='mt-10 pl-12'>
                <img src={bodyWeightTrainingPic} alt="" />
                <button className='bg-darkBlue text-white w-[333px] py-3 text-lg'>Learn more</button>
            </div>
            <div className='mt-10 pl-12'>
                <img src={advancedWeightTrainingPic} alt="" />
                <button className='bg-darkBlue text-white w-[328px] py-3 text-lg'>Learn more</button>
            </div>
            <div className='mt-10 pl-12'>
                <img src={completeAthleteTrainingPic} alt="" />
                <button className='bg-darkBlue text-white w-[328px] py-3 text-lg'>Learn more</button>
            </div>
            <div className='mt-10 pl-12'>
                <img src={dumbbellTrainingProgramPic} alt="" />
                <button className='bg-darkBlue text-white w-[328px] py-3 text-lg'>Learn more</button>
            </div>
            <div className='mt-10 pl-12'>
                <img src={completeAthleteTrainingTwoPic} alt="" />
                <button className='bg-darkBlue text-white w-[328px] py-3 text-lg'>Learn more</button>
            </div>
            <div className='mt-10 pl-12'>
                <img src={bodyWeightTrainingPic} alt="" />
                <button className='bg-darkBlue text-white w-[333px] py-3 text-lg'>Learn more</button>
            </div>
            </div>
    </>
  )
}
export default PlansMain

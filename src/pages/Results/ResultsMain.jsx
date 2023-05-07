// TODO: currently working on this page - need to make the header (result) responsive -
/* Steps:
a- create the static page first
b- Need a result component to render each result after receiving them from the database
c- Use the figma mockup
*/

import { personOne, personTwo } from '../../assets/results-img/index'

const ResultsMain = () => {
  return (
    <div>
      <div>
        <h1 className="result-header md:relative md:left-[30rem] text-white text-center md:text-9xl
        text-5xl mt-20 border-8 max-w-4xl border-darkBlue p-10 rounded-xl mx-10"> Results </h1>
      </div>
      <div>
        <div className='md:w-[1000px] mx-auto mt-20 border-t-4 border-darkBlue pt-4 md:mb-40'> {/* Each one is a result component */}
            <div className='float-right ml-4'>
              <img className='float-left w-[47%]' src={personOne} alt="" />
              <img className='float-left w-[47%] ml-5' src={personTwo} alt="" />
            </div>
            <div className='ml-4'>
               <h2 className='relative top-2 md:static font-semibold text-xl my-2'>JOHN DOE - 30 YEAR OLD CHAD</h2>
               <p className='mt-4'>
                lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iusto unde, et dolores iure non ab distinctio
                a nesciunt facere excepturi molestiae quia error ut odio porro earum perferendis aliquam facilis voluptate natus ex eveniet accusamus nemo!
                ugiat quisquam veniam rerum voluptates beatae error ipsum a id at, eum placeat unde nobis reiciendis officiis, autem praesentium hic repellendus odio et!
               </p>
            </div>
        </div>
        <div className='md:w-[1000px] mx-auto mt-20 border-t-4 border-darkBlue pt-4  md:pb-40'> {/* Each one is a result component */}
            <div className='float-left ml-4'>
              <img className='float-left w-[47%]' src={personOne} alt="" />
              <img className='float-left w-[47%] ml-5' src={personTwo} alt="" />
            </div>
            <div className='ml-4'>
               <h2 className='relative top-2 md:static font-semibold text-xl my-2'>JOHN DOE - 30 YEAR OLD CHAD</h2>
               <p className='mt-4'>
                lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iusto unde, et dolores iure non ab distinctio
                a nesciunt facere excepturi molestiae quia error ut odio porro earum perferendis aliquam facilis voluptate natus ex eveniet accusamus nemo!
                ugiat quisquam veniam rerum voluptates beatae error ipsum a id at, eum placeat unde nobis reiciendis officiis, autem praesentium hic repellendus odio et!
               </p>
            </div>
        </div>
        <div className='md:w-[1000px] mx-auto mt-20 border-t-4 border-darkBlue pt-4 md:mb-40'> {/* Each one is a result component */}
            <div className='float-right ml-4'>
              <img className='float-left w-[47%]' src={personOne} alt="" />
              <img className='float-left w-[47%] ml-5' src={personTwo} alt="" />
            </div>
            <div className='ml-4'>
               <h2 className='relative top-2 md:static font-semibold text-xl my-2'>JOHN DOE - 30 YEAR OLD CHAD</h2>
               <p className='mt-4'>
                lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iusto unde, et dolores iure non ab distinctio
                a nesciunt facere excepturi molestiae quia error ut odio porro earum perferendis aliquam facilis voluptate natus ex eveniet accusamus nemo!
                ugiat quisquam veniam rerum voluptates beatae error ipsum a id at, eum placeat unde nobis reiciendis officiis, autem praesentium hic repellendus odio et!
               </p>
            </div>
        </div>
        <div className='md:w-[1000px] mx-auto mt-20 border-t-4 border-darkBlue pt-4  md:pb-40 pb-10'> {/* Each one is a result component */}
            <div className='float-left ml-4'>
              <img className='float-left w-[47%]' src={personOne} alt="" />
              <img className='float-left w-[47%] ml-5' src={personTwo} alt="" />
            </div>
            <div className='ml-4'>
               <h2 className='relative top-2 md:static font-semibold text-xl my-2'>JOHN DOE - 30 YEAR OLD CHAD</h2>
               <p className='mt-4'>
                lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iusto unde, et dolores iure non ab distinctio
                a nesciunt facere excepturi molestiae quia error ut odio porro earum perferendis aliquam facilis voluptate natus ex eveniet accusamus nemo!
                ugiat quisquam veniam rerum voluptates beatae error ipsum a id at, eum placeat unde nobis reiciendis officiis, autem praesentium hic repellendus odio et!
               </p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default ResultsMain

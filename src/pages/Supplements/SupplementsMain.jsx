// users can rate the supplements, there is a supplement rating system
import { proVegan, proRed, rxOne, rxTwo } from '../../assets/supplements-img/index'
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa'

const SupplementsMain = () => {
  return (
    <>
      <div className="mt-10 mx-5 md:w-[73%] mx-auto pb-10">
       <p className="mx-5 text-2xl  border-b-4 border-darkBlue pb-2"><span className="text-brightRed">WG </span>Supplements</p>
       <div className='md:flex flex-wrap justify-between'>
         <div className='mt-4 md:w-[19%]'>
           <img src={proRed} alt="" />
           <h2 className='text-center text-2xl font-bold'>PRO 30G</h2>
           <h6 className='text-center pt-2 text-[#777777]'>Premium Protein Powder</h6>
           <h3 className='text-center pt-2 text-xl'>$59.99</h3>
           <div className='text-center'>
            <div className='inline'>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStarHalfAlt style={{ display: 'inline' }}/>
              <FaRegStar style={{ display: 'inline' }}/>
            </div>
            <div className='inline'><span> (3.5)</span></div>
           </div>
         </div>
         <div className='mt-4 md:w-[19%]'>
           <img src={proVegan} alt="" />
           <h2 className='text-center text-2xl font-bold'>PRO 30G Vegan</h2>
           <h6 className='text-center pt-2 text-[#777777]'>Premium Protein Powder</h6>
           <h3 className='text-center pt-2 text-xl'>$59.99</h3>
           <div className='text-center'>
            <div className='inline'>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStarHalfAlt style={{ display: 'inline' }}/>
              <FaRegStar style={{ display: 'inline' }}/>
            </div>
            <div className='inline'><span> (3.5)</span></div>
           </div>
         </div>
         <div className='mt-4 md:w-[22%]'>
           <img className='pl-8' src={rxOne} alt="" />
           <h2 className='text-center text-2xl font-bold'>X-CITE</h2>
           <h6 className='text-center pt-2 text-[#777777]'>Premium Protein Powder</h6>
           <h3 className='text-center pt-2 text-xl'>$59.99</h3>
           <div className='text-center'>
            <div className='inline'>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStarHalfAlt style={{ display: 'inline' }}/>
              <FaRegStar style={{ display: 'inline' }}/>
            </div>
            <div className='inline'><span> (3.5)</span></div>
           </div>
         </div>
         <div className='mt-4 pb-2 md:w-[22%]'>
           <img className='pl-8' src={rxTwo} alt="" />
           <h2 className='text-center text-2xl font-bold'>RECONSTRUCTIONX</h2>
           <h6 className='text-center pt-2 text-[#777777]'>Premium Protein Powder</h6>
           <h3 className='text-center pt-2 text-xl'>$59.99</h3>
           <div className='text-center'>
            <div className='inline'>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStarHalfAlt style={{ display: 'inline' }}/>
              <FaRegStar style={{ display: 'inline' }}/>
            </div>
            <div className='inline'><span> (3.5)</span></div>
           </div>
         </div>
         <div className='mt-4 md:w-[19%]'>
           <img src={proRed} alt="" />
           <h2 className='text-center text-2xl font-bold'>PRO 30G</h2>
           <h6 className='text-center pt-2 text-[#777777]'>Premium Protein Powder</h6>
           <h3 className='text-center pt-2 text-xl'>$59.99</h3>
           <div className='text-center'>
            <div className='inline'>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStarHalfAlt style={{ display: 'inline' }}/>
              <FaRegStar style={{ display: 'inline' }}/>
            </div>
            <div className='inline'><span> (3.5)</span></div>
           </div>
         </div>
         <div className='mt-4 md:w-[19%]'>
           <img src={proVegan} alt="" />
           <h2 className='text-center text-2xl font-bold'>PRO 30G Vegan</h2>
           <h6 className='text-center pt-2 text-[#777777]'>Premium Protein Powder</h6>
           <h3 className='text-center pt-2 text-xl'>$59.99</h3>
           <div className='text-center'>
            <div className='inline'>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStarHalfAlt style={{ display: 'inline' }}/>
              <FaRegStar style={{ display: 'inline' }}/>
            </div>
            <div className='inline'><span> (3.5)</span></div>
           </div>
         </div>
         <div className='mt-4 md:w-[22%]'>
           <img className='pl-8' src={rxOne} alt="" />
           <h2 className='text-center text-2xl font-bold'>X-CITE</h2>
           <h6 className='text-center pt-2 text-[#777777]'>Premium Protein Powder</h6>
           <h3 className='text-center pt-2 text-xl'>$59.99</h3>
           <div className='text-center'>
            <div className='inline'>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStarHalfAlt style={{ display: 'inline' }}/>
              <FaRegStar style={{ display: 'inline' }}/>
            </div>
            <div className='inline'><span> (3.5)</span></div>
           </div>
         </div>
         <div className='mt-4 pb-2 md:w-[22%]'>
           <img className='pl-8' src={rxTwo} alt="" />
           <h2 className='text-center text-2xl font-bold'>RECONSTRUCTIONX</h2>
           <h6 className='text-center pt-2 text-[#777777]'>Premium Protein Powder</h6>
           <h3 className='text-center pt-2 text-xl'>$59.99</h3>
           <div className='text-center'>
            <div className='inline'>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStar style={{ display: 'inline' }}/>
              <FaStarHalfAlt style={{ display: 'inline' }}/>
              <FaRegStar style={{ display: 'inline' }}/>
            </div>
            <div className='inline'><span> (3.5)</span></div>
           </div>
         </div>
      </div>
      </div>
    </>
  )
}
export default SupplementsMain

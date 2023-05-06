import { avatarPicOne, avatarPicTwo, avatarPicThree } from '../../assets/avatars'
import { Link } from 'react-router-dom'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What&apos;s Different About Wise Gains?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src={avatarPicOne} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Richard Watts</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Wise Gains has supercharged my workflow as a professional athlete. The ability to
              maintain visibility on larger milestones at all times keeps
              me extremely motivated.”
            </p>
          </div>

          <div
            className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src={avatarPicTwo} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              “I have been able to cancel so many other subscriptions since
              using Wise Gains. There is no more doubt regarding my fitness progress and
              I am much more focused.”
            </p>
          </div>

          <div
            className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src={avatarPicThree} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Wise Gains has supercharged my workflow as a professional athlete. The ability to
              maintain visibility on larger milestones at all times keeps
              me extremely motivated.”
            </p>
          </div>
        </div>
        <div className="my-16">
          <Link

            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            to='/training-regimen' >Get Started</Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

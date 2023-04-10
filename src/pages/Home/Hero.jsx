import heroPics from '../../assets/hero-working-out-pics.png'

const Hero = () => {
  return (
    <section>
      <div
        className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
      >
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2 pt-6">
          <h1
            className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
          >
            Begin your athletic journey with a tried-and-true method
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Wise Gains makes it simple for you to your work out routine
            while keeping up to date with the latest scientific
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >Get Started</a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={heroPics} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero

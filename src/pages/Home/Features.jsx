
const Features = () => {
  return (
    <section id="features">
      <div
        className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
      >
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What&apos;s different about Wise Gains?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Wise Gains provides all the functionality you need, without the
            complexity. Our software is tailor-made for fitness enthusiasts.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          <div
            className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div
                  className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track your day-to-day progress
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track day-to-day progress
              </h3>
              <p className="text-darkGrayishBlue">
                See how your day-to-day actions fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div
                  className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Advanced built-in reports
              </h3>
              <p className="text-darkGrayishBlue">
                Set track progress toward your goals. Our customisable dashboard helps you build out
                the reports you need to stay informed.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div
                  className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p className="text-darkGrayishBlue">
                Stop jumping from one service to anothe, store
                files, track tasks and share your progress with others. Wise Gains offers an
                all-in-one athlete progress solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

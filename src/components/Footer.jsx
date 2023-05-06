import { iconFacebook, iconTwitter, iconYoutube, iconInstagram, iconPinterest } from '../assets/footer-icons'
import logoWhite from '../assets/logo-white.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div
        className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        <div
          className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          <div>
            <Link to='/'>
             <img src={logoWhite} className="h-8" alt="" />
            </Link>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src={iconFacebook} alt="" className="h-8" />
            </a>
            <a href="#">
            <img src={iconYoutube} alt="" className="h-8" />
            </a>
            <a href="#">
            <img src={iconTwitter} alt="" className="h-8" />
            </a>
            <a href="#">
              <img src={iconInstagram} alt="" className="h-8" />
            </a>
            <a href="#">
              <img src={iconPinterest} alt="" className="h-8" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">Home</a>
            <a href="#" className="hover:text-brightRed">Pricing</a>
            <a href="#" className="hover:text-brightRed">Products</a>
            <a href="#" className="hover:text-brightRed">About</a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">Careers</a>
            <a href="#" className="hover:text-brightRed">Community</a>
            <a href="#" className="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

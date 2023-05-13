import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuStyleClass = 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
  const menuResponsiveClass = 'block hamburger md:hidden focus:outline-none'

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
     <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pr-2">
          <Link to='/'>
           <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="hidden text-lg space-x-12 md:flex pr-10">
          <Link to="/results" className="hover:text-darkGrayishblue">Results</Link>
          <Link to="/plans" className="hover:text-darkGrayishblue">Plans</Link>
          <a href="#" className="hover:text-darkGrayishblue">Supplements</a>
          <a href="#" className="hover:text-darkGrayishblue">About</a>
        </div>
        <Link className="hidden text-lg whitespace-nowrap p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        to='/training-regimen'>Get started</Link>
        <button id="menu-btn" onClick={handleMenuClick} className={isMenuOpen ? menuResponsiveClass + ' open' : menuResponsiveClass}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div className="md:hidden">
        <div className={isMenuOpen ? menuStyleClass : 'hidden' } >
          <Link to="/results">Results</Link>
          <a href="#">Plans</a>
          <a href="#">Supplements</a>
          <a href="#">About Us</a>
        </div>
      </div>
     </nav>

  )
}
export default Navbar

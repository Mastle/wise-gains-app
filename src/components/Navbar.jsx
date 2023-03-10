import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuHidden, setIsMenuHidden] = useState(true)
  const menuStyleClass = 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
  const menuResponsiveClass = 'block hamburger md:hidden focus:outline-none'

  useEffect(() => {
    setIsMenuHidden(!isMenuOpen)
  }, [isMenuOpen])

  return (
     <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hidden text-lg space-x-12 md:flex pr-10">
          <a href="#" className="hover:text-darkGrayishblue">Pricing</a>
          <a href="#" className="hover:text-darkGrayishblue">Plans</a>
          <a href="#" className="hover:text-darkGrayishblue">Supplements</a>
          <a href="#" className="hover:text-darkGrayishblue">About</a>
        </div>
        <a
          className="hidden text-lg whitespace-nowrap p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
          ><Link to='/training-regimen'>Get started</Link></a>
        <button id="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} className={isMenuOpen ? menuResponsiveClass + ' open' : menuResponsiveClass}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div className="md:hidden">
        <div className={isMenuHidden ? 'hidden' : menuStyleClass } >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
     </nav>

  )
}
export default Navbar

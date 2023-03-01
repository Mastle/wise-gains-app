import Navbar from './components/Navbar'
import Button from './components/Button'
import './App.css'

const App = () => {
  const handleClick = () => {
    let sum = 0
    ++sum
    console.log(sum)
  }

  return (

    <div className="App">
      {/* <Navbar /> */}
      <Button onClick={handleClick}/>
     <p className="text-darkGrayishBlue px-3 py-2 text-4xl"> Best Fitness App Ever {'hello'}</p>
    </div>
  )
}

export default App

/*

TODO:
 1- Test a click event on a component
 2- Start building the Navbar following Brad's Tailwind and React tuts

After production:
-Make sure you run react tests after development is finished

*/

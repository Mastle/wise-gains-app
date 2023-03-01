import React from 'react'

const Button = ({onClick}) => {
  return (
    <button onClick={onClick} className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white">Click me to see something cool</button>
  )
}

export default Button
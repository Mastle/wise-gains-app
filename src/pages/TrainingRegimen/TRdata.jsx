//TODO: begin working on this component
import { useState, useEffect } from 'react'



const TRdata = ({setIsTrainingFormSubmitted, weight, height, age}) => {

  // const [newData, setNewData] = useState('')

  // useEffect( () =>{
   
  //    const getData = async () => {
  //    const dataFromServer = await fetchData()
  //    setNewData(dataFromServer)

  //  }

  //  getData()
   

  // },[])



  useEffect(()=> 
  { return () => setIsTrainingFormSubmitted(false)} ,[])  //TODO: this could still be fixed. Had to remove strict mode because of this

  
  


// const fetchData = async () => {
//     const res = await fetch('http://localhost:5000/routines')
//     const data = await res.json()

//     return data
//    }


// const showState = () => {
//   newData.map((data, index) => console.log('This is the data: ' + data.title + ' \n This is index: ' + data.id))
// }



  return (
    <div className="text-center text-lg">
     Your stats:
     <span>Weight: {weight}</span>
     <span>height: {height}</span>
     <span>age: {age}</span>
    </div>
    
  )
}

export default TRdata


import { useState, useEffect } from 'react'


const TRdata = () => {

  const [newData, setNewData] = useState('')

  useEffect( () =>{
   const getData = async () => {
    const dataFromServer = await fetchData()
    setNewData(dataFromServer)

   }

   getData()



  },[])


const fetchData = async () => {
    const res = await fetch('http://localhost:5000/routines')
    const data = await res.json()

    return data
   }


const showState = () => {
  newData.map((data, index) => console.log('This is the data: ' + data.title + ' \n This is index: ' + data.id))
}


  return (
    <div className="text-center text-lg">
      TrainingRegimenData:
      <button onClick={showState} className="border-4">Click me</button>
    </div>
    
  )
}

export default TRdata
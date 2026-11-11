import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './component/Card'

const App = () => {

  const [UserData, setUserData] = useState([])
   const [index,setindex]=useState(1)
    const getData= async()=>{
      const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`)
      setUserData(response.data)
      console.log(response.data)
    }
   


    let printUserData=<h3 className=' text-gray-400 absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 '>Loding....</h3>

    if(UserData.length > 0){
      printUserData=UserData.map(function(elem,idx){
        return <div key={idx}>
         <Card elem={elem}/>
        </div>
      })
    }
    useEffect(function(){
      getData()
    },[index])
  return (
    <div className='bg-black h-screen p-4 text-white'>
  
    <div className=' h-[82%] flex flex-wrap gap-4 p-4 mb-10 ' >
      {printUserData}
    </div>
    <div className='flex justify-center gap-6 items-center '>
      <button onClick={()=>{
        if(index>1){
          setindex(index-1)
          setUserData([])
        }
           
      }} 
      className='bg-amber-400 text-sm cursor-pointer active:scale-95  text-black rounded px-4 py-2 font-semibold'>
        Prev
      </button>
      <h4 className='bold text-xl'>Page {index}</h4>
      <button  onClick={()=>{
        setUserData([])
        setindex(index+1)

      }}
      className='bg-amber-400 text-sm cursor-pointer active:scale-95  text-black rounded px-4 py-2 font-semibold'>
        Next
        </button>
    </div>
    </div>
  )
}

export default App

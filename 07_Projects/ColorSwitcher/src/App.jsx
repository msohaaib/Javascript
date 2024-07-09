import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const buttons = document.querySelectorAll('.btn')
  const body = document.querySelector("body")
  
  buttons.forEach( (button) =>{
    button.addEventListener('click' , function(e){
      if (e.target.id === "Gray"){
        body.style.backgroundColor= e.target.id
      }
      if (e.target.id === "Green"){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === "Blue"){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === "Red"){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === "Black"){
        body.style.backgroundColor = e.target.id
        body.style.color = "white"
      }
    })
  } )

  return (
    <>
      <div className='flex flex-row gap-14 justify-center mt-48'>
        <div id='Gray' className='btn h-9 w-9 border cursor-pointer rounded-full bg-gray-600 text-white p-10 flex justify-center items-center'>Gray</div>
        <div id='Green' className='btn h-9 w-9 border cursor-pointer rounded-full bg-green-600 text-white p-10 flex justify-center items-center'>Green</div>
        <div id='Blue' className='btn h-9 w-9 border cursor-pointer rounded-full bg-blue-600 text-white p-10 flex justify-center items-center'>Blue</div>
        <div id='Red' className='btn h-9 w-9 border cursor-pointer rounded-full bg-red-600 text-white p-10 flex justify-center items-center'>Red</div>
        <div id='Black' className='btn h-9 w-9 border cursor-pointer rounded-full bg-black text-white p-10 flex justify-center items-center'>Black</div>
      </div>
        <h2 className='text-center my-10 text-2xl'>Press any button to change the backgroud color</h2>
    </>
  )
}

export default App

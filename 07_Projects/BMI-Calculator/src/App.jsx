import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col justify-center text-center my-44'>
        <h1 className='text-3xl my-10'>BMI - Calculator</h1>
        <form>
          <div className='flex flex-row gap-4 justify-center my-10 items-center'>
          <label htmlFor="height" className='text-xl mx-5'>Height in Cm : </label>
          <input type="number" name="Weight" id="height" className='border h-8 px-4 py-6 border-slate-300 rounded-full focus:border-slate-500' />
          </div>
          <div className='flex flex-row gap-4 justify-center items-center'>
          <label htmlFor="Weight" className='text-xl mx-5'>Weight in KG : </label>
          <input type="number" name="Weight" id="weight" className='border h-8 px-4 py-6 border-slate-300 rounded-full' />
          </div>
          <button className='mt-14 border px-6 py-3 rounded-full text-white bg-slate-600'>Calculate</button>
        </form>
      </div>
    </>
  )
}

export default App

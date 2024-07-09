import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>BMI - Calculator</h1>
        <form action="">
          <label htmlFor="height">Height in cm : </label>
          <input type="number" name="Weight" id="height" />
          <label htmlFor="Weight">Weight in KG : </label>
          <input type="number" name="Weight" id="weight" />
        </form>
      </div>
    </>
  )
}

export default App

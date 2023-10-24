import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const count = 0
  // const [variableName, ourSetterThatChangesTheValueOfTheVariable] = useState(initialState);

  const [count, setCount] = useState(0)
  const [name, setName] = useState("student")
  const [lastName, setLastName] = useState("student")

  return (
    <>        
      <div className="card">
      <h1>Welcome {name}</h1>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
      </form>
      </div>

      <div className="card">
      <h1>Count: {count}</h1>
        <button onClick={() => setCount((prevValueOfCount) => prevValueOfCount + 1)}>
          Add 1 to count
        </button>
        <button onClick={() => setCount((prevValueOfCount) => prevValueOfCount - 1)}>
          Substract 1 to count
        </button>
        <button onClick={() => setCount(0)}>
          Reset count to 0
        </button>

      </div>
    </>
  )
}

export default App

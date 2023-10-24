import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import e from 'cors'

function App() {
  // const count = 0
  // const [variableName, ourSetterThatChangesTheValueOfTheVariable] = useState(initialState);

  const [count, setCount] = useState(0)
  const [name, setName] = useState("student")
  const [done, setDone] = useState(false)
  const [student, setStudent] = useState({
    firstName: "John",
    lastName: "Doe",
  })

  const handleChange = (event) => {
    const keyName = event.target.id;
    const incomingValue = event.target.value;
    
    setStudent((prevStudent) => {
      return {
        ...prevStudent,
        [keyName]: incomingValue
      }
    })
  }

  const handleDone = () => setDone((prevValueOfDone) => !prevValueOfDone)

  return (
    <>        
      <div className="card">
      <h1>Welcome {student.firstName} {student.lastName}</h1>
      <form>
        <label>
          First name:
          <input type="text" id="firstName" onChange={handleChange} />
        </label>
        <br/>
        <label>
          Last name:
          <input type="text" id="lastName" onChange={handleChange} />
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
        <button onClick={handleDone}>
          {done ? "Not done" : "Done"}
        </button>
    </>
  )
}

export default App

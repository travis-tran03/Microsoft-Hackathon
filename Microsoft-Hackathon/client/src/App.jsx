import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/all').then((res) => {
      console.log(res.data);
      setData(res.data);
    })
  }, [])

  // element.split('\n')[0] => GET RID OF EXTRA TEXT IN DEPARTMENTS
  // element.replace('Majors: ', ''); => GET RID OF MAJORS IN MAJORS

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>College Major Quiz</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        {data && Object.values(data.Departments).map((element) => {
          return(
            <div> {element.split('\n')[0]} </div>
          )
        })}
      </p>
    </>
  )
}

export default App

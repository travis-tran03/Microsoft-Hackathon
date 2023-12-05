import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import myDrawing from './assets/Untitled.jpg'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0);

  // element.split('\n')[0] => GET RID OF EXTRA TEXT IN DEPARTMENTS
  // element.replace('Majors: ', ''); => GET RID OF MAJORS IN MAJORS

  return (
    <>
      <div>
        <a>
        <img src={myDrawing} alt="college image"/>
        </a>
      </div>
      <h1>College Major Quiz</h1>

    </>
  )
}

export default App

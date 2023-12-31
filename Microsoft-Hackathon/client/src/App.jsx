import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import myDrawing from './assets/canvas.png'

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
      <h1>College Major Suggestion Tool</h1>
      <p style={{fontSize: '2vh'}}>Let artificial intelligence help provide insight into choosing your career path! </p>
      <p style={{fontSize: '2vh'}}>Tell us about youself. What are your passions in life. Your life goals. What interests you?</p>
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createPlayer } from "./api";


function App() {
  const [count, setCount] = useState(0)
useEffect(() => {
  async function stuff(){
    const newPlayer = await createPlayer( {
      name: 'Rufus',
      breed: 'Irish Setter',
    })
    console.log(newPlayer);
  }
  stuff();
}, []);

  return (
    <>
  
    </>
  )
}

export default App

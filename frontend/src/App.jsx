import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddLocation from './components/AddLocation'
import Navbar from './components/Navbar'
import Worksheet from './components/Worksheet'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Worksheet/>
    </>
  )
}

export default App

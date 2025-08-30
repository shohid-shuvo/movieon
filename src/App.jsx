import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  const hangleClick = () => {setCount(prevCount => prevCount + 1)};

  return (
    <>
      <Header />
      <Home />  
    </>
  )
}

export default App

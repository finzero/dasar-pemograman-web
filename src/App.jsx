import { useState } from 'react'
import './App.css'
import DefaultLayout from './components/layout/DefaultLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
   <DefaultLayout />
  )
}

export default App

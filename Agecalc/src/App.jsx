import { useState } from 'react'

import './App.css'
import Agecalc from './components/Agecalc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Agecalc/>
    </div>
  )
}

export default App

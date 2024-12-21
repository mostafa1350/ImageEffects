import { useState } from 'react'
import Card_border from './Cards/Card_border'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card_border />
    </>
  )
}

export default App

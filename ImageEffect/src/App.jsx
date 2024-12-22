import { useState } from 'react'
import Card_border from './Cards/Card_border'
import { Route , Routes } from 'react-router-dom'
import Another_card from './Cards/Another_card'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Card_border />}/>
      <Route path='/another' element={<Another_card />}/>
    
    </Routes>
      
    </>
  )
}

export default App

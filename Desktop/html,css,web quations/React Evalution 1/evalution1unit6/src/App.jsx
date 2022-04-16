import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routers } from './Routers/Routers'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import answers from './answers.js'
import EightBall from './EightBall.jsx'
import './App.css'
import './EightBall.css'


function App() {
  // console.log(answers)/
  return (
    <EightBall answers={answers}/>
  )
  
}

export default App;

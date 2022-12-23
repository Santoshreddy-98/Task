import React from 'react'
import CreateQuestion from './components/CreateQuestion'
import Randomization from './components/Randomization'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddVariables from './components/AddVariables'
import Insert from './components/Insert'
import "./style/style.css"
const App = () => {
  return <>

    <Router>
      
    <CreateQuestion />
      <Routes>
        <Route  path='/randomization' to={<Randomization/>}/>
        <Route  path='/addVariables' to={<AddVariables/>}/>
        <Route  path='/insert' to={<Insert/>}/>
      </Routes>
    </Router>


  </>
}

export default App
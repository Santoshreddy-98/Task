import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AddVariables from './AddVariables'
import Insert from './Insert'
import Randomization from './Randomization'
const CreateQuestion = () => {
  let [variables, setVariables] = useState({
    a: 4,
    b: 5,
    finalAnswer:0
  })

  let [addclick, setAddClick] = useState(false)
  let [insertClick, setInsertClick] = useState(false)
  let [randomClick, setRandomClick] = useState(false)

  let changeValue = (x) => {
    let value1 = prompt(x)
    let value=Math.floor(value1)
    if (x === variables.a) {
      setVariables({ ...variables, a: value })
    }
    if (x === variables.b) {
      setVariables({ ...variables, b: value })
    }
  }
  
  let fetchAnswer=(ans)=>{
      console.log("Fetched data:"+ans)
      
      setVariables({...variables,finalAnswer:ans})
  }
  return <>

    <div className="container">
      <div className="row ">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>Manish has <span onClick={changeValue.bind(this, variables.a)}>{variables.a}</span> pencils, rajesh gives him <span onClick={changeValue.bind(this, variables.b)} >{variables.b}</span> more pencils. How many pencils does he have ?</h2>
            <h1>Answer = {variables.finalAnswer}</h1>
            </div>

          </div>
          <div className="row">
            <div className="col-md-8">
              <div className='controls'>
                <Link to="/addVariables" onClick={() => { setAddClick(true); setInsertClick(false); setRandomClick(false) }} className='btn btn-success'>Add variables</Link>
                <Link to="/insert" onClick={() => { setAddClick(false); setInsertClick(true); setRandomClick(false) }} className='btn btn-success'>Insert</Link>
                <Link to="/randomization" onClick={() => { setAddClick(false); setInsertClick(false); setRandomClick(true) }} className='btn btn-success'>Randomization</Link>
              </div>


            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {addclick ? <AddVariables sendVar={variables} method={fetchAnswer}  /> : null}
              {insertClick ? <Insert /> : null}
              {randomClick ? <Randomization  sendVar={variables}/> : null}

            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default CreateQuestion
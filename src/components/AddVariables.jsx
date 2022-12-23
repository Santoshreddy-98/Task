import React, { useEffect, useState } from 'react'

const AddVariables = (props) => {
  let [variable, setVariable] = useState({
    a: 0,
    b: 0,
    answer: 0
  })
  let [logic, setLogic] = useState({
        statement: null
  })
 
  useEffect(() => {
    setVariable({ ...variable, a: props.sendVar.a, b: props.sendVar.b })
  }, [])

  let solveFunction = (event) => {
    let a = variable.a
    let b = variable.b
    let result = eval(logic.statement)
    console.log(result);
    setVariable({ ...variable, answer: result })
       sendAnswer()
  }


  let changeVariables = (event) => {
    event.preventDefault()
    setLogic({ [event.target.name]: event.target.value })

  }



  let sendAnswer=()=>{
  props.method(variable.answer)
  }
  return <>
    <div className="container">
      <div className="row">
        <div className="col">
          <pre>{JSON.stringify(props.variables)}</pre>
          <pre>{JSON.stringify(logic)}</pre>
          <div className='form-group'>
            <label >a</label><input type="number" value={variable.a} placeholder='Add variable' /><br />
          </div>
          <div className='form-group'>
            <label >b</label><input type="number" value={variable.b} placeholder='Add variable' /><br />
          </div>
          <div className='form-group'>
            <label >Logic</label><input type="text" name="statement" required onChange={changeVariables} placeholder='Add logic' /><br />
          </div>
          <button className='btn btn-info' onClick={solveFunction}>Answer</button> <input type="text" value={variable.answer} disabled />
        </div>
      </div>
    </div>
  </>
}

export default AddVariables
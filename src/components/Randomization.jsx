import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Randomization = (props) => {
  
  // let [variables, setVariables] = useState({})
  let [random, setRandom] = useState({
    a: 0,
    b: 0
  })
  // useEffect(() => {
  //   setVariables(props.sendVar)
  // }, [])

  let randomize = () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const int = Math.floor(Math.random() * 10)
    const int1 = Math.floor(Math.random() * 10)
    setRandom({ a: values[int], b: values[int1] })
  }


  
  return <>
    <pre>{JSON.stringify(random)}</pre>
    
    <h4 >Manish has {random.a} pencils, rajesh gives him {random.b} more pencils. How many pencils does he have ?</h4>
    <h3>Answer={random.a + random.b}</h3>
    <button onClick={ randomize}>click</button>
  </>
}

export default Randomization
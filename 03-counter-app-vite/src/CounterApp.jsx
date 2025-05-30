import React from 'react'; // Necesario si usas JSX
import PropTypes from 'prop-types'
import {useState} from 'react'


export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);
    const  handleAdd = (event) =>{
        // setCounter(counter + 1)
         setCounter(c =>c + 1)
    }

    const  handlerMinus = (event) => setCounter(c => parseInt(c - 1))
    

    const  reset = (event) => setCounter(value)
   
  return (
    <>
    <h1>Counter app</h1>
    <h2>{counter}</h2>
    <button onClick={handleAdd}>
        +1
    </button>
    <button onClick={handlerMinus}>
        -1
    </button>
    <button aria-label='btn-reset'  onClick={reset}>
        Reset
    </button>

    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}
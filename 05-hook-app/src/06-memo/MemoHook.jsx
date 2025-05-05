import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = ( iterationNumber = 100 ) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('ahi vamos ')
    
  }
  return `${iterationNumber} iteraciones realizadas`
}



export const MemoHook = () => {
   const {counter, incremental} = useCounter(4000)
   const [show, setShow] = useState(true)

   const messageMemorize = useMemo( () => heavyStuff(counter), [counter] )
  return (
   <>
   <h1>Counter: <small>{ counter }</small> </h1>
   <hr />
   <h4>{messageMemorize} </h4>
   <button 
   className="btn btn-primary"
   onClick={()=>{ incremental()}}
   >

    +1
   </button>
   <button
   className="btn btn-outline-primary"
   onClick={() => setShow(!show)}

   >
    show/Hide {JSON.stringify(show)}
   </button>
   </>
  )
}

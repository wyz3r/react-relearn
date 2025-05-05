import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export const Memorize = () => {
   const {counter, incremental} = useCounter(0)
   const [show, setShow] = useState(true)
  return (
   <>
   <h1>Counter: <Small value={counter} /> </h1>
   <hr />
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

import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)
   const incrementFather = useCallback(
      () => {
        setCounter(counter +1)
      },
      [],
    )
    
    // const incrementFather = () => {
    //   setCounter(counter +1)
    // }
  return (
    <>
    <h1>
     
        <hr />
    </h1>
    <ShowIncrement increment={incrementFather}/>
    </>
  )
}

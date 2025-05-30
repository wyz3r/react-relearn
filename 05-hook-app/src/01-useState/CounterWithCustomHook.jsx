import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, incremental, decrement,reset} = useCounter(5)
  return (
    <>
    <h1>Counter with hook: {counter}</h1>

    <button className="btn btn-primary" onClick={ incremental}>+1</button>
    <button className="btn btn-primary" onClick={ reset}>Reset</button>
    <button className="btn btn-primary" onClick={ decrement}>-1</button>
    </>
  )
}

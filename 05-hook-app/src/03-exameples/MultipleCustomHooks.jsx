import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

export const MultipleCustomHooks = () => {

  const {counter, decrement, incremental,} =useCounter(1)
  
  const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
  return (
    <>
    <h1>Info Pokemon</h1>
    <hr/>
    {isLoading ? <LoadingMessage/> 
    :(<PokemonCard
      {...data}
      sprite={[
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_default,
        data.sprites.back_shiny
      ]}
      />)}
    <h1>{data?.name}</h1>

    <button className="btn btn-primary" onClick={counter > 1 ? ()=>decrement(): null}>PREVIEW</button>

    <button className="btn btn-primary" onClick={()=>incremental()}>NEXT</button>

    

    </>
   
  )
}

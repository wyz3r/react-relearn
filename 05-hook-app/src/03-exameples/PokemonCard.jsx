import { useLayoutEffect, useRef, useState } from "react"

export const PokemonCard = ({id,name, sprite =[]}) => {

    const h2Ref = useRef()
    const  [boxSize, setBoxSize] = useState({height:0 ,width: 0})
    useLayoutEffect(() => {
    const {height, width} = h2Ref.current.getBoundingClientRect()
    setBoxSize({height,width})
    }, [name])



  return (
   <section
   style={{height:200, display:'flex', flexDirection: 'row'}}
   >
    <h2 ref={h2Ref} className="text-capitalize">#{id} - {name} </h2>
{/* {Imagenes} */}
    <div>
        {
            sprite.map(sprite => (
                <img key={sprite} src={sprite} alt={name} />
            ))
        }

    </div>
    <div>
        {JSON.stringify(boxSize)}
    </div>
   </section>
  )
}

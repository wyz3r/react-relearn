import { useEffect, useState } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({x:0, y:0})
    useEffect(() => {
        console.log('mounted')
        const onMouseMove = ({x,y}) => {
         setCoords( {x,y})
        }
        window.addEventListener('mousemove', onMouseMove)
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
           
        }
        }, [])
  return (
    <>
    <h3 className="mt-2">User exist </h3>
    {`Coords: x: ${coords.x}, y: ${coords.y}`}
    </>
   
  )
}

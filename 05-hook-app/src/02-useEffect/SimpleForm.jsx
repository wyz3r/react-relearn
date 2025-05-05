import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {
    const [username,formState, setFormState] = useState({
        username:'strider',
        email: 'leonelislas@globant.com'
    })

    const { email} = formState

    const onInputChange  = (event) => {

        const {name, value}= event.target
        setFormState({
            ...formState,
            formState,
            [name]: value
            }
        )
    }

    // useEffect(()=> {
    //     console.log('use effect called')
    // }, [])

    // useEffect(()=> {
    //     console.log('formState changed')
    // }, [formState])

    // useEffect(()=> {
    //     console.log('email changed')
    // }, [email])



  return (
   <>
   <h1>Simple Form</h1>
   <hr/>
   <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
    />
   
    <input type="email"
        className="form-control mt-2"
        placeholder="leonelislasglez@globant.com"
        name="email"
        value={email}
        onChange={onInputChange}
    />

   </>
  )
}

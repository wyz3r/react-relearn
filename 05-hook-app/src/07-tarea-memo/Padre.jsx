import { Hijo } from './Hijo'
import { useMemo, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = ( num ) => {
        setValor( (valor) => valor + num )
    }


    const numberOfIteration = useMemo( ()  => 
        {
            return (numeros.map( n => (
                <Hijo 
                    key={ n }
                    numero={ n }
                    incrementar={ incrementar }
                />
            ))) 
        }, []

    )


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
               numberOfIteration
            }
            {/* <Hijo /> */}
        </div>
    )
}

import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Test in 02-template-string', () => { 

    test('getSaludo should be return "hola mundo" ', () => { 

        const name = "leonel"
        const message = getSaludo(name)
    
        expect(message).toBe(`Hola ${name}`)


     })
 })

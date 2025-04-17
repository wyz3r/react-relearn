import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Test 11 async await ', () => { 

    test('getImage should return url of the image ', async () => { 
        const apiKey = '2RbPOWPpjCEuHHX6nu3vMH57e0emJDUF';
        const url = await getImagen(apiKey)
        console.log(url)
        expect(typeof url).toBe('string')
     })

     test('if don´t have api key retunr error ', async () => { 

        const resp =  await getImagen()
        expect(resp).toBe('Don´t found image')
     })
 })
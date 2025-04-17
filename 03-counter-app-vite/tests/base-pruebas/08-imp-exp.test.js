import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('heroes testing in 08-imp-exp', () => { 
    test('getHeroeById should be return a hero by id ', () => { 
        const id = 1 
        const hero = getHeroeById(id)
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
     })

     test('getHeroeById should be return a undefined if not exist id ', () => { 
        const id = 19 
        const hero = getHeroeById(id)
        expect(hero).toBeFalsy()
     })

     test('getHeroesByOwner should be return a group of DCs owners ', () => { 
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).not.toBe(0)
        expect(heroes).toEqual([
         { id: 1, name: 'Batman', owner: 'DC' },
         { id: 3, name: 'Superman', owner: 'DC' },
         { id: 4, name: 'Flash', owner: 'DC' }
       ])})

       test('getHeroesByOwner should be return a group of Marvels owners ', () => { 
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).not.toBe(0)
        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ])})
 })



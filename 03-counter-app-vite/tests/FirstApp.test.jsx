import React from 'react';
import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('<FirsApp/> component', () => { 
    // test('snapshot match ', () => { 
    //     const title = "hola soy goku"
    //     const {container  } = render(<FirstApp title={title} />)
      
    //     expect(container).toMatchSnapshot()
    //  })

   test('should show the title into <h1></h1>', () => { 

        const title = "hola soy goko"
        const {container, getByText, getByTestId  } = render(<FirstApp title={title} />)

        // expect(getByText(title)).toBeTruthy()
        // const h1 = container.querySelector('h1')
        // console.log(h1.innerHTML)
        // expect(h1.innerHTML).toContain(title)
        // expect(getByTestId('test-title').innerHTML).toBe(title)
        expect(getByTestId('test-title').innerHTML).toContain(title)

    })

    test('should show the subtitle end by props', () => {
        const title = "hola soy goku"
        const subTitle = "soy un subtitulo"
        const {getAllByText  } = render(<FirstApp title={title} subTitle={subTitle} />)

        expect(getAllByText(subTitle).length).toBe(2)
    })
 })
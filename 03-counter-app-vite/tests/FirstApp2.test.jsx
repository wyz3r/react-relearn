import React from 'react';
import { render,screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('<FirsApp/> component', () => { 
     const title = "hola, soy Goku"
     const subTitle ="deberia de ser un subtitulo"
    test('Should be snapshot match', () => { 
        const {container  } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot()
     })

     test('should show the message "hola, soy Goku"', () => { 
        render(<FirstApp title={title}/>)
        expect(screen.getByText(title)).toBeTruthy()
      })

      test('should show the test into <h1></h1>', () => { 

        render(<FirstApp title={title}/>)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)

       })

     test('should show the subTitle send by props', () => {  
        render(<FirstApp 
            title={title}
            subTitle={subTitle}
            />)

        expect(screen.getAllByText(subTitle).length ).toBe(2)
       })
      

 })
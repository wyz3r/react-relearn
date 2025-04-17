import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("<CounterApp/>  component", () => {
    const initialValue = 10
  test("should match with the snapshot", () => {
   const {container} =  render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot()
  });

  test("should validate the first value start = 100", () => {
    
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy()
    expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100')
   });

   test('should increment the counter value when click button +1', () => { 
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('11')).toBeTruthy()
    })

    test('should decrement the counter value when click button -1', () => { 
      render(<CounterApp value={initialValue} />);
      fireEvent.click(screen.getByText('-1'))
      expect(screen.getByText('9')).toBeTruthy()
      })

    test('Reset button should work', () => { 

      render(<CounterApp value={initialValue} />);
      fireEvent.click(screen.getByText('+1'))
      fireEvent.click(screen.getByText('+1'))
      // fireEvent.click(screen.getByText('Reset'))
      
      fireEvent.click(screen.getByRole('button',{name:'btn-reset'}))
      expect(screen.getByText(initialValue).innerHTML).toBe(initialValue.toString())


     })
  
});

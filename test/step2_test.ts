import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from '../src/components/Button'

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button title="Click me" onClick={() => {}} />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  test('renders button with title', () => {
    render(<Button title="Click me" onClick={() => {}} />)
    const buttonElement = screen.getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  test('handles click event', () => {
    const handleClick = jest.fn()
    render(<Button title="Click me" onClick={handleClick} />)
    const buttonElement = screen.getByText('Click me')
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

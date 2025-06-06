import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddEditTaskForm from '../src/components/AddEditTaskForm'

describe('AddEditTaskForm', () => {
  test('renders AddEditTaskForm component', () => {
    render(<AddEditTaskForm />)
    const formElement = screen.getByRole('form')
    expect(formElement).toBeInTheDocument()
  })

  test('renders input field with placeholder', () => {
    render(<AddEditTaskForm />)
    const inputElement = screen.getByPlaceholderText('Type your task here...')
    expect(inputElement).toBeInTheDocument()
  })

  test('renders priority buttons', () => {
    render(<AddEditTaskForm />)
    const highPriorityButton = screen.getByText('high')
    const mediumPriorityButton = screen.getByText('medium')
    const lowPriorityButton = screen.getByText('low')
    expect(highPriorityButton).toBeInTheDocument()
    expect(mediumPriorityButton).toBeInTheDocument()
    expect(lowPriorityButton).toBeInTheDocument()
  })

  test('renders Add button', () => {
    render(<AddEditTaskForm />)
    const addButton = screen.getByText('Add')
    expect(addButton).toBeInTheDocument()
  })
})

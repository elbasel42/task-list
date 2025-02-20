import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DeleteModal from '../src/components/DeleteModal'

describe('DeleteModal', () => {
  test('renders DeleteModal component', () => {
    render(<DeleteModal />)
    const modalElement = screen.getByText('Are you sure you want to delete this task?')
    expect(modalElement).toBeInTheDocument()
  })

  test('renders Delete button', () => {
    render(<DeleteModal />)
    const deleteButton = screen.getByText('Delete')
    expect(deleteButton).toBeInTheDocument()
  })

  test('renders Cancel button', () => {
    render(<DeleteModal />)
    const cancelButton = screen.getByText('Cancel')
    expect(cancelButton).toBeInTheDocument()
  })
})

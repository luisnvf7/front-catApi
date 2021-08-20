import {  render, screen, cleanup, fireEvent } from '@testing-library/react'
import Dropdown from '../../components/Dropdown'

test('Render Dropdown component 1', () => {
  
    const mockHandler = jest.fn()
    const headerElement = render(<Dropdown label='Ordenar' onSelect={mockHandler} disabled={false} values={[]}  />)
    let select = headerElement.getByTitle("select")
    fireEvent.change(select)
    expect(mockHandler).toHaveBeenCalledTimes(1)
    headerElement.getByText("Ordenar")
})

test('Render Dropdown component 2', () => {

  const mockHandler = jest.fn()
  const headerElement = render(<Dropdown label='Razas' onSelect={mockHandler} disabled={false} values={[]}  />)
  let select = headerElement.getByTitle("select")
  fireEvent.change(select)
  expect(mockHandler).toHaveBeenCalledTimes(1)
  headerElement.getByText("Razas")
})

test('Render Dropdown component 3', () => {

  const mockHandler = jest.fn()
  const headerElement = render(<Dropdown label='Categoria' onSelect={mockHandler} disabled={false} values={[]}  />)
  let select = headerElement.getByTitle("select")
  fireEvent.change(select)
  expect(mockHandler).toHaveBeenCalledTimes(1)
  headerElement.getByText("Categoria")
})
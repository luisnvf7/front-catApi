import {  render, screen, cleanup, fireEvent } from '@testing-library/react'
import Pagination from '../../components/Pagination'

test('Render Pagination component', () => {

    const mockHandler = jest.fn()

    const pagination = render(<Pagination pressPage={mockHandler} />)

    let button = pagination.getAllByTitle("div-button")

    let buttonAmount = button.map(b => {
        fireEvent.click(b)
        return b
    })

    expect(mockHandler).toHaveBeenCalledTimes(buttonAmount.length)
})
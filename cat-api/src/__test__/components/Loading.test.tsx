import {  render, screen, cleanup } from '@testing-library/react'
import Loading from '../../components/Loading'

test('Render Loading component', () => {
    const headerElement = render(<Loading isLoading={true} />)
    headerElement.getByAltText('cat-image')
})
import {  render, screen, cleanup } from '@testing-library/react'
import HeaderTabs from '../../components/HeaderTabs'

test('Render HeaderTabs component', () => {
    // render(<HeaderTabs />)
    const headerElement = render(<HeaderTabs left="Gatos" right="Criterios" />)
    // console.log(headerElement)
    // expect(headerElement).toBeInTheDocument()
    // expect(headerElement).toHaveTextContent("Gatos")
    // expect(headerElement).toHaveTextContent("Criterios")
    headerElement.getByText("Gatos")
    headerElement.getByText("Criterios")
})
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from '../src/app/page'
import Layout from '../src/app/layout'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})
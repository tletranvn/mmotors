import { render, screen } from '@testing-library/react'
import App from '../../App'

describe('App', () => {
  it('affiche le header avec le logo M-MOTORS', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /m-motors/i })).toBeInTheDocument()
  })

  it('affiche la navigation principale', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /catalogue/i })).toBeInTheDocument()
  })

  it('affiche le footer avec le copyright', () => {
    render(<App />)
    expect(screen.getByText(/tous droits réservés/i)).toBeInTheDocument()
  })
})

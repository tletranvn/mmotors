import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../App'

describe('App', () => {
  it('affiche le titre Vite + React', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('incremente le compteur au clic', async () => {
    // userEvent.setup() = prepare la simulation d'evenements navigateur
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button')

    // Avant le clic : compteur = 0
    expect(button).toHaveTextContent('count is 0')

    // Simuler un clic sur le bouton
    await user.click(button)

    // Apres le clic : compteur = 1
    expect(button).toHaveTextContent('count is 1')
  })
})

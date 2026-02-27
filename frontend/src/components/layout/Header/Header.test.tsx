import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )

describe('Header', () => {
  it('affiche le logo M-Motors', () => {
    renderHeader()
    expect(screen.getByRole('link', { name: /m-motors/i })).toBeInTheDocument()
  })

  it('affiche le lien Accueil', () => {
    renderHeader()
    expect(screen.getByRole('link', { name: /accueil/i })).toBeInTheDocument()
  })

  it('affiche le lien Catalogue', () => {
    renderHeader()
    expect(screen.getByRole('link', { name: /catalogue/i })).toBeInTheDocument()
  })

  it('affiche le lien Contact', () => {
    renderHeader()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('affiche le bouton Se connecter', () => {
    renderHeader()
    expect(screen.getByRole('link', { name: /se connecter/i })).toBeInTheDocument()
  })

  it("affiche le bouton S'inscrire", () => {
    renderHeader()
    expect(screen.getByRole('link', { name: /s'inscrire/i })).toBeInTheDocument()
  })

  it("affiche le lien À Propos", () => {
    renderHeader()
    expect(screen.getByRole('link', { name: /à propos/i })).toBeInTheDocument()
  })

  it('le lien Catalogue pointe vers /vehicles', () => {
    renderHeader()
    const catalogueLink = screen.getByRole('link', { name: /catalogue/i })
    expect(catalogueLink).toHaveAttribute('href', '/vehicles')
  })

  it('le logo pointe vers /', () => {
    renderHeader()
    const logoLink = screen.getByRole('link', { name: /m-motors/i })
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('le clic sur le bouton hamburger ouvre le menu mobile', async () => {
    const user = userEvent.setup()
    renderHeader()

    const burgerBtn = screen.getByRole('button', { name: /ouvrir le menu/i })
    expect(burgerBtn).toHaveAttribute('aria-expanded', 'false')

    await user.click(burgerBtn)

    expect(screen.getByRole('button', { name: /fermer le menu/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /navigation mobile/i })).toBeInTheDocument()
  })

  it('le menu mobile contient les liens de navigation', async () => {
    const user = userEvent.setup()
    renderHeader()

    await user.click(screen.getByRole('button', { name: /ouvrir le menu/i }))

    const mobileNav = screen.getByRole('navigation', { name: /navigation mobile/i })
    expect(within(mobileNav).getByRole('link', { name: /accueil/i })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: /catalogue/i })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: /à propos/i })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: /se connecter/i })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: /s'inscrire/i })).toBeInTheDocument()
  })

  it('cliquer un lien du menu mobile ferme le menu', async () => {
    const user = userEvent.setup()
    renderHeader()

    await user.click(screen.getByRole('button', { name: /ouvrir le menu/i }))
    expect(screen.getByRole('navigation', { name: /navigation mobile/i })).toBeInTheDocument()

    const mobileNav = screen.getByRole('navigation', { name: /navigation mobile/i })
    await user.click(within(mobileNav).getByRole('link', { name: /catalogue/i }))

    expect(screen.queryByRole('navigation', { name: /navigation mobile/i })).not.toBeInTheDocument()
  })
})

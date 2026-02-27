import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from './Footer'

const renderFooter = () =>
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )

describe('Footer', () => {
  it('affiche le nom M-MOTORS dans le copyright', () => {
    renderFooter()
    expect(screen.getByText(/tous droits réservés/i)).toBeInTheDocument()
  })

  it('affiche l\'année courante dans le copyright', () => {
    renderFooter()
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('affiche le lien CGU', () => {
    renderFooter()
    expect(screen.getByRole('link', { name: /cgu/i })).toBeInTheDocument()
  })

  it('affiche le lien Mentions légales', () => {
    renderFooter()
    expect(screen.getByRole('link', { name: /mentions légales/i })).toBeInTheDocument()
  })

  it('affiche le lien Instagram', () => {
    renderFooter()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })

  it('affiche le lien LinkedIn', () => {
    renderFooter()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })

  it('affiche le lien Facebook', () => {
    renderFooter()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
  })
})

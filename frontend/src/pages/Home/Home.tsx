import { Link } from 'react-router-dom'

const advantages = [
  {
    title: 'Garantie qualité',
    description: 'Tous nos véhicules sont contrôlés et certifiés avant mise en vente.',
  },
  {
    title: 'Service après-vente',
    description: 'Une équipe dédiée pour vous accompagner après votre achat ou location.',
  },
  {
    title: 'Financement',
    description: 'Des solutions de financement adaptées à tous les profils.',
  },
  {
    title: 'Essai gratuit',
    description: 'Testez le véhicule de votre choix sans engagement.',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section aria-label="Présentation principale" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Trouvez votre véhicule idéal
        </h1>
        <p className="text-white/60 text-lg sm:text-xl max-w-2xl">
          Achat ou location longue durée — M-Motors vous propose une sélection de véhicules de qualité, avec un accompagnement personnalisé.
        </p>
        <Link
          to="/vehicles"
          className="bg-primary text-background font-semibold px-8 py-3 rounded hover:opacity-90 transition-opacity text-base"
        >
          Découvrir nos véhicules
        </Link>
      </section>

      {/* Advantages Section */}
      <section aria-label="Nos avantages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-extrabold text-white text-center mb-12">
          Pourquoi choisir M-Motors ?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0">
          {advantages.map(({ title, description }) => (
            <li
              key={title}
              className="bg-surface rounded-lg p-6 flex flex-col gap-3 border border-white/10"
            >
              <h3 className="text-white font-semibold text-base">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* About Section */}
      <section aria-label="À propos de M-Motors" className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl font-extrabold text-white">M-Motors</h2>
          <p className="text-white/60 text-base leading-relaxed max-w-3xl">
            Depuis plus de 30 ans, M-Motors accompagne plus d'un million de clients dans leurs projets automobiles.
            Spécialiste de la vente et de la location longue durée, nous mettons à votre disposition une gamme
            diversifiée de véhicules neufs et d'occasion. Notre mission : vous offrir une expérience d'achat
            simple, transparente et sécurisée, avec des conseillers disponibles à chaque étape.
            Que vous souhaitiez acquérir un véhicule ou opter pour une formule LLD flexible,
            M-Motors est votre partenaire de confiance pour rouler sereinement.
          </p>
        </div>
      </section>
    </main>
  )
}

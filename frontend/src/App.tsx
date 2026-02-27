import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout/Layout'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* US-002 : Homepage */}
          <Route index element={<Home />} />
          {/* US-003 : Catalogue */}
          <Route path="vehicles" element={<div className="flex items-center justify-center min-h-[60vh] text-white/30">Catalogue — US-003</div>} />
          {/* US-005 : Détail véhicule */}
          <Route path="vehicles/:id" element={<div className="flex items-center justify-center min-h-[60vh] text-white/30">Détail véhicule — US-005</div>} />
          {/* Pages statiques */}
          <Route path="about" element={<div className="flex items-center justify-center min-h-[60vh] text-white/30">À Propos</div>} />
          <Route path="contact" element={<div className="flex items-center justify-center min-h-[60vh] text-white/30">Contact</div>} />
          <Route path="login" element={<div className="flex items-center justify-center min-h-[60vh] text-white/30">Connexion</div>} />
          <Route path="register" element={<div className="flex items-center justify-center min-h-[60vh] text-white/30">Inscription</div>} />
          <Route path="cgu" element={<div className="flex items-center justify-center min-h-[60vh] text-white/30">CGU</div>} />
          <Route path="mentions-legales" element={<div className="flex items-center justify-center min-h-[60vh] text-white/30">Mentions légales</div>} />
          <Route path="politique-confidentialite" element={<div className="flex items-center justify-center min-h-[60vh] text-white/30">Politique de confidentialité</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

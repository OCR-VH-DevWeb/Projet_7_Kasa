//Définition des itinéraires & leurs chemins, en les attachants à leurs composants respectifs
//"Routes" agit en tant que conteneur/parent pour toutes les routes individuelles qui seront créées
//"Route" utilisé pour créer une route unique avec 2 attributs :
// "path" spécifie le chemin d'URL du composant souhaité, "element" spécifie le composant que la route doit rendre

// import { Routes, Route } from "react-router-dom"
import { Routes, Route } from 'react-router-dom'

import './Styles/main.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Error404 from './Pages/Error404'
import FicheLogement from './Pages/Fichelogement'
import Header from './components/Header'
import Footer from './components/Footer'

//ce qui est commun à toutes les pages
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:idProduct" element={<FicheLogement />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

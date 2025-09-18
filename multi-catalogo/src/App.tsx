import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Animais from './pages/Animais'
import Livros from './pages/Livros'
import Pessoas from './pages/Pessoas'
import Favoritos from './pages/Favoritos'
import { FavoritosProvider } from './context/FavoritosContext'

function App() {

  return (
    <FavoritosProvider>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Animais />} />
            <Route path='/livros' element={<Livros />} />
            <Route path='/pessoas' element={<Pessoas />} />
            <Route path='/favoritos' element={<Favoritos />} />
          </Routes>
        </main>
      </BrowserRouter>
    </FavoritosProvider>
  )
}

export default App

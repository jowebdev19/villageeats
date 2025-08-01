
import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Favorites from './pages/Favorites'

function App() {
  

  return (
    <>
    <HashRouter >
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/Recipes' element={<Recipes/>}></Route>
        <Route path='/Favorites' element={<Favorites/>}></Route>
      </Routes>
      <footer>&copy; 2025 Josiah Rivera</footer>
    </HashRouter>
    </>
  )
}

export default App

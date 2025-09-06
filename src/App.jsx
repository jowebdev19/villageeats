
import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Favorites from './pages/Favorites'
import CommunityRecipe from './pages/CommunityRecipe'
import NewRecipe from './pages/NewRecipe'
import EditRecipe from './pages/EditRecipe'

function App() {
  

  return (
    <>
    <HashRouter >
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/Recipes' element={<Recipes/>}></Route>
        <Route path='/Favorites' element={<Favorites/>}></Route>
        <Route path='/CommunityRecipe/:id' element={<CommunityRecipe/>}></Route>
        <Route path='/NewRecipe' element={<NewRecipe/>}></Route>
        <Route path='/EditRecipe/:id' element={<EditRecipe/>}></Route>
      </Routes>
      <footer>&copy; 2025 Josiah Rivera</footer>
    </HashRouter>
    </>
  )
}

export default App

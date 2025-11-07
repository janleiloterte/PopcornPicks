import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Watched from './pages/Watched'
import WatchList from './pages/WatchList'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/favourites' element={<Favourites></Favourites>}></Route>
          <Route path='/watched' element={<Watched></Watched>}></Route>
          <Route path='/watch-list' element={<WatchList></WatchList>}></Route>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App

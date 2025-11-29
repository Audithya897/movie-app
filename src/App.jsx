import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/Searchbar'
import MovieList from './components/Movielist'
import Pagination from './components/Pagination'

import MovieProvider from './context/MovieContext'




function App() {
  

  return (
   <MovieProvider>
      <Navbar />
      <SearchBar />
      <MovieList />
      <Pagination />
    </MovieProvider>
    
  )
}

export default App

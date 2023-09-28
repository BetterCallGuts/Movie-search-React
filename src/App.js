import {useEffect, useState}  from "react";
import './App.css'
import search from './search.svg'
import MovieCart from "./MovieCart";

const API_KEY = '8f42cbf9';
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`

const App = () => {


  const [movies, setMovies] = useState([])
  const [searchTerm, setsearchTerm] = useState('')

  const searchMovies = async (title) =>{

    const response = await fetch(`${API_URL}&s=${title}`)
    const data     = await response.json();
    setMovies(data.Search)

  }

  useEffect( ()=>{
    searchMovies("Berserk")

  } , []);
  return (
    <div className="app">
      <h1>Movie Land </h1>

      <div className="search">
        <input placeholder="search for movie" 
        value={searchTerm}
        onChange={(e)=> {
          setsearchTerm(e.target.value)
        }}
        />

        <img src={search }
        alt="Searh"
        onClick={ ()=>{
          searchMovies(searchTerm   )
        } }
        
        />
      </div>
        {/* <MovieCart movie={movies[0]}/> */}
        {
          movies?.length > 0
           ?
           (<div className="container">
            {movies.map((movieee) =>{
              console.log(movieee)
              return <MovieCart movie={movieee}/>

            }
            )}
            </div> ) :
            ( <div className="empty">
              <h2>No Movies Found </h2>
               </div>)
        }
        
    </div>
  )
}
export default  App ;
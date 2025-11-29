import "./style.css"
import MovieCard from "../Moviecard";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/MovieContext";


const MovieList = () => {
 const { page,} = useContext(MovieContext);
   
    const [movieList, setMovieList] = useState([]);
    

    const fetchMovies = () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTM1ZGY4MWI5YTZhODZjYzQ2N2RhZjA1MThkMDc0OSIsIm5iZiI6MTc2NDE4MDIzNS40OTMsInN1YiI6IjY5Mjc0MTBiNzJhNGE2OGUzOWQ5Y2E0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZzeC8Ke_ieG6_g7EJRW4JW4yr6EM3sh7SOmJagmQ5pg'
            },
        };

        
        fetch
        (`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,options)
            .then(res => res.json())
            .then(res => setMovieList(res.results))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchMovies();
    }, [page]);

    return (
        <div className="movieList">
            {movieList.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movietitle={movie.title}
                    movieReleaseDate={movie.release_date}
                    posterUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
            ))}
        </div>
    );
};

export default MovieList;
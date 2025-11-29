import "./style.css"
const MovieCard = ({posterUrl, movietitle, movieReleaseDate}) => {
    return (
        <div className="container">
            <img src={posterUrl} 
            alt="Movie Name" />
            <h3>{movietitle}</h3>
            <p>{movieReleaseDate}</p>
            <icon></icon>
           
        </div>
    );
}

export default MovieCard
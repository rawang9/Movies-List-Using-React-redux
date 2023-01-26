import React from 'react';
import { addFavourites,removeFavourites } from '../actions';
const MovieCard = (props) => {
  // console.log(props.movies);
  const handleFavourateClick = () => {
    const { movies } = props;
    props.dispatch(addFavourites(movies));
  };
  const handleUnFavourateClick = ()=>{
    const {movies} = props;
    props.dispatch(removeFavourites(movies));
  };
  const movie = props.movies;
  const { isFev } = props;
  return (
    <div className="movie-card">
      <div className="left">
        <img alt="movie-poster" src={movie.Poster} />
      </div>
      <div className="right">
        <div className="title">{movie.Title}</div>
        <div className="plot">{movie.Plot}</div>
        <div className="footer">
          <div className="rating"> {movie.imdbRating}</div>
          {isFev ? (
            <button className="unfavourite-btn" onClick = {handleUnFavourateClick}>UnFavourite</button>
          ) : (
            <button className="favourite-btn" onClick={handleFavourateClick}>
              Favourite
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieCard;

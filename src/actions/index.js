// {
//     type:'ADD_MOVIES',
//     movies:[m1,m2,m3]
// }


//action type 
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIES_TO_LIST = 'ADD_MOVIES_TO_LIST';
//action creator
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies
    }
}
export function addFavourites(movie){
    return {
        type:ADD_FAVOURITES,
        movie
    }
}
export function removeFavourites(movie){
    return {
        type:REMOVE_FAVOURITES,
        movie
    }
}
export function setShowFavourites(val){
    return {
        type:SET_SHOW_FAVOURITES,
        val
    }
}
export function addMovieToList(movie){
    return {
        type:ADD_MOVIES_TO_LIST,
        movie
    };
}
export function handleMovieSearch(movie){
    const url = `https://www.omdbapi.com/?apikey=46c16559&t=${movie}`;
    return function(dispatch){
        fetch(url).then(response =>response.json()).then(movie=>{
            console.log("movie ",movie);
            dispatch(addMovieSearchResult(movie))
        })
    }
}
export function addMovieSearchResult(movie){
    return {
        type:ADD_SEARCH_RESULT,
        movie
    }
}
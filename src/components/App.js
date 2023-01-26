import React from 'react';
import Navbar from './Navbar';
import { data } from './data';
import MovieCard from './MovieCard';
import { addMovies ,setShowFavourites} from '../actions';
class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      // console.log("Updated");
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));
    // console.log("State",store.getState());
  }
  isMovieFavourate =(movie)=>{
    const {movies} = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if(index===-1){ return false;}
    return true;
  }
  onChangeTab = (val)=>{
    this.props.store.dispatch(setShowFavourites(val));
  }
  render() {
    const {movies,search} = this.props.store.getState();
    const {list,favourites,showFavourites} = movies;
    console.log(list,favourites);
    // console.log("Render",list)
    const displayMovies = showFavourites? favourites:list;
    return (
      <div className="App">
        <Navbar dispatch = {this.props.store.dispatch} search = {search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? ``:`active-tabs`}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? `active-tabs`:``}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard movies={movie} key={index} dispatch = {this.props.store.dispatch} isFev = {this.isMovieFavourate(movie)}/>
            ))}
          </div>
          {displayMovies.length===0? <div className='no-movies'>No movies to Display</div>:null}
        </div>
      </div>
    );
  }
}

export default App;

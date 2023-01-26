import React from 'react';
import { handleMovieSearch ,addMovieToList} from '../actions';
import { data } from './data';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  handleAddToMovies=(movie)=>{
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResule:false
    });
  }
  // handleAddToMovies addMovieToList
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
    console.log(this.state.searchText);
  };
  render() {
    const { result,showSearchResule } = this.props.search;
    // showSearchResule = true;
    // console.log(result);
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            search
          </button>
          {showSearchResule && 
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{result.Title}</span>
                  <button onClick={() => this.handleAddToMovies(result)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}
export default Navbar;

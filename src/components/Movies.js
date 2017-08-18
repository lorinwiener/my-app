import React, { Component } from 'react';

import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

import '../styles/movies.css';

let movieData = require('../data/data.json');


class Movies extends Component {

  // constructor(props) {
  //     super(props);
  // }

  // componentWillMount() {

  // }

  // componentWillReceiveProps(nextProps) {
      
  // }

  // componentWillUnmount() {
    
  // }

  render() {

    return (

      <div className="movies">
        <SearchBox className="search-box" />
        <SearchResults className="search-results" movieData={movieData}/>
      </div>

    );

  }

}

export default Movies;

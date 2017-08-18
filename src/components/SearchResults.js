import React, { Component } from 'react';

import '../styles/search-results.css';


class SearchResults extends Component {

  constructor(props) {
      super(props);
  }

  // componentWillMount() {

  // }

  // componentWillReceiveProps(nextProps) {
      
  // }

  // componentWillUnmount() {
    
  // }

  render() {

    for(var i = 0; i < this.props.movieData.length; i++) {
      var obj = this.props.movieData[0][i]; 
      console.log("Title: " + obj.title);
    }

    return (

      <div className="search-results">
        <hr width="98%"/>
          <p>Search Results</p>
        <hr width="98%"/>
      </div>

    );

  }

}

SearchResults.propTypes = {
  movieData: React.PropTypes.object.isRequired
};

export default SearchResults;

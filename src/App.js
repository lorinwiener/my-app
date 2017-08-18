import React, { Component } from 'react';

import Movies from './components/Movies';

import './styles/app.css';

class App extends Component {

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

      <div className="app">
          <Movies />
      </div>

    );

  };

}

export default App;

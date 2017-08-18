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

  // <div className={listItemClass}>
  //     <div className={itemClass} style={colStyle}>
  //         <div className={posterClass} style={colHeightStyle}>
  //             {posterGraphic}
  //             {channelLogo}
  //             {timeLeftOverlay}
  //         </div>
  //         {info}
  //     </div>
  // </div>

  render() {

    return (

      <div className="app">
          <Movies />
      </div>

    );

  };

}

export default App;

import React, { Component } from 'react';
import Weather from './components/Weather';


class App extends Component {
  render() {
      return (
        <div className="container mx-auto p-4 lg:py-14 lg:px-64 xl:px-80">
     
        <Weather/>
       </div>
      );
  }
}

export default App;

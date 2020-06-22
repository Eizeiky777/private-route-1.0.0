import React, { Component } from 'react';
import Jumbotron from './components/beranda/jumbotron';
import MovieList from './components/beranda/movielist';


class App extends Component {
  render(){
    return (
      <div>
      
      {
          <Jumbotron ids={1} />
      }
      {
          <MovieList ids={1} homi={"homes"}/>
      }


      </div>
    );
  }
}

export default App;

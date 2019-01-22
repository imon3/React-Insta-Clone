import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/Searchbar/SearchBar';
import PostContainer from './components/CommentSection/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;

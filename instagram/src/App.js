import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/Searchbar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    })
  }

  render() {

    return (
      <div className="App">
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;

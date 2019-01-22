import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/Searchbar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      searchPost: []
    }
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    })
  }

  searchHandler = (e) => {
    const dData = this.state.dummyData.filter(data => {
      if (data.username.includes(e.target.value)) {
        return data
      }
    })
    this.setState({
      searchPost: dData
    })
  }

  render() {
    console.log(this.state.searchPost)
    return (
      <div className="App">
        <SearchBar searchHandler={this.searchHandler} />
        <PostContainer dummyData={this.state.searchPost.length > 0 ? this.state.searchPost : this.state.dummyData} />
      </div>
    );
  }
}

export default App;

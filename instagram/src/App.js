import React, { Component } from 'react';

import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';

import authenticate from './components/authenticate/authenticate'



class App extends Component {

  render() {
    return (
      // <PostsPage />
      <Login />
    )
  }
}

export default authenticate(App);;

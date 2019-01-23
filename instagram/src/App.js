import React, { Component } from 'react';

import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';

import authenticate from './components/authenticate/authenticate'

const Authenticate = authenticate(Login)(PostsPage);


export default Authenticate;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import SinglePost from './components/PostContainer/SinglePost'

import authenticate from './components/authenticate/authenticate'

const Authenticate = authenticate(Login)(PostsPage);

class App extends Component {

    render() {
        return (
            <div>

                <Route exact path='/' component={Login} />
                <Route exact path='/postspage' component={PostsPage} />

                <Route path='/postspage/:postId' component={SinglePost} />

            </div>
        )
    }

}

export default App;

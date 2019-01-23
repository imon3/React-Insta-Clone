import React from 'react';
import PropTypes from 'prop-types';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: ''
        }
    }


    handleUserInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    setUser = (e) => {
        const user = this.state.user;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() {

        return (
            <div className='login'>
                <div>Login</div>

                <form onSubmit={this.setUser}>
                    <input onChange={this.handleUserInput} type='text' placeholder='Enter Your Username' name='user' value={this.state.user} />
                    <input onChange={this.handleUserInput} type='password' placeholder='Enter Your Password' name='password' value={this.state.password} />
                    <button onSubmit={this.setUser} type='submit'>LOGIN</button>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default Login;
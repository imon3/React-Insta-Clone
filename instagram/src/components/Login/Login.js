import React from 'react';

import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className='login'>
                <div>Login</div>

                <form>
                    <input type='text' placeholder='Enter Your Username' name='username' />
                    <input type='password' placeholder='Enter Your Password' name='password' />
                    <button type='submit'>LOGIN</button>
                </form>
            </div>
        )
    }
}

export default Login;
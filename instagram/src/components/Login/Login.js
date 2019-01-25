import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import './Login.css';

const LoginDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 1000px;
margin: 0 auto;
height: 100vh;
`;

const LoginShadow = styled.div`
font-size: 5rem;
box-shadow: 0px 0px 40px 5px blue;
`;

const LoginForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
`;

const LoginFormInput = styled.input`
padding: 10px 100px;
margin: 10px;
text-align: center;
font-size: 1.5rem;
`;

const LoginFormButton = styled.button`
width: 50%;
padding: 10px;

&:hover{
    font-size: 2rem;
    font-weight: bold;
    color: grey;
    background-color: blue;
    transition: ease-in-out .5s;
}
`;

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
            <LoginDiv>
                <LoginShadow>Login Into Account</LoginShadow>

                <LoginForm onSubmit={this.setUser}>
                    <LoginFormInput onChange={this.handleUserInput} type='text' placeholder='Enter Your Username' name='user' value={this.state.user} required />
                    <LoginFormInput onChange={this.handleUserInput} type='password' placeholder='Enter Your Password' name='password' value={this.state.password} required />
                    <LoginFormButton onSubmit={this.setUser} type='submit'>LOGIN</LoginFormButton>
                </LoginForm>
            </LoginDiv>
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
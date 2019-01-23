import React from 'react';

const authenticate = (Component1) => (Component2) =>
    class extends React.Component {
        constructor() {
            super();

            this.state = {
                userLoggedIn: false
            }
        }

        componentDidMount() {
            if (localStorage.length > 0) {
                this.setState({
                    userLoggedIn: true
                })
            } else {
                this.setState({
                    userLoggedIn: false
                })
            }
        }

        removeLocalStorage = () => {
            localStorage.removeItem('user')

        }

        render() {
            console.log(localStorage)
            if (!this.state.userLoggedIn) {
                return <Component1 />
            } else {
                return <Component2 removeLocalStorage={this.removeLocalStorage()} />
            }
        }
    }


export default authenticate;
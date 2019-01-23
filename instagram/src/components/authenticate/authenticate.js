import React from 'react';

const authenticate = (Component) =>
    class extends React.Component {

        render() {
            return (
                <div>
                    <Component />
                </div>
            )
        }
    }


export default authenticate;
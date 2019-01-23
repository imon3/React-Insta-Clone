import React from 'react';
import PropTypes from 'prop-types';

class LikeSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: props.likes
        }
    }

    incrementLikes = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ likes: this.state.likes + 1 }))
    }

    render() {
        return (
            <div className='like-section'>
                <div>
                    <i onClick={this.incrementLikes} className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>
                <div className='likes'>{this.state.likes} likes</div>
            </div>
        )
    }
}

LikeSection.propTypes = {
    likes: PropTypes.number,
    incrementLikes: PropTypes.func
}

export default LikeSection;
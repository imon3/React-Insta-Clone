import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LikeSectionDiv = styled.div`
display: flex;
flex-direction: column;
align-items: start;
`;

const LikeSectionI = styled.i`
font-size: 1.5rem;
margin: 10px 10px 5px 10px;
`;

const Likes = styled.div`
font-weight: bold;
margin-left: 10px;
`;

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
            <LikeSectionDiv className='like-section'>
                <div>
                    <LikeSectionI onClick={this.incrementLikes} className="far fa-heart"></LikeSectionI>
                    <LikeSectionI className="far fa-comment"></LikeSectionI>
                </div>
                <Likes className='likes'>{this.state.likes} likes</Likes>
            </LikeSectionDiv>
        )
    }
}

LikeSection.propTypes = {
    likes: PropTypes.number,
    incrementLikes: PropTypes.func
}

export default LikeSection;
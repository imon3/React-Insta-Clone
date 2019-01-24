import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';
import styled from 'styled-components';


const PostContainerDiv = styled.div`
width: 640px;
margin: 0 auto;
border: solid grey 1px;
margin-bottom: 30px;
`;

const PostContainerTopSection = styled.div`
display: flex;
margin: 20px 0 20px 10px;
`;

const ThumbnailImage = styled.img`
height: 50px;
width: 50px;
margin-right: 10px;
border-radius: 50%;
`;

const TopSectionUsername = styled.p`
font-weight: bold;
`;


class PostContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                {
                    this.props.dummyData.map((data, index) => {

                        return (
                            <PostContainerDiv key={index}>

                                <PostContainerTopSection>
                                    <ThumbnailImage className='thumbnail-image' src={data.thumbnailUrl} />
                                    <TopSectionUsername className='username'>{data.username}</TopSectionUsername>
                                </PostContainerTopSection>

                                <div>
                                    <img src={data.imageUrl} />
                                </div>

                                <LikeSection likes={data.likes} />

                                <CommentSection comments={data.comments} />
                            </PostContainerDiv>
                        )
                    })
                }
            </div>

        )


    }
}

PostContainer.propTypes = {
    data: PropTypes.array,
    thumbnailUrl: PropTypes.string,
    username: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    comments: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    imageUrl: PropTypes.string
}

export default PostContainer;
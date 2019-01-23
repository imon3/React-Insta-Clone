import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css'
import LikeSection from './LikeSection';


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
                            <div key={index} className='post-container'>

                                <div className='post-container-top-section'>
                                    <img className='thumbnail-image' src={data.thumbnailUrl} />
                                    <p className='username'>{data.username}</p>
                                </div>

                                <div>
                                    <img src={data.imageUrl} />
                                </div>

                                <LikeSection likes={data.likes} />

                                <CommentSection comments={data.comments} />
                            </div>
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
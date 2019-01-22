import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css'
// import PropTypes from 'prop-types';

class PostContainer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div>
                {
                    this.props.dummyData.map(data => {

                        return (
                            <div className='post-container'>
                                <div className='post-container-top-section'>
                                    <img className='thumbnail-image' src={data.thumbnailUrl} />
                                    <p className='username'>{data.username}</p>
                                </div>

                                <div>
                                    <img src={data.imageUrl} />
                                </div>

                                <div className='like-section'>
                                    <div>
                                        <i className="far fa-heart"></i>
                                        <i className="far fa-comment"></i>
                                    </div>
                                    <div className='likes'>{data.likes} likes</div>
                                </div>

                                <CommentSection comments={data.comments} />
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default PostContainer;
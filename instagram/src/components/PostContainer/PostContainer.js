import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css'
import LikeSection from './LikeSection';
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

                                <LikeSection likes={data.likes} />

                                <CommentSection comments={data.comments} />
                            </div>
                        )
                        console.log(this.data.likes)
                    })
                }
            </div>

        )


    }
}

export default PostContainer;
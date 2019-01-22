import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
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
                            <div>
                                <div>
                                    <img src={data.thumbnailUrl} />
                                    <p>{data.username}</p>
                                </div>

                                <div>
                                    <img src={data.imageUrl} />
                                </div>
                                <div>
                                    <div>
                                        <i class="far fa-heart"></i>
                                        <i class="far fa-comment"></i>
                                    </div>
                                    <p>{data.likes} likes</p>
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
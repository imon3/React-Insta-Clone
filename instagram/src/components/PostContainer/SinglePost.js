import React from 'react'

import dummyData from '../../dummy-data';

function SinglePost(props) {

    const id = props.match.params.postId;
    const singlePost = dummyData.find(data => data.username === id)

    console.log(singlePost)

    return (
        <div>
            <div>
                <img src={singlePost.thumbnailUrl} />
                <p>{singlePost.username}</p>
            </div>

            <div>
                <img src={singlePost.imageUrl} />
            </div>

            <div>
                <span>{singlePost.likes}</span><span>Likes</span>
            </div>

            {singlePost.comments.map((comment, index) => {
                return (
                    <div key={index}>
                        <span><strong>{comment.username}</strong></span><span>{comment.text}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default SinglePost;
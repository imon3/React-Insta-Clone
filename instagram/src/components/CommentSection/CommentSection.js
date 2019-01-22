import React from 'react';

import './CommentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div className='comments-section'>
                {this.props.comments.map(comment => {
                    return (
                        <div>
                            <div>
                                <span className='user-comment'>{comment.username}</span> <span>{comment.text}</span>
                            </div>
                        </div>
                    )
                })}
                <form className='form-section'>
                    <input type='text' placeholder='Add a comment...' />
                    <i className="fas fa-ellipsis-h"></i>
                </form>
            </div>
        )
    }
}

export default CommentSection;
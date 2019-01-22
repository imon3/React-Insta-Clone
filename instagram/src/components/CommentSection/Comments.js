import React from 'react';
import './CommentSection.css'

class Comments extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div className='comments'>
                {this.props.comments.map((comment, index) => {
                    return (
                        <div >
                            <div>
                                <span key={index} className='user-comment'>{comment.username}</span> <span>{comment.text}</span>
                            </div>
                        </div>
                    )
                })}
                <form
                    className='form-section'
                    onSubmit={this.props.addNewComment}
                >
                    <input type='text' placeholder='Add a comment...' name='comment' value={this.props.comment} onChange={this.props.handleComment} />
                    <i className="fas fa-ellipsis-h"></i>
                </form>
            </div>
        )
    }
}

export default Comments;
import React from 'react';
import PropTypes from 'prop-types';
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
                        <div key={index}>
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
                    <i onClick={this.props.addNewComment} className="fas fa-ellipsis-h"></i>
                </form>
            </div>
        )
    }
}

Comments.propTypes = {
    comments: PropTypes.array,
    username: PropTypes.shape(
        PropTypes.string,
        PropTypes.number
    )
}

export default Comments;
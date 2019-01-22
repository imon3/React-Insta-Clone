import React from 'react';



class CommentSection extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div>
                {this.props.comments.map(comment => {
                    return (
                        <div>
                            <div>
                                <span className='bold'>{comment.username}</span> <span>{comment.text}</span>
                            </div>
                        </div>
                    )
                })}
                <form>
                    <input type='text' placeholder='Add a comment...' />
                    <i className="fas fa-ellipsis-h"></i>
                </form>
            </div>
        )
    }
}

export default CommentSection;
import React from 'react';

import Comments from './Comments'

import './CommentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            comment: ''
        }

    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        })
    }

    handleComment = e => {
        this.setState({
            [e.target.name]: e.target.value

        })

    }

    addNewComment = (e) => {
        e.preventDefault();
        this.setState({
            comments: [...this.state.comments,
            {
                username: 'Unregistered User',
                text: this.state.comment
            }
            ],
            comment: ''
        });
    }

    render() {

        return (
            <div className='comments-section'>
                <Comments
                    comments={this.state.comments}
                    handleComment={this.handleComment}
                    addNewComment={this.addNewComment}
                    comment={this.state.comment}
                />
            </div>
        )
    }
}

export default CommentSection;
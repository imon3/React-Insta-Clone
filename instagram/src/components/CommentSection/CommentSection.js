import React from 'react';
import PropTypes from 'prop-types';

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
        const localStorageUserName = localStorage.getItem('user')
        this.setState({
            comments: [...this.state.comments,
            {
                username: localStorageUserName,
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

CommentSection.propTypes = {
    comments: PropTypes.array,
    handleComment: PropTypes.func,
    addNewComment: PropTypes.func,
    comment: PropTypes.string
}

export default CommentSection;
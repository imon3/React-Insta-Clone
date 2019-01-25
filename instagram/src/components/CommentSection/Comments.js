import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentSectionDiv = styled.div`
display: flex;
flex-direction: column;
align-items: start;
margin-left: 10px;
margin-top: 10px;
`;

const UserComment = styled.span`
font-weight: bold;
`;

const FormSection = styled.form`
display: flex;
justify-content: space-between;
width: 100%;
margin: 20px 0 10px 0;
`;

const FormSectionInput = styled.input`
width: 50%;
padding: 5px;
border: none;
`;

const FaEllipsisH = styled.i`
margin-right: 10px;
`;

class Comments extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <CommentSectionDiv>
                {this.props.comments.map((comment, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <UserComment key={index}>{comment.username}</UserComment> <span>{comment.text}</span>
                            </div>
                        </div>
                    )
                })}
                <FormSection
                    onSubmit={this.props.addNewComment}
                >
                    <FormSectionInput type='text' placeholder='Add a comment...' name='comment' value={this.props.comment} onChange={this.props.handleComment} />
                    <FaEllipsisH onClick={this.props.addNewComment} className="fas fa-ellipsis-h"></FaEllipsisH>
                </FormSection>
            </CommentSectionDiv>
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
import React from 'react';
import Styled from 'styled-components';
import CommentItem from './CommentItem';

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

function CommentList(props){
    const { comments } = props;

    return(
        <Wrapper>
            {comments.map((comment, index) => {
                return <CommentItem key={comment.id} comment={comment} />
            })}
        </Wrapper>
    );
}
export default CommentList;
import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;
const CommText = Styled.p`
    font-size: 14px;
    font-weight: 300;
`;

function CommentItem(props){
    const {comment} = props;

    return(
        <Wrapper>
            <CommText>{comment.content}</CommText>
        </Wrapper>
    );
}
export default CommentItem;
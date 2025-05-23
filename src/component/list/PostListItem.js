import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    width: calc(100% - 32px);
    display: flex;
    padding: 16px;
    border: 1px solid gray;
    border-radius: 8px;
    cursor: pointer;
    background: white;

`;
const TitleText = Styled.p`
    font-size: 20px;
    font-weigth: 500;
`;
function PostListItem(props){
    const {post, onClick} = props;

    return(
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}
export default PostListItem;
import React from 'react';
import PostListItem from "./PostListItem";
import Styled from 'styled-components';

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 16px;
`;

function PostList(props){
    const {posts, onClickItem} = props;

    return(
        <Wrapper>
            {posts.map((post, index) => {
                return(
                    <PostListItem 
                    key={post.id} 
                    post={post} 
                    onClick={() => {
                        onClickItem(post);
                    }}/>
                );
            })}
        </Wrapper>
    );
}
export default PostList;
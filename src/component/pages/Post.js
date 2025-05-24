import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommentList from '../list/CommentList';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import data from '../../data';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100%-50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 100%;
    max-width: 720px;
    margin-bottom: 16px;
`;
const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-raduis: 8px;
`;
const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`
const contentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;
const commentText = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

function Post(props){
    const navigate = useNavigate();
    const {postId} = useParams();

    const post = data.find((item) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState("");

    return(
        <Wrapper>
            <Container>
                <Button title="뒤로 가기" onClick={() => {
                    navigate("/Feed");
                }}/>
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <contentText>{post.content}</contentText>
                </PostContainer>
                <commentText>댓글</commentText>
                <CommentList comment={post.comments}/>

                <TextInput height={40} value={comment} onChange={(event) => {
                    setComment(event.target.value);
                }}/>
                <Button title="댓글 작성하기"/>
            </Container>
        </Wrapper>
    )
}
export default Post;
import React from 'react';
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import PostList from '../list/Postlist';
import Button from '../ui/Button';
import data from '../../data';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100%-32px);
    display: flex;
    align-itmes: center;
    justify-content: center;
`;
const Containter = styled.div`
    width: 100%;
    max-width: 720px;
`;
export default function Feed(props) {
    const navigate = useNavigate();
    
    return(
        <Wrapper>
            <Containter>
                <Button title="작성" onClick={() => {
                    navigate("/post");
                }}/>
            
            <PostList posts={data} onClickItem={(item) => {
                navigate(`/post/${item.id}`);
            }}/>
            </Containter>
        </Wrapper>
    );
}
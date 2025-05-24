import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100%-50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Containter = styled.div`
    width: 100%;
    max-width: 720px;
    margin-bottom: 16px;
`
function PostWrite(props){
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    return(
        <Wrapper>
            <Containter>
                <TextInput height={20} value={title} onChange={(event) => {
                    setTitle(event.target.value);
                }}/>
                <TextInput height={480} value={content} onChange={(event) => {
                    setContent(event.target.value);
                }}/>
                <Button title="등록" onClick={() => {
                    navigate("/Feed");
                }}/>
            </Containter>
        </Wrapper>
    )
}
export default PostWrite;
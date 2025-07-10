import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Post(){
    
    const[title, setTitle] = useState('');
    const[contents, setContents] = useState('');
    const navigate = useNavigate();

    const submit = () => {
        if(!title.trim() || !contents.trim()){
            alert('제목과 내용을 모두 입력해주세요.');
            return;
        }
        console.log('제출된 게시물: ', {
            title, contents, date: new Date().toLocaleString()
        });
        alert('게시물이 등록되었습니다.');
        navigate('/Feed');
    };

    return(
        <div className='Post'>
            <div>
                <button className="submit-btn" onClick={submit}>등록</button>
            </div>

            <div>
                <input type='text' id='title_txt' name="title" placeholder='제목' value={title}
                 onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div>
                <textarea id='content_txt' name='contents' placeholder='내용을 입력하세요.' value={contents}
                onChange={(e) => setContents(e.target.value)}></textarea>
            </div>
        </div>
    )
}
export default Post;
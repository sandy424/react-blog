import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Post(){
    
    return(
        <div className='Post'>
            <div>
                <input type='text' id='title_txt' placeholder='제목'/>
            </div>

            <div>
                <textarea id='content_txt' placeholder='내용을 입력하세요.'></textarea>
            </div>
        </div>
    )
}
export default Post;
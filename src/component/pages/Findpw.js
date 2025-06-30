import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../style/Style.css';

export default function Findpw() {

    const [inputs, setInputs] = useState({id: "", pw: ""});
    const {id, pw} = inputs;
    const navigate = useNavigate();

    const change = (e) => {
        const {id, value} = e.target;
        setInputs({
            ...inputs,
            [id]: value
        });
    }
    
    const onClick = async() => {
        if(!id || !pw){
            alert("아이디와 비밀번호를 모두 입력해주세요.");
            return;
        }
        navigate('/');
    }

    return(
        <div className='page'>
            <div className='title'>
                <br/>
                로그인
            </div>

            <div>
                {/* 아이디 */}
                <div style={{marginTop: "23px"}} className='inputTitle'>아이디</div>
                <div className='inputWrap'>
                    <input type='text' id='id' className='input' placeholder='your id' value={id} onChange={change}></input>
                </div>

                <div style={{marginTop: "20px"}} className='inputTitle'>비밀번호</div>
                <div className='inputWrap'>
                    <input type='password' id='pw' className='input' placeholder='your pw' value={pw} onChange={change}></input>
                </div>
                {/* 로그인 버튼 */}
                <div style={{marginTop: "18px"}} className='loginBtn'>
                    <button className='btn' onClick={onClick}>Login</button>
                </div>

                <div style={{marginTop: "18px"}} className='signView'>
                    계정이 없으신가요? <Link className='signLink' to={'/Sign'}>회원가입</Link>
                </div>
                <div style={{marginTop: "18px"}} className='signView'>
                    <Link style={{marginRight: "10px"}} className='findLink' to={'/Findid'}>아이디 찾기</Link>
                    <Link className='findLink' to={'/Findid'}>비밀번호 찾기</Link>
                </div>
            </div>
        </div>
    );
}
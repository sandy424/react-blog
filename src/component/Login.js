import React, {useState} from 'react';
import {Link}  from 'react-router-dom';
import './Login.css';

const User = {
    id: 'sandy424',
    pw: 'sandy424'
}

export default function Login() {

    const [inputs, setInputs] = useState({id: "", pw: ""});
    const {id, pw} = inputs;

    const change = (e) => {
        const {id, value} = e.target;
        setInputs({
            ...inputs,
            [id]: value
        });
    }

    const onClick = () => {
        if(id === User.id && pw === User.pw) {
            alert('로그인 했습니다.');
        }else {
            alert('등록되지 않은 회원이거나 입력한 값이 일치하지 않습니다.');
        }
        setInputs({id: "", pw: ""});
    }

    return(
        <div className='page'>
            <div className='title'>
                <br/>
                아이디와 비밀번호를 입력해주세요.
            </div>

            <div>
                {/* 아이디 */}
                <div style={{marginTop: "20px"}} className='inputTitle'>아이디</div>
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
            </div>
        </div>
    );
}
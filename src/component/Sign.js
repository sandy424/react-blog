import React, {useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import './Style.css';

function Sign() {

    const navigate = useNavigate();

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
        alert('회원가입이 완료되었습니다.');
        navigate('/Login');
    }

    return(
        <div className='page'>
                    <div className='title'>
                        <br/>
                        아이디와 비밀번호를<br/> 입력해주세요
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
                            이미 계정이 있으신가요? <Link className='signLink' to={'/Login'}>로그인</Link>
                        </div>
                    </div>
                </div>
    );
}

export default Sign;
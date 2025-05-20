const express = require("express");
const body = require('body-parser');
const cors = require('cors');
const db = require('./database/db');

//앱 초기화
const app = express();
//백엔드 서버 포트
const port = 3001;
//프론트의 요청 허용
app.use(cors());
app.use(body.json());   //json 요청 파싱
//데이터 보내기
app.post("/api/register", (req, res) => {
    const {id, pw} = req.body;
    if(!id || !pw) {
        return res.status(400).send('아이디와 비밀번호를 모두 입력해주세요.'
        )};

    const sql = 'INSERT INTO users (id, pw) VALUES(?, ?)';
    db.query(sql, [id, pw], (err, results) => {
        if(err) {
            console.log('회원가입 오류: ', err);
            return res.status(500).json({Message: '회원가입 실패'});
        }
        res.status(200).json({message: '회원가입 성공'});
    });
});

app.listen(port, function(){
    console.log("서버 가동");
});
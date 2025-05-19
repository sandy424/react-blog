const express = require("express");
const body = require('body-parser');
const app = express();

const database = [
    {id: sandy424, pw: 'sandy424'},
];

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/react-blog/src/component/Sign.js');
});

app.get('/database', (req, res) => {
    res.send(database);
})

app.listen(3000, function(){
    console.log("서버 가동");
});
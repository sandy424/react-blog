const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/api/signup', (req, res) => {
    const{id, pw} = req.body;

    app.listen(PORT, () => {
        console.log("실행 중입니다.");
    })
});
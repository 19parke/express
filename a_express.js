import express from "express";

// express는 하나의 함수, app으로 많이 사용함
const app = express();
const port = 8000;

// Node 와 의 차이점 : createServer 없음, 바로 서버 실행 가능

// 서버 실행
app.listen(port, ()=>{
    console.log(`server started : ${port} port!`)
})

// main page, get요청
app.get('/', (_, res)=>{
    res.set({"Content-Type" : "text/html; charset=utf-8;"})
    res.end('<h1>Welcome Express!🤠</h1>');
})
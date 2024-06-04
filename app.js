import express from 'express';
import connect from './connect/connect.js';
import cors from 'cors';

// 1. mongoDB 연결, connect 사용
connect()

// 2. 서버 실행
const port = 8000;
const app = express();

// 내가 허용하지 않은 사람들이 DB에 접근 하는 것 위험 -> CORS설정, 나한테 요청한 경로를 먼저 설정해줘야 한다
// 실행 했을 때 접근할 수 있는 권한자 먼저 설정
// CORS 설정
// yarn add cors
// 미들웨어로써 어떤 요청이든 지정된 로직보다 먼저 작업한다. 즉 전처리이다. 먼저 가로채간다.
// use Example : 어떤 요청이든 가로채서 setheader를 다 설정 해준다
app.use(express.urlencoded({extended:false})); //기본 설정
app.use(cors({
    origin : '*', 
    method : ['GET', 'POST', 'DELETE', 'PUT'],
    credential : true,
}))


app.listen(port, ()=>{
    console.log(`server is on ${port} port!`)
})
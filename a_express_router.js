// 1. express 가져오기
import express from "express";
import {parse} from 'url';

const app  = express()
const port = 8000;

app.listen(port, ()=>{
    console.log(`server is on ${port} port!`);
})

const mainPage = (req, res)=>{
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.end('<h1>환영합니다. 🐶 </h1>')
}

const newProduct = (req, res)=>{
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    const query = parse(req.url, true).query; //쿼리스트링
    res.end(`
        <h1 style='text-align:center;'>신상품 소개</h1>
        <ul style='text-align:center; list-style:none;'>
            <li>${query.new1}</li>
            <li>${query.new2}</li>
        </ul>
    `)
}

// hot1, hot2
const hotProduct = (req, res)=>{
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    // parse로 url을 파싱, 쿼리스트링 분리
    const query = parse(req.url, true).query;

    // 서버를 종료
    //http://localhost:8000/hot?hot1=안녕&hot2=잘가
    res.end(`
        <h1 style='text-align:center;'>핫상품 소개</h1>
        <ul style='text-align:center; list-style:none;'>
            <li>${query.hot1}</li>
            <li>${query.hot2}</li>
        </ul>
    `)

}

const notFound = (req, res)=>{

    res.set({"Content-Type" : "text/html; charset=utf-8;"})
    // 상태코드 작성
    res.statusCode = 404;
    res.end("<h1 style='text-align:center'>페이지를 찾을 수 없습니다. 😥</h1>")
}

app.get('/', mainPage)

//new 신상품
app.get('/new', newProduct)

//hot 핫상품
app.get('/hot', hotProduct)

//notFound
app.get("*", notFound)
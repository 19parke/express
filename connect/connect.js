// mongoose, mongodb 설치 
// yarn add mongoose , mongodb

import mongoose from "mongoose";

// 내 mongodb 링크
// mongodb+srv://app:1234@app.zqa4sgg.mongodb.net/
const connect_url = `mongodb+srv://app:1234@app.zqa4sgg.mongodb.net/`;

const connect = () => {
    if(process.env.NODE_ENV !== "production"){
        mongoose.set("debug", true);
    }

    mongoose
        .connect(connect_url, {
            dbName : "express"
        })
        .then(()=>{
            console.log('Connected to MongoDB')
        })
        .catch((err)=>{
            console.error('Connected fail to MongoDB')
            console.log(err);
        })
}

export default connect;
// connect를 앱에서 사용하기 위해
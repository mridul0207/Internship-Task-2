const express = require('express');
const app = express();
const sequelize = require('./config');
const Profiles = require('./model');
app.use(express.urlencoded({extended:true}));
app.post("/",async (req,res)=>{
    const data =await req.body;
    const key =Object.keys(data)[0];
    const keyJson =await JSON.parse(key);
    Profiles.create({
        name:keyJson.name,
        url:keyJson.url,
        text:keyJson.text,
        location:keyJson.location,
        followers:keyJson.followers,
        connections:keyJson.connections
    }).then(res=>console.log(res)).catch((e)=>console.error(e));
})

app.listen(4000,(e)=>{
    if(e)
    console.log(e);
    console.log("Server running at port 4000");
})
const express =require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

//route handeler 
app.get("/",(req,res)=>{
    res.send("hello from root route");
})


app.get("/about",(req,res)=>{
    res.send("hello from about section");
})

app.listen(PORT,()=>{
    console.log(`App listen on port ${PORT}`);
})
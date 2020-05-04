const express = require( "express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();


const users = require("./routes/api/users");
const db = require("./config/keys").mongoURI;

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose
.connect(db)
.then( () =>
    console.log('mongodb connected')
)
.catch(err =>console.log(err));

app.get("/",(req,res)=>{
    res.send("hello");
});

//使用routes
app.use("/api/users",users);


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
const express =require('express');
const app = express();
app.get("/",function(req,res){
    res.send('Hello from Docker')
})

app.listen(2000,function(){
    console.log("app listen on 2000")
})
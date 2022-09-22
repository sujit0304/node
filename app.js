const express =require('express');
const app =express();
// For parsing application/json
app.get('/',(req,res) =>{

    res.send('this is web page');
});

const port = process.env.port || 3000 ;
app.listen(port, () =>{
    console.log("hello");
})
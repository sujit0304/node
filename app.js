const express =require('express');
const app =express();
// For parsing application/json
app.get('/',(req,res) =>{

    res.send('this is web page');
});
app.listen(3000, () =>{
    console.log("hello");
})
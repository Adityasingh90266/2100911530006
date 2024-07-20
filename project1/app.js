const express = require("express");

const app = express();
const Postreqnumber = require('./controller/Postreqnumber');
const testRouter = require('./router/testRouter');

app.listen(9876,()=>{
    console.log("app listen");
})

app.post('numbers/e',Postreqnumber);

app.route('/test',testRouter);
const db_link="mongodb+srv://adityalp2510:ap7qg99FZ6Y4LjDv@cluster0.uxlvhyd.mongodb.net/"
const mongoose = require('mongoose');
mongoose
.connect(db_link)
.then(function(db){
    console.log("db connected");
})
.catch(function (err) {
    console.log(err);
});


const apimodel=new mongoose.Schema({
    number:{
        type:String,
        required:true
    },
    windowPrevState:{
        type:String,
        default:""
    },
    windowCurrState:{
        type:String,
        requires:true,
        default:""
    },
    avg:{
        type:Number,
        default:0
    }
})

module.exports = apimodel;
const apimodel = require('../model/apimodel');
const apimodel=require('../model/apimodel');

module.exports.Postreqnumber = async function Postreqnumber(req,res){
    try{
        let obj=req.body;
        let m=obj.number;
        let num=await apimodel.find();
        let pre=num.windowCurrState;
        num.windowPrevState=pre;
        num.windowCurrState=obj.number;
        num.number=obj.number;
        await num.save();
        res.json({
            data:data
        });
    }
    catch{
        message:err.message
    }
}
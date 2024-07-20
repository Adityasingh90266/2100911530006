const express=require('express');
const apimodel = require('../model/apimodel');

module.exports.prime= async function prime(req,res){
    let n=await apimodel.find();
    let nu=n.number;
    let ans=[];
    for(let i in nu){
        if(prime(i)){
            ans.push(i);
        }
    }

    return res.json({
        data:ans
    })
}

module.exports.fibonacci= async function fiboncci(req,res){
    let n=await apimodel.find();
    let nu=n.number;
    let ans=[];
    for(let i in nu){
        if(fiboncci(i)){
            ans.push(i);
        }
    }
    return res.json({
        data:ans
    })
}

module.exports.even= async function even(req,res){
    let n=await apimodel.find();
    let nu=n.number;
    let ans=[];
    for(let i in nu){
        if(even(i)){
            ans.push(i);
        }
    }
    return res.json({
        data:ans
    })
}

module.exports.random= async function random(req,res){
    
}

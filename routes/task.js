const { Router }=require("express")
const express=require("express");
const { findOne } = require("../model/model.js");
const router =express.Router();
const Task = require('../model/model.js')
router.post('/',async(req,res)=>{
    
    try {
        const task = await Task.create(req.body)
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
})
router.get('/:code',async(req,res)=>{
    try {
    const {code}=req.params
    const task = await Task.findOne({Token:code})
    res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
})
module.exports =router
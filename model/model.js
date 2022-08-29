const mongoose =require("mongoose")

const TaskSchema = new mongoose.Schema({
    code:{
        type:String,
        required:[true,'please write something']
    },
    Token:String
})
module.exports=mongoose.model("code",TaskSchema)
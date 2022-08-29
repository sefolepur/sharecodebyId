const express =require("express")
const app =express()
const connectDB =require("./DB/connectDB")
require('dotenv').config()
app.use(express.json())
const tasks =require('./routes/task')
app.use('/api/v1/tasks',tasks) 
app.use(express.static('./static'))
const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,()=>{
            console.log('app is listening on port 5000......');
        })
    } catch (error) {
        console.log(error);
    }
}

start()

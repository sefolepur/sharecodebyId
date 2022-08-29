const express =require("express")
const app =express()
const connectDB =require("./DB/connectDB")
require('dotenv').config()
app.use(express.json())
const tasks =require('./routes/task')
app.use('/api/v1/tasks',tasks) 
app.use(express.static('./static'))
const port =process.env.PORT || 5000
const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log('app is listening on port 5000......');
        })
    } catch (error) {
        console.log(error);
    }
}

start()

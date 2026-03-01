import dotenv from "dotenv"
import connectDB from './config/db.js'
import app from "./app.js";

dotenv.config()
console.log(dotenv.config)

//connect databse 
connectDB();

const PORT = process.env.Port || 5000

app.listen(PORT,()=>{
    console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
)
})
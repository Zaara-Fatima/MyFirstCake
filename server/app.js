import express from 'express'
import cors from "cors"
import helmet from "helmet"
import morgan from 'morgan'
import rateLimit from "express-rate-limit"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from './routes/userRoutes.js'
import orderRoutes from "./routes/orderRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"

import {notFound, errorHandler} from "./middleware/errorMiddleware.js"

const app=express()

//Global MiddleWare

app.use(cors({
    origin:["https://my-first-cake-cs3t.vercel.app"," http://localhost:5173"]
}))

app.use(express.json())

app.use(helmet())

if (process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}

app.set("trust proxy", 1);

const limiter = rateLimit({
    windowMs: 10* 60* 1000,
    max: 100,
})

app.use(limiter)


app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts",cartRoutes)
app.use(notFound);
app.use(errorHandler);


export default app;

import express from 'express'
import cors from "cors"
import helmet from "helmet"
import morgan from 'morgan'
import rateLimit from "express-rate-limit"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from './routes/userRoutes.js'
import orderRoutes from "./routes/orderRoutes.js"

import {notFound, errorHandler} from "./middleware/errorMiddleware.js"

const app=express()

//Global MiddleWare

app.use(cors())

app.use(express.json())

app.use(helmet())

if (process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}

const limiter = rateLimit({
    windowMs: 10* 60* 1000,
    max: 100,
})

app.use(limiter)


app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);
app.use(errorHandler);


export default app;
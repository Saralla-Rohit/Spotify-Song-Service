import dotenv from "dotenv"
import songRoutes from "./route.js"
import express from "express";
import { createClient } from "redis";
import cors from "cors"
dotenv.config()
const app=express()
app.use(cors())
export const redisClient=createClient({
    password:process.env.REDIS_PASSWORD,
    socket:{
        host:"redis-11682.c212.ap-south-1-1.ec2.redns.redis-cloud.com",
        port:11682
    }
})

redisClient.connect()
.then(
    ()=>console.log("Connected to Reddis")
).catch(console.error);


app.use("/api/v1",songRoutes)
app.listen(process.env.PORT,()=>{
    console.log("Server is listening on port : ",process.env.PORT)
})
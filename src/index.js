import mongoose from "mongoose"
import { DB_NAME } from "./constant"

import express from "express"
const app = express(); 

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERRR: " , error);
            throw error; 
        })
        app.listen(process.env.PORT , ()=>{
            console.log(`App is listening on pORT ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error :" , error)
    }
})
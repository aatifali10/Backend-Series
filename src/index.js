import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDB();

// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
// (async()=>{
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

//     app.listen(process.env.PORT,()=>{
//       console.log(`Database connected successfully http://localhost:${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.log("Database not connected")
//     return error
//   }
// })()
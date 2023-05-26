import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import hotelsRoute from "./routes/hotels.js";
import authRoute from "./routes/Auth.js";
import userRoute from "./routes/User.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

//middleware
app.use(cookieParser());
app.use(cors())
app.use(express.json());


mongoose.connect(process.env.URL).then(() =>console.log("DB Connected")); 

app.get("/", (req, res)=>{res.send("hii")})



app.use("/api/hotel", hotelsRoute);
app.use("/api/auth", authRoute );
app.use("/api/user", userRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen( 8000 , ()=>{
    console.log("Backend Connection Successful!");
})
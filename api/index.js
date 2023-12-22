import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import authRouter from "./routes/auth.routes.js"
import listingRouter from "./routes/listing.routes.js"
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js"
import path from "path";

config();
//mongoose connnection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(`${err}`);
  });


  const _dirname=path.resolve();


const app = express();

app.use(cookieParser())
app.use(express.json());

app.listen(3000, () => {
  console.log(`server is running on ${3000}`);
});

//endpoints

app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/listing",listingRouter);


app.use(express.static(path.join(_dirname,'/client/dist')));

app.get("*",(req, res) => {
  res.sendFile(path.join(_dirname,'client','dist','index.html'))
})


//error middleware
app.use((err, req, res, next) => {
  const statusCode=err.statusCode||500;
  const message=err.message||'Internal Server Error';
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})
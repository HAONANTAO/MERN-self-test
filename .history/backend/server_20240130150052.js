import express from "express";
import cors from "cors";
import bodyParser from "body-parser";



const app = express();
app.use(cors());
app.use(bodyParser.json());



app.listen(3001,()=>{
  console.log("链接成功")
})
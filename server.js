import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";
import { connectDB } from "./src/db/db.js";
import routers from "./src/routes/index.js";


dotenv.config();

const app = express()
app.use(cors({origin:'*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/yiino', routers)
// Start server
const startServer = async () => {
    const PORT = process.env.PORT || 1177;
    try {
       connectDB(process.env.MONGODB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
       });
       app.listen(PORT, ()=> {
          console.log(`App listening on port: ${PORT}`)
       })
    } catch (error) {
       console.log(error);
    }
 }
 
 startServer();
 
 app.get('/'), async (req, res) => {
    return res.status(200).json({message:'app is running'});
 }
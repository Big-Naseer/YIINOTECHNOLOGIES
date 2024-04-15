import express from "express";;
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";
import { connectDB } from "./src/db/db.js";

dotenv.config();

const app = express()
app.use(cors({origin:'*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Start server
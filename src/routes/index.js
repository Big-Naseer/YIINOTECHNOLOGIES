import contactUsRoute from '../routes/contact/contactUs.route.js'
import express from 'express';

const routers = express.Router()

routers.use('/user', contactUsRoute)
export default routers;
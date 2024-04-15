import { Schema, model } from "mongoose";


const messageSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type:   String,
        required: true,
    },
    phoneNumber:{
        type: String
    },
    address:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
});

export default model('ContactUs', messageSchema)
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
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
},
{
    timestamps: true,
}
);

export default model('ContactUs', messageSchema)
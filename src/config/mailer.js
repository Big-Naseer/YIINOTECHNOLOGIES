import dotenv  from "dotenv";
import { google } from "googleapis";
import { createTransport } from "nodemailer";

dotenv.config()

const transport = createTransport({
    host: "smpt-relay.bravo.com",
    port: 587,
    auth: {
        user:h,
        pass:f,
    }
});

transport.verify((error, success) =>{
    if(error){
        console.log(error);
    } else{
        console.log(success);
    }
})

export const sendMail = async (from, to, subject, html, replyTo) =>{
    return new Promise ((resolve, reject) => {
        transport.sendMail({from, to, subject, html, replyTo}, (err, info) => {
            if (err) {
                console.log('Mail error', err)
                return reject(err)
            }
            resolve(info)
        })
    })
};
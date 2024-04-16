import ContactUsModel from "../models/ContactUsModel.js";

export const contactUs = async (req, res) => {
    try {
        const {fullName, email, phoneNumber, address, message} = req.body;

        // const existingContact = await ContactUsModel.findOne({email});

        // if (existingContact) {
        //     return res.status(409).json({success:false, message:"contact already exist"})
        // }

        const contactUsme = new ContactUsModel({
            fullName,
            email,
            address,
            phoneNumber,
            message,
        })
        console.log(contactUsme.email, contactUsme.phoneNumber, contactUsme.address, contactUsme.message);
        await contactUsme.save();
        console.log('Messeage Send Successfully', contactUsme);
        res.status(201).json({message: 'Message received', contactUsme}) 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
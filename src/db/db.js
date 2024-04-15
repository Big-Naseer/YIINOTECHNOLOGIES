import mongoose from "mongoose";

export const connectDB = async (connectionString) => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`DB connected`);
    } catch (error) {
        console.error(`DB connection failed: ${error}`);
        process.exit(1);
    }
};

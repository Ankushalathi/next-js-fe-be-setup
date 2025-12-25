// utils/db.ts
import mongoose from 'mongoose';

const connectDB = async () => {
    console.log( process.env.NEXT_PUBLIC_API_URL ,"here");
    console.log(process.env.MONGO_URI,"URL");


    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
        console.error('MongoDB URI is not provided');
        return;
    }

    if (mongoose.connection.readyState >= 1) return;

    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};


export default connectDB;

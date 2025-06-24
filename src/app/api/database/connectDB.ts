import mongoose from "mongoose"

export const connectDB = async () => {
    try {
         const connect = await mongoose.connect(process.env.DATABASE_URL as string)
         console.log(`MongoDb connected:${connect.connection.host}`)
    } catch (error: unknown) {
    if (error instanceof Error) {
        console.log('Error connecting to DB:', error.message);
    } else {
        console.log('Unexpected error:', error);
    }
        process.exit(1);
    }
    
}
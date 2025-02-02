import { configurationValidation } from '@/resources/schemaValidator/envValidator';
import mongoose from 'mongoose';

export const cached: { connection?: typeof mongoose; promise?: Promise<typeof mongoose> } = {};

async function connectMongo() {

    const variables = configurationValidation.validate(process.env, {
        abortEarly: false
    }).catch(((error) => {
        console.error("Missing Environment Keys!", error.errors);
        process.exit(1);
    }));

    if (cached.connection) {
        return cached.connection;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: true,
        };
        cached.promise = mongoose.connect((await variables).MONGO_URI, opts);
    }

    try {
        cached.connection = await cached.promise;
    } catch (error) {
        cached.promise = undefined;
        throw error;
    }

    return cached.connection;
}

export default connectMongo;
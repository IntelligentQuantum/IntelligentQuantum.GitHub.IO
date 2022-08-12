import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI)
    throw new Error('Please define the MONGODB_URI environment variable inside .env local');

// @ts-ignore
let cached = global.mongoose;

if (!cached)
{
    // @ts-ignore
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect()
{
    if (cached.conn)
        return cached.conn;

    if (!cached.promise)
    {
        const options =
            {
                bufferCommands: false
            };

        if (MONGODB_URI)
        {
            cached.promise = mongoose.connect(MONGODB_URI, options).then(
                (mongoose: any) =>
                {
                    return mongoose;
                });
        }
    }

    cached.conn = await cached.promise;

    return cached.conn;
}

export default dbConnect;

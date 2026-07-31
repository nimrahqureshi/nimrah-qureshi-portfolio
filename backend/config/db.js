import mongoose from 'mongoose';

/**
 * Serverless-safe MongoDB connection: the connection promise is cached on
 * globalThis so warm Vercel invocations reuse it instead of opening a new
 * pool per request. Never calls process.exit — on Vercel that would kill
 * the function; errors surface to the route's error handler instead.
 */
const uri = () => process.env.MONGODB_URI || 'mongodb://localhost:27017/nimrah_portfolio';

let cached = globalThis.__mongoose;
if (!cached) cached = globalThis.__mongoose = { conn: null, promise: null };

export default async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri(), { serverSelectionTimeoutMS: 8000 })
      .then((m) => m)
      .catch((err) => {
        cached.promise = null; // allow retry on next request
        throw err;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

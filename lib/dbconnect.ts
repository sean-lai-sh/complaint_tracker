import mongoose, { ConnectOptions } from 'mongoose';

const uri = process.env.MONGODB_URI as string;

const clientOptions: ConnectOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

async function run() {
  try {
    const connection = await mongoose.connect(uri, clientOptions);
    if (connection.connection.db) {
      await connection.connection.db.admin().command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } else {
      throw new Error('Failed to connect to database.');
    }
  } finally {
    await mongoose.disconnect();
  }
}

export default run;


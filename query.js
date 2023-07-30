

const { MongoClient } = require('mongodb');
const mongoURI = process.env.MONGODB_URI;
const client = new MongoClient(mongoURI);


async function run() {
    await client.connect();
    console.log("database connected successfully");
}


module.exports = {
    async connectDB() {
        await run();
        return client.db('sample');
    },
  };







  
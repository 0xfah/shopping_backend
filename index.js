const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors')

const app = express()

app.use(cors())


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'shopping';


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('men');
  //  await collection.insertMany([{name: "man1", price: 20},{ name: "man2", price: 30}, {name: "man3", price: 40}, {name: "man4", price: 50}])

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)


app.get('/men', async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection('men').find({}).toArray();
  return res.jsonp(results)
})



const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
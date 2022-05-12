const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors')

const app = express()

app.use(cors())


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


app.get('/men-names', (req, res) => {
    res.json('test')
})



const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
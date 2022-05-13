const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");

const app = express();

app.use(cors());

const uri =
  "";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  
client.connect(async (err) => {
  if(err) {
    console.log(err);
  }
  console.log("Connected to MongoDB");
  const collection = client.db("shopping").collection("men");
  // perform actions on the collection object
 
  client.close();
});


app.get("/men", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("men").find({}).toArray();
  return res.jsonp(results);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

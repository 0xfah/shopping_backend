const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");

const app = express();

app.use(cors());

const uri =
  "";
const dbName = "shopping";
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
});


app.get("/men", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("men").find({}).toArray();
  return res.jsonp(results);
});


app.get("/accessories", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("accessories").find({}).toArray();
  return res.jsonp(results);
});

app.get("/appliances", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("appliances").find({}).toArray();
  return res.jsonp(results);
});

app.get("/book", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("book").find({}).toArray();
  return res.jsonp(results);
});

app.get("/computer", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("computer").find({}).toArray();
  return res.jsonp(results);
});

app.get("/detergents", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("detergents").find({}).toArray();
  return res.jsonp(results);
});

app.get("/game-kids", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("game-kids").find({}).toArray();
  return res.jsonp(results);
});

app.get("/kids", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("kids").find({}).toArray();
  return res.jsonp(results);
});

app.get("/kitchen", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("kitchen").find({}).toArray();
  return res.jsonp(results);
});

app.get("/men-shoes", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("men-shoes").find({}).toArray();
  return res.jsonp(results);
});

app.get("/men-time", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("men-time").find({}).toArray();
  return res.jsonp(results);
});

app.get("/prefume", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("prefume").find({}).toArray();
  return res.jsonp(results);
});

app.get("/schools", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("schools").find({}).toArray();
  return res.jsonp(results);
});

app.get("/travel", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("travel").find({}).toArray();
  return res.jsonp(results);
});

app.get("/tv", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("tv").find({}).toArray();
  return res.jsonp(results);
});

app.get("/woman-shoes", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("woman-shoes").find({}).toArray();
  return res.jsonp(results);
});

app.get("/women", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("women").find({}).toArray();
  return res.jsonp(results);
});

app.get("/women-bags", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("women-bags").find({}).toArray();
  return res.jsonp(results);
});

app.get("/men-watches", async (req, res) => {
  const db = client.db(dbName);
  const results = await db.collection("men-watches").find({}).toArray();
  return res.jsonp(results);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const { MongoClient } = require('mongodb');
const uri = process.env.ATLAS_URI;


mongoose.connect(
  uri,
  {
    useNewUrlParser: true,    
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     console.log('coonection established successfully')
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


const exceriseRouter = require('./routes/excerise');
const userRouter = require('./routes/user');

app.use('/excerise', exceriseRouter);
app.use('/users', userRouter);


app.listen(port, () =>
{
    console.log(`server is running on port: ${port}`);
    }
)
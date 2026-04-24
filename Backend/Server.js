require('dotenv').config();
const express = require('express')
const cors = require('cors');
const ConnectDB = require('./Config/DB_pool')
const PORT = process.env.PORT

const app = express();

app.use(cors({
  origin: process.env.Client || '*',
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-type", "Authorization"],
}));

app.use(express.json())
ConnectDB()
app.get("/", (req, res) => {
  res.send("hello")
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`)
})
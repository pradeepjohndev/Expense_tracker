require('dotenv').config();
const express = require('express')
const cors = require('cors');
const ConnectDB = require('./Config/DB_pool')
const authRoute = require('./Route/AuthRoute')

const PORT = process.env.PORT
const app = express();

app.use(cors({
  origin: process.env.Client || '*',
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-type", "Authorization"],
}));

app.use(express.json());
app.use('/api/v1/auth', authRoute);

app.get("/health", (req, res) => {
  res.send("health check")
});

ConnectDB()

app.get("/", (req, res) => {
  res.send("hello")
});


app.listen(PORT, () => {
  console.log(`server running at ${PORT}`)
})
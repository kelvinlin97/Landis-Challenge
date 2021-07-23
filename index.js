const express = require('express')
const app = express()
const port = 3000
const path = require("path");
const db = require('./server/queries')

//Body Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static Middleware
app.use(express.static(path.join(__dirname, "../public")));

// Error handling Middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/accounts', db.getAccounts)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

module.exports = app;

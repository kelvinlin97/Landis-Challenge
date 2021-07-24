const express = require('express')
const app = express()
const port = 3001
const path = require("path");

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

app.use('/api', require('./api'));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

module.exports = app;

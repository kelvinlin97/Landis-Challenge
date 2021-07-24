const router = require("express").Router();

router.use('/accounts', require('./accounts.js'));

router.use((req, res, next) => {
  const err = new Error("API route not found");
  err.status = 404;
  next(err)
});

module.exports = router;

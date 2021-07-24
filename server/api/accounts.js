const router = require("express").Router();
const db = require('../queries')

router.get('/', async(req, res, next) =>
  db.getAccounts((error, result) => {
    if(error) {
      throw error;
    }
    res.send(result.rows)
  }))

module.exports = router;

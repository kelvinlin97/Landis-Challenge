const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'landis',
  password: 'password',
  port: 5432,
})

const getAccounts = (req, res) => {
  pool.query("SELECT data FROM accounts", (error, results) => {
    if(error){
      throw(error)
    }
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getAccounts
}



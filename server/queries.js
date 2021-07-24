const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'landis',
  password: 'password',
  port: 5432,
})

const getAccounts = (callback) => {
  pool.query("SELECT data FROM accounts", callback)
}

module.exports = {
  getAccounts
}



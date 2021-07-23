const Pool = require('pg').Pool
const pool = new Pool({
  user: 'kelvinlin',
  host: 'localhost',
  database: 'accounts',
  password: 'password',
  port: 5432,
})

const getAccounts = (req, res) => {
  pool.query('SELECT * FROM accounts ORDER BY id ASC', (error, results) => {
    if(error){
      throw(error)
    }
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getAccounts
}



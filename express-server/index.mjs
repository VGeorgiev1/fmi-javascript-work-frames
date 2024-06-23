import DBHelper from './db-helper/db.mjs'
import ASSERT from 'assert';
import express from 'express';
const app = express();
app.use(express.json());
let db = new DBHelper();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/register', async (req, res) => {
  
  let { username, email, password } = req.body;

  ASSERT(username, 'Username should be defined!');
  ASSERT(email, 'Email should be defined!');
  ASSERT(password, 'Password must be defined!');

  let query = await db.query('INSERT INTO users(username, email, password) VALUES($1, $2, $3)', [username, email, password]);
  
  if(query.error) {
    res.status(400).json({erorr: query.error}).end();
    return;
  }
  
  return res.json({ success: true })

  console.log(query)
})

app.listen(8000, () => console.log('Example app listening on port 8000!'))
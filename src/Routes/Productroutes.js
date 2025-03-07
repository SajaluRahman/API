const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./db');
const apiRouter = require('./routes/index');  

app.use(express.json());  

app.use('/api', apiRouter); 

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
  
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = '3000';
const www = "AWS CONNECTION" || './';
app.use(express.static(www));
app.use(bodyParser.json())
app.use(cookieParser());

var allowedOrigins = ['https://yc3aed99b2.execute-api.sa-east-1.amazonaws.com/',
                      'http://localhost:3000',
                      'http://localhost:4200'];

app.use(cors({
  credentials: true,
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));


// server functions
const aws_query = require('./models/aws.js');

app.use(aws_query('https://yc3aed99b2.execute-api.sa-east-1.amazonaws.com/default'));

console.log(`serving ${www}`);
app.get('*', (req, res) => {
  res.send(`MYSQL SERVER - ZEPCOIL DATABASE`);
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));

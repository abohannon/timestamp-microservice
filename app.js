/* User Stories:

I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

If it does, it returns both the Unix timestamp and the natural language form of that date.

If it does not contain a date or Unix timestamp, it returns null for those properties.

*/

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const time = require('./time.js');

app.use(express.static(`${__dirname}/public`));

app.get('/:time', (req, res) => {
  const data = req.params
  console.log('app.js', data);
  res.status(200).json(time(data.time));
});

app.listen(PORT);

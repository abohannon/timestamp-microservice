const moment = require('moment');

const time = (input) => {
  let date = moment(input).format("MMMM DD, YYYY");
  let unixTimestamp = moment(input).format('x');
  console.log('time input', date)
  let formattedDate = {
    real: date,
    unix: unixTimestamp
  }
  return formattedDate;
}

module.exports = time

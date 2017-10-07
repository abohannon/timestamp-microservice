const moment = require('moment');

const time = (input) => {
  console.log(typeof input);
  if (!isNaN(input)) {
    let date = moment.unix(input).format("MMMM DD, YYYY");
    let unixDate = moment(date).format('X');

    let formattedDate = {
      real: date,
      unix: unixDate
    }
    return formattedDate;

  } else if (isNaN(input)) {
    let date = moment(input).format("MMMM DD, YYYY");
    let unixDate = moment(input).format('X');

    let formattedDate = {
      real: date,
      unix: unixDate
    }
    return formattedDate;

  } else {
    return null;
  }
}

module.exports = time

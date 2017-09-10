if (process.env.NODE_ENV === 'production') {
  // We are in production return prod keys
  module.exports = require('./prod');
} else {
  // We are in dev return dev keys
  module.exports = require('./dev');
}

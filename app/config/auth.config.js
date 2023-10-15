require('dotenv').config();
module.exports = {
  secret:  process.env.APP_KEY||"bezkoder-secret-key"
};

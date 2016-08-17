var dotenv = require('dotenv');

// Load environment variables from .env file
if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

module.exports = {
  client: process.env.DB_CLIENT,
  connection: process.env.DATABASE_URL || {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  pool: {
    min: process.env.DB_POOL_MIN,
    max: process.env.DB_POOL_MAX
  }
};

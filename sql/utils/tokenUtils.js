const crypto = require('crypto');

// Generate a simple token with expiration
const generateAccessToken = () => {
  const token = crypto.randomBytes(32).toString('hex'); // 256-bit token in hex
  const expiresAt = Date.now() + 3600 * 1000; // 1 hour from now in milliseconds

  return {
    token,
    expiresAt
  };
};

module.exports = generateAccessToken;


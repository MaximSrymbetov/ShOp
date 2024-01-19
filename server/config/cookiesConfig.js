const jwtConfig = require('./jwtConfig');

const cookiesConfig = {
  refresh: 'refresh',
  access: 'access',
  httpOnly: true,
  maxAgeAccess: jwtConfig.access.expiresIn,
  maxAgeRefresh: jwtConfig.refresh.expiresIn,
};

module.exports = cookiesConfig;

const jwtConfig = {
  access: {
    type: 'access',
    expiresIn: `${1000 * 60 * 5}`,
  },
  refresh: {
    type: 'refresh',
    expiresIn: `${1000 * 60 * 60 * 12}`,
  },
};

module.exports = jwtConfig;

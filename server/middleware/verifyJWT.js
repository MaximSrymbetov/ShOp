const jwt = require('jsonwebtoken');
const cookiesConfig = require('../config/cookiesConfig');
const { generateTokens } = require('../utils/authUtils');

function verifyAccessToken(req, res, next) {
  try {
    const { access } = req.cookies;
    const { user } = jwt.verify(access, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user;
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}

function verifyRefreshToken(req, res, next) {
  try {
    const { refresh } = req.cookies;
    const { user } = jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, email: user.email, name: user.name },
    });

    res.locals.user = user;
    res
      .cookie(cookiesConfig.refresh, refreshToken, {
        maxAge: cookiesConfig.maxAgeRefresh,
        httpOnly: true,
      })
      .cookie(cookiesConfig.access, accessToken, {
        maxAge: cookiesConfig.maxAgeAccess,
        httpOnly: true,
      });
    next();
  } catch (error) {
    res.clearCookie(cookiesConfig.access).clearCookie(cookiesConfig.refresh);
    next();
  }
}

module.exports = verifyAccessToken;

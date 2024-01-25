const router = require('express').Router();
const bcrypt = require('bcrypt');
const generateTokens = require('../../utils/authUtils');
const cookiesConfig = require('../../config/cookiesConfig');
const { User, Favorite } = require('../../db/models');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDB = await User.findOne({ where: { email } });
    // проверка на существующую почту
    if (userDB) {
      const isValidPassword = await bcrypt.compare(password, userDB.password);
      // проверка на правильность пароля
      if (isValidPassword) {
        // создание куки
        const { accessToken, refreshToken } = generateTokens({
          user: { id: userDB.id, name: userDB.name },
        });

        res.locals.user = userDB;

        return res
          .cookie(cookiesConfig.refresh, refreshToken, {
            maxAge: cookiesConfig.maxAgeRefresh,
            httpOnly: true,
          })
          .cookie(cookiesConfig.access, accessToken, {
            maxAge: cookiesConfig.maxAgeAccess,
            httpOnly: true,
          })
          .status(200)
          .json({ message: 'success', user: userDB });
      }
      return res.status(400).json({ message: 'Неправильно указан пароль' });
    }
    return res
      .status(400)
      .json({ message: 'Пользователя с указанной почтой не существует' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

router.post('/signin', async (req, res) => {
  const { name, phone, email, password } = req.body;
  try {
    // проверка на существующую почту
    const existEmail = await User.findOne({ where: { email } });
    if (existEmail) {
      return res
        .status(400)
        .json({ message: 'Указанная почта уже используется' });
    }
    // проверка на существующий номер телефона
    const existPhone = await User.findOne({ where: { phone } });
    if (existPhone) {
      return res
        .status(400)
        .json({ message: 'Указанная почта уже используется' });
    }
    // шифрование пароля
    const hashPassword = await bcrypt.hash(password, 10);
    // занесение юзера в БД
    const userDB = await User.create({
      name,
      phone,
      email,
      password: hashPassword,
    });
    if (userDB) {
      // создание куки
      const { accessToken, refreshToken } = generateTokens({
        user: { id: userDB.id, name: userDB.name, email: userDB.email },
      });

      res.locals.user = userDB;

      return res
        .cookie(cookiesConfig.refresh, refreshToken, {
          maxAge: cookiesConfig.maxAgeRefresh,
          httpOnly: true,
        })
        .cookie(cookiesConfig.access, accessToken, {
          maxAge: cookiesConfig.maxAgeAccess,
          httpOnly: true,
        })
        .status(200)
        .json({ message: 'success', user: userDB });
    }
    return res
      .status(400)
      .json({ message: 'Не удалось создать нового пользователя' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

router.get('/logout', async (req, res) => {
  try {
    const { access } = req.cookies;

    if (access) {
      res.locals.user = undefined;
      return res
        .clearCookie(cookiesConfig.refresh)
        .clearCookie(cookiesConfig.access)
        .status(200)
        .json({ message: 'success' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

router.get('/check', async (req, res) => {
  try {
    if (res.locals.user) {
      const { user } = res.locals;
      const userInDb = await User.findOne({ where: { id: user?.id } });
      if (user && userInDb) {
        return res.status(200).json({
          user: userInDb,
        });
      } else {
        return res.status(400).json({ user: false });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});



module.exports = router;

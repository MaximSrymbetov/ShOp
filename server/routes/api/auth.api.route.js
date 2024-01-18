const router = require('express').Router();
const bcrypt = require('bcrypt');
const generateTokens = require('../../utils/authUtils');
const cookiesConfig = require('../../config/cookiesConfig');
const { User } = require('../../db/models');

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
          .json({ message: 'success', userDB });
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

// РЕГИСТРАЦИЯ

router.post('/signin', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body, 'JJJJJJJJJ');
  try {
    // проверка на существующую почту
    const existEmail = await User.findOne({ where: { email } });
    if (existEmail) {
      return res
        .status(400)
        .json({ message: 'Указанная почта уже используется' });
    }

    // шифрование пароля
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);
    // занесение юзера в БД
    const userDB = await User.create({
      name,
      email,
      password: hashPassword,
    });
    console.log(userDB);
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
        .json({ message: 'success', userDB });
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
      res
        .clearCookie(cookiesConfig.refresh)
        .clearCookie(cookiesConfig.access)
        .json({ message: 'success' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/check', async (req, res) => {
  console.log(res.locals.user);
  if (res.locals.user) {
    const { user } = res.locals;
    const userInDb = await User.findOne({ where: { id: user?.id } });
    console.log(userInDb);
    if (user && userInDb) {
      res.status(200).json({
        user: userInDb,
      });
    } else {
      res.status(400).json({ user: false });
    }
  }
});

module.exports = router;

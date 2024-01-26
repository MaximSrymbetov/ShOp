import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './errorPage.css';
import errImg from '../../public/images/image404.jpeg';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

export default function ErrorPage(): JSX.Element {
  const [counter] = useState(404);



  return (
    <div className="container mx-auto flex justify-center min-w 1/3">
      <motion.section initial="hidden" whileInView="visible">
        <div className="image-container">
          <img src={errImg} alt="undefined" />
          <motion.h1
            custom={2}
            variants={textAnimation}
            className="textoverlay "

          >
            {counter}
          </motion.h1>
          <motion.h1 custom={1} variants={textAnimation} className="textoverlay2">
            Вы думали мы забыли???
          </motion.h1>
          <motion.h1 custom={3} variants={textAnimation} className="textoverlay3">
            А МОЖЕТ ВЫ ХОТИТЕ ➪
          </motion.h1>
          <Link to="/">
            <motion.button custom={4} variants={textAnimation} className="textCont" type="submit">
              ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЧКУ
            </motion.button>
          </Link>
          <h2>Page Not Found</h2>
        </div>
      </motion.section>
    </div>
  );
}

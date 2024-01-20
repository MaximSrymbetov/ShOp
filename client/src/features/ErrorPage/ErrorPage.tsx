import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './errorPage.css';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom=>({
    x: 0,
    opacity: 1,
    transition:{delay:custom* 0.4}
  }),
};
function ErrorPage(): JSX.Element {
  return (
    <motion.section
    initial="hidden"
    whileInView="visible"
    
    >
      <div className='image-container'>
        <img src="\image404.jpeg" />
<motion.h1 custom={2} variants={textAnimation} className='textoverlay '>404</motion.h1>
<motion.h1 custom={1} variants={textAnimation} className='textoverlay2 '>Вы думали мы забыли???</motion.h1>
<motion.h1 custom={3} variants={textAnimation} className='textoverlay3 '>А МОЖЕТ ВЫ ХОТИТЕ ➪</motion.h1>
        <Link to="/">
          
          <motion.button custom={4} variants={textAnimation}className="textCont" type="submit">
            ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЧКУ
          </motion.button>
        </Link>
      </div>
     </motion.section>
  );
}

export default ErrorPage;

import React, { FC } from 'react';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => (
  <div className={styles.NotFound}>
    <Link to="/">
      <motion.button
          initial={{ x: 300 }} animate={{ x: 0 }}
          style={{ position: 'absolute', top: 20, right: 20 }}
      >
        Главная
      </motion.button>
    </Link>
    <motion.h3 initial={{ y: 1000 }} animate={{ y: 0 }}>404 - Страница не найдена</motion.h3>
    <motion.h1 initial={{ y: 1000 }} animate={{ y: 0 }}>🚧</motion.h1>
    <motion.code initial={{ y: 1000 }} animate={{ y: 0 }}>Либо ссылка кривая, либо страница в разработке</motion.code>
  </div>
);

export default NotFound;

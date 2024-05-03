import { FC, useState } from 'react';
import styles from './NewChat.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NewChatProps { }


const NewChat: FC<NewChatProps> = () => {

  const [password, ] = useState(localStorage.getItem('password') || '');

  return (
    <div className={styles.NewChat}>
      <Link to="/">
        <motion.button
          initial={{ x: 300 }} animate={{ x: 0 }}
          style={{ position: 'absolute', top: 20, right: 20 }}
        >
          Главная
        </motion.button>
      </Link>
      <motion.form initial={{ x: 300 }} animate={{ x: 0 }}>
        <motion.label initial={{ x: 300 }} animate={{ x: 0 }}>Адресс получателя
          <motion.input placeholder='UQBJvYWAAiW7eWDAZgATVljcAkKT8Jo4bFe3Xh2v2EPperPd' pattern='^[0-9a-fA-F]{64}$' style={{ outline: 'none', fontSize: 13, width: '400px', height: 30 , marginTop: 20, textAlign: 'left', padding: 3 }} initial={{ x: 300 }} animate={{ x: 0 }} type="text" />
        </motion.label>
        <motion.label initial={{ x: 300 }} animate={{ x: 0 }}>Сообщение
        </motion.label>
        <motion.textarea initial={{ x: 300 }} animate={{ x: 0 }} cols={30} rows={8} style={{ marginTop: 20, border: 'none', borderRadius: 10, fontSize: 20, padding: 10, outline: 'none' }} />
        {!password && <motion.span initial={{ x: 300 }} animate={{ x: 0 }} style={{ marginTop: 20 }}>Нужно ввести пароль шифрования в <Link to={'/settings'}>настройках</Link></motion.span>}
        <div className="">
          <motion.button type='submit' disabled={!password} initial={{ x: 300 }} animate={{ x: 0 }} style={{ marginTop: 20 }}>Отправить</motion.button>
          <motion.button type='reset' initial={{ x: 300 }} animate={{ x: 0 }} style={{ marginTop: 20 }}>Сбросить</motion.button>
        </div>
      </motion.form>
    </div>
  );
}

export default NewChat;

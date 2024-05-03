import { FC } from 'react';
import styles from './Settings.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface SettingsProps {}

const handleChangePassword = (event: { target: { value: string; }; }) => {
    localStorage.setItem('password', event.target.value);
};


const Settings: FC<SettingsProps> = () => (
  <div className={styles.Settings}>
    <Link to="/">
      <motion.button
          initial={{ x: 300 }} animate={{ x: 0 }}
          style={{ position: 'absolute', top: 20, right: 20 }}
      >
        Главная
      </motion.button>
    </Link>
    <motion.form onSubmit={(e) => e.preventDefault()} initial={{ x: -300 }} animate={{ x: 0 }}>
      <div className="">
        <label htmlFor="password">Пароль шифрования:
          <motion.input 
            onChange={handleChangePassword} 
            type="password" 
            defaultValue={localStorage.getItem('password') || ''}
          ></motion.input>
        </label>
      </div>
    </motion.form>
  </div>
);

export default Settings;

import { FC } from 'react';
import styles from './NewChatButton.module.css';
import { Link } from 'react-router-dom';

interface NewChatButtonProps {}

const NewChatButton: FC<NewChatButtonProps> = () => (
  <Link to={"/new-chat"}>
    <div className={styles.NewChatButton}>
      Создать новый чат
    </div>
  </Link>
);

export default NewChatButton;

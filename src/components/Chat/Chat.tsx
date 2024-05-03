import React, { FC } from 'react';
import './chat.css';
import ChatElement from '../ChatElement/ChatElement';
import NewChatButton from '../NewChatButton/NewChatButton';
import { motion } from 'framer-motion';



interface ChatProps {
  chats: Chat[];
}

const Chat: FC<ChatProps> = (props) => (
  <>
    <div className='chat'>
      {props.chats.length > 0 && <span>Чаты</span>}
      {props.chats.map((chat) => (
        <motion.div initial={{ y: 1000 }} animate={{ y: 0 }}>
          <ChatElement
            key={chat.address}
            address={chat.address}
            notifications={chat.messages.length}
            time={chat.messages[chat.messages.length - 1].time}
          />
        </motion.div>
      ))}
      {
      props.chats.length === 0 &&
      <motion.div initial={{ x: -300 }} animate={{ x: 0 }}>
        <span className='no_chats'>Нет чатов</span>
        <NewChatButton/>
      </motion.div>
      }
    </div>
  </>
);

export default Chat;

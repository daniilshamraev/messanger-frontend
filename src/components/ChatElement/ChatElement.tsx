import { FC } from 'react';
import './ChatElement.css';

interface ChatElementProps {
  address: string,
  notifications: number,
  time: string
}

const ChatElement: FC<ChatElementProps> = (props) => (
  <div className="chat-element">
      <span className="chat-element__text">{props.address}</span>
      <div className="chat_info">
        <span className='notification'>{props.notifications}</span>
        <time dateTime=''>{props.time}</time>
      </div>
    </div>
);

export default ChatElement;

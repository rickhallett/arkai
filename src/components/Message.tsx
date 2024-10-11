// src/components/Message.tsx
import React from 'react';
import './Message.css';

interface MessageProps {
  text: string;
  sender: 'user' | 'assistant';
}

const Message: React.FC<MessageProps> = ({ text, sender }) => {
  return (
    <div className={`message ${sender}-message`}>
      <span>{text}</span>
    </div>
  );
};

export default Message;
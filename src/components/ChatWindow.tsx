// src/components/ChatWindow.tsx
import React, {useEffect, useRef} from 'react';
import Message from './Message';
import './ChatWindow.css';

interface ChatWindowProps {
  messages: {
    id: number;
    sender: 'user' | 'assistant';
    text: string;
  }[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }: ChatWindowProps) => {
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="ChatWindow">
      {messages.map((message) => (
        <Message key={message.id} text={message.text} sender={message.sender} />
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatWindow;
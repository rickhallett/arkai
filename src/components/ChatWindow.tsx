// src/components/ChatWindow.tsx
import React from 'react';
import './ChatWindow.css';

interface ChatWindowProps {
  messages: {
    id: number;
    sender: 'user' | 'assistant';
    text: string;
  }[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }: ChatWindowProps) => {
  return (
    <div className="ChatWindow">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender === 'user' ? 'user-message' : 'assistant-message'}`}
        >
          <span>{message.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
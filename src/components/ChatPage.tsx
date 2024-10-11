import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import InputBox from './InputBox.tsx';
import './ChatPage.css';

interface Message {
  id: number;
  sender: 'user' | 'assistant';
  text: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (messageText: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: messageText,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Mock response from assistant
    const assistantMessage: Message = {
      id: messages.length + 2,
      sender: 'assistant',
      text: 'This is a dummy response.',
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, assistantMessage]);
  };

  return (
    <div className="ChatPage">
      <ChatWindow messages={messages} />
      <InputBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPage;
import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import ConversationList from './ConversationList';
import { ChatContainer, LeftPanel, MainChat, MessagesContainer } from './ChatBox.styles';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [activeConversation, setActiveConversation] = useState<string>('Nueva conversación');
  
  const handleSendMessage = (message: string) => {
    setMessages((prev) => [...prev, { text: message, sender: 'user' }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: `Respuesta a: ${message}`, sender: 'bot' }]);
    }, 1000);
  };

  const handleConversationClick = (conversation: string) => {
    setActiveConversation(conversation);
    // TODO: Cargar mensajes de la conversación seleccionada desde la base de datos.
  };

  return (
    <ChatContainer>
      <LeftPanel>
        <ConversationList
          conversations={['Conversación 1', 'Conversación 2', 'Nueva conversación']}
          activeConversation={activeConversation}
          onConversationClick={handleConversationClick}
        />
      </LeftPanel>
      <MainChat>
        <ChatHeader title={activeConversation} />
        <MessagesContainer>
          {messages.map((msg, index) => (
            <MessageBubble key={index} text={msg.text} sender={msg.sender} />
          ))}
        </MessagesContainer>
        <MessageInput onSendMessage={handleSendMessage} />
      </MainChat>
    </ChatContainer>
  );
};

export default ChatBox;

import React, { useState } from 'react';
import { InputContainer, InputField, SendButton } from './ChatBox.styles';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <InputContainer>
      <InputField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe un mensaje..."
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <SendButton onClick={handleSend}>Enviar</SendButton>
    </InputContainer>
  );
};

export default MessageInput;

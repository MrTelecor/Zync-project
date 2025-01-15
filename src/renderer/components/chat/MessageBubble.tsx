import React from 'react';
import { Bubble, BubbleContainer } from './ChatBox.styles';

interface MessageBubbleProps {
  text: string;
  sender: 'user' | 'bot';
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, sender }) => {
  return (
    <BubbleContainer sender={sender}>
      <Bubble sender={sender}>{text}</Bubble>
    </BubbleContainer>
  );
};

export default MessageBubble;

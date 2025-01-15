import React from 'react';
import { HeaderContainer, HeaderTitle } from './ChatBox.styles';

interface ChatHeaderProps {
  title: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default ChatHeader;

import React from 'react';
import { ListContainer, ConversationItem, ActiveConversation } from './ChatBox.styles';

interface ConversationListProps {
  conversations: string[];
  activeConversation: string;
  onConversationClick: (conversation: string) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  activeConversation,
  onConversationClick,
}) => {
  return (
    <ListContainer>
      <h3>Historial de conversaciones</h3>
      {conversations.map((conversation, index) => (
        <ConversationItem
          key={index}
          isActive={conversation === activeConversation}
          onClick={() => onConversationClick(conversation)}
        >
          {conversation}
        </ConversationItem>
      ))}
    </ListContainer>
  );
};

export default ConversationList;

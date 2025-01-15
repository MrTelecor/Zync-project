import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

export const LeftPanel = styled.div`
  width: 300px;
  background-color: #202020;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const MainChat = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #121212;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 16px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;

export const ConversationItem = styled.div<{ isActive: boolean }>`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ isActive }) => (isActive ? '#6a1b9a' : 'transparent')};
  color: ${({ isActive }) => (isActive ? 'white' : '#ccc')};
  &:hover {
    background-color: #6a1b9a;
    color: white;
  }
`;

export const BubbleContainer = styled.div<{ sender: 'user' | 'bot' }>`
  display: flex;
  justify-content: ${({ sender }) => (sender === 'user' ? 'flex-end' : 'flex-start')};
`;

export const Bubble = styled.div<{ sender: 'user' | 'bot' }>`
  max-width: 70%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ sender }) => (sender === 'user' ? '#6a1b9a' : '#2e2e2e')};
  color: white;
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #1f1f1f;
  border-top: 1px solid #6a1b9a;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2e2e2e;
  color: white;
`;

export const SendButton = styled.button`
  margin-left: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #6a1b9a;
  color: white;
  cursor: pointer;
`;

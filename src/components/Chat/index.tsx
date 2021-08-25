import { useState } from "react";
import styled from "styled-components";
import MessagesList from "../MessagesList";
import FlaggedMessagesList from "../FlaggedMessagesList";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 200px;
  padding: 10px 0;
  border: none;
  outline: none;
  margin: 10px 3px;
  :hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }
`;

const Header = styled.h1`
  color: #e7e7e7;
`;

enum MessagesTypeEnum {
  normal,
  flagged,
  words,
}

const Chat = () => {
  const [messagesType, setMessagesType] = useState<MessagesTypeEnum>(
    MessagesTypeEnum.normal
  );

  const renderList = () => {
    switch (messagesType) {
      case MessagesTypeEnum.normal:
        return <MessagesList />;
      case MessagesTypeEnum.flagged:
        return <FlaggedMessagesList />;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <Header>Discord Monitoring</Header>
      <Nav>
        <Button onClick={() => setMessagesType(MessagesTypeEnum.normal)}>
          All Messages
        </Button>
        <Button onClick={() => setMessagesType(MessagesTypeEnum.flagged)}>
          Flagged Messages
        </Button>
      </Nav>
      {renderList()}
    </Wrapper>
  );
};

export default Chat;

import { useEffect, useState } from "react";
import styled from "styled-components";
import Message from "../Message";

type MsgType = {
  content: String;
};

const data: MsgType[] = [
  {
    content: "msg 1",
  },
  {
    content: "msg 2",
  },
  {
    content: "msg 3",
  },
  {
    content: "msg 4",
  },
  {
    content: "msg 5",
  },
];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  color: #e7e7e7;
`;

const Chat = () => {
  const [messages, setMessages] = useState<MsgType[]>([]);

  useEffect(() => {
    setMessages(data);
  }, []);

  return (
    <Wrapper>
      <Header>Discord Monitoring</Header>
      {messages.map((msg: any) => (
        <Message content={msg.content} />
      ))}
    </Wrapper>
  );
};

export default Chat;

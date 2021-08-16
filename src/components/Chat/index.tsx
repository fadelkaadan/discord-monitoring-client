import { useEffect, useState } from "react";
import { Message as DiscordMessage } from "discord.js";
import styled from "styled-components";
import { axiosInstance as axios } from "../../api/discord";
import Message from "../Message";
import RefreshButton from "../RefreshButton";
import Nav from "../Nav";

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
  const [messages, setMessages] = useState<DiscordMessage[]>([]);

  const deleteMessage = async (id: String) => {
    const updatedMessages = messages.filter((msg) => msg.id !== id);
    setMessages(updatedMessages);
    await axios.delete(`/messages/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/messages");
      setMessages(response.data.data);
    };
    fetchData();
  }, []);

  const refresh = async () => {
    const response = await axios.get("/messages");
    setMessages(response.data.data);
  };

  return (
    <Wrapper>
      <Header>Discord Monitoring</Header>
      <Nav />
      <RefreshButton onClick={refresh} />
      {messages.map((msg: DiscordMessage) => (
        <Message
          key={msg.id}
          content={msg.content}
          onClick={() => deleteMessage(msg.id)}
        />
      ))}
    </Wrapper>
  );
};

export default Chat;

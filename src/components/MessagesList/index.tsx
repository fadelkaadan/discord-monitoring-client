import { useEffect, useState } from "react";
import { Message as DiscordMessage } from "discord.js";
import styled from "styled-components";
import { axiosInstance as axios } from "../../api/discord";
import Item from "../Item";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessagesList = () => {
  const [messages, setMessages] = useState<DiscordMessage[] | any[]>([]);

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

  return (
    <Wrapper>
      {messages.map((msg: DiscordMessage) => (
        <Item
          key={msg.id}
          content={msg.content}
          onClick={() => deleteMessage(msg.id)}
        />
      ))}
    </Wrapper>
  );
};

export default MessagesList;

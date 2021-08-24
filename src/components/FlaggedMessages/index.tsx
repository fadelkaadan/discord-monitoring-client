import { useEffect, useState } from "react";
import { Message as DiscordMessage } from "discord.js";
import { axiosInstance as axios } from "../../api/discord";
import Message from "../Message";

const FlaggedMessages = () => {
  const [messages, setMessages] = useState<any[]>([]);

  const deleteMessage = async (id: String) => {
    const updatedMessages = messages.filter((msg) => msg.id !== id);
    setMessages(updatedMessages);
    await axios.delete(`/messages/flagged/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/messages/flagged");
      setMessages(response.data.data.Items);
    };
    fetchData();
  }, []);

  return (
    <>
      {messages.map((msg: DiscordMessage) => (
        <Message
          key={msg.id}
          content={msg.content}
          onClick={() => deleteMessage(msg.id)}
        />
      ))}
    </>
  );
};

export default FlaggedMessages;

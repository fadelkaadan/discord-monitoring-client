import { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance as axios } from "../../api/discord";
import Message from "../Message";

interface IMessage {
  id: string;
  author: string;
  content: string;
  createdTimestamp: any;
}

const Wrapper = styled.div`
  width: 70%;
  max-width: 1000px;
`;

const MessagesList = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const fetchedMessages: any = await axios.get("/flaggedMessages");
      if (fetchedMessages.data) {
        setMessages(fetchedMessages.data);
      }
    };
    fetchMessages();
  }, []);

  const handleIgnore = async (msgId: string) => {
    const ignoredMessage: any = await axios.delete(`/flaggedMessages/${msgId}`);
    if (ignoredMessage.data) {
      setMessages((prevState) => prevState.filter((msg) => msg.id !== msgId));
    }
  };

  const handleDelete = async (msgId: string) => {
    const deletedMessage: any = await axios.delete(`/messages/${msgId}`);
    const ignoredMessage: any = await axios.delete(`/flaggedMessages/${msgId}`);
    if (deletedMessage.data && ignoredMessage.data) {
      setMessages((prevState) => prevState.filter((msg) => msg.id !== msgId));
    }
  };

  return (
    <Wrapper>
      {messages.length > 0 &&
        messages.map((message) => (
          <Message
            key={message.id}
            id={message.id}
            content={message.content}
            handleIgnore={() => handleIgnore(message.id)}
            handleDelete={() => handleDelete(message.id)}
          />
        ))}
    </Wrapper>
  );
};

export default MessagesList;

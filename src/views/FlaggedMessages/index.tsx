import styled from "styled-components";
import MessagesList from "../../components/MessagesList";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FlaggedMessages = () => {
  return (
    <Wrapper>
      <MessagesList />
    </Wrapper>
  );
};

export default FlaggedMessages;

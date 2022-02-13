import styled from "styled-components";

interface MessageProps {
  id: string;
  content: string;
  handleIgnore: () => void;
  handleDelete: () => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 5px 20px 15px 20px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 20px;
`;

const Text = styled.p``;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: #006b00;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #008200;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #ce1d1c;
  margin-left: 10px;

  &:hover {
    background-color: #ea1a19;
  }
`;

const Message = ({ id, content, handleIgnore, handleDelete }: MessageProps) => {
  return (
    <Wrapper>
      <Text>{content}</Text>
      <ButtonsWrapper>
        <Button onClick={handleIgnore}>Ignore</Button>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Message;

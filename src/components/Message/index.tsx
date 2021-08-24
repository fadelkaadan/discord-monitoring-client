import styled from "styled-components";

interface MessageProps {
  content: String;
  onClick?: () => Promise<void>;
}

const Wrapper = styled.div`
  width: 500px;
  padding: 1rem 2rem;
  background-color: #5865f2;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: #de4141;
  color: #fff;
  padding: 5px;
  height: 30px;
  width: 30px;
  border-radius: 50%;

  :hover {
    background-color: #e44e4e;
    cursor: pointer;
  }
`;

const Message = ({ content, onClick }: MessageProps) => {
  return (
    <Wrapper>
      <p>{content}</p>
      <Button onClick={onClick}>x</Button>
    </Wrapper>
  );
};

export default Message;

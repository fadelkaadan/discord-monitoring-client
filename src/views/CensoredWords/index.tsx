import styled from "styled-components";
import List from "../../components/List";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CensoredWords = () => {
  return (
    <Wrapper>
      <List />
    </Wrapper>
  );
};

export default CensoredWords;

import styled from "styled-components";
import CensoredWordsList from "../../components/CensoredWordsList";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CensoredWords = () => {
  return (
    <Wrapper>
      <CensoredWordsList />
    </Wrapper>
  );
};

export default CensoredWords;

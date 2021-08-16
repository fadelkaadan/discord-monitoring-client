import styled from "styled-components";

interface RefreshButtonProps {
  onClick: () => {};
}

const Wrapper = styled.button`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: #ec4343;
  color: white;
  border: none;
  outline: none;
  position: absolute;
  left: 50px;
  top: 50px;
  cursor: pointer;
  :hover {
    background-color: #e76161;
  }
`;

const RefreshButton = ({ onClick }: RefreshButtonProps) => {
  return <Wrapper onClick={onClick}>R</Wrapper>;
};

export default RefreshButton;

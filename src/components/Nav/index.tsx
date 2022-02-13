import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NavItemWrapper = styled.div`
  width: 70%;
  max-width: 1000px;
  padding: 25px 0;
`;

const Nav = () => {
  return (
    <Wrapper>
      <NavItemWrapper>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#7289da" : "#fff",
            fontWeight: 700,
            marginRight: "20px",
            fontSize: "30px",
            textDecoration: "none",
          })}
          to={"/"}
        >
          Flagged messages
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#7289da" : "#fff",
            fontWeight: 700,
            marginRight: "20px",
            fontSize: "30px",
            textDecoration: "none",
          })}
          to={"/censored-words"}
        >
          Censored words
        </NavLink>
      </NavItemWrapper>
    </Wrapper>
  );
};

export default Nav;

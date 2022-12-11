import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-right: 1.3rem;
  text-decoration: none;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  transform: scale(0.8);
  background: linear-gradient(35deg, #494949, #313131);
  h4 {
    font-size: 0.5rem;
    color: white;
  }
  svg {
    font-size: 0.8rem;
    color: white;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;

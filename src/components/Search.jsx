import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={onSubmitHandler}>
      <div>
        <FaSearch />
        <input type="search" value={input} onChange={onChangeHandler} />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: auto;
  width: 500px;

  div {
    position: relative;
    width: 100%;
  }
  input {
    max-height: 40px;
    font-size: 0.8rem;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    padding: 1rem 2.5rem;
    border-radius: 1rem;
    color: white;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;

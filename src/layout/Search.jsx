import React from "react";
import { styled } from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchContainer = styled.div`
  overflow: hidden;
  width: 780px;
  max-width: 780px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 10px 40px 0 rgba(68, 86, 92, 0.2);

  display: flex;
  height: 100px;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: flex-start;
  align-items: center;
`;

const SearchForm = styled.div`
  display: flex;
  margin-bottom: 0px;
  align-items: center;
  justify-content: flex-start;
  font-size: 2rem;
  width: 100%;
  form {
    width: 100%;
    height: 100%;
  }
`;
const Input = styled.input`
  border: none;
  height: 3rem;
  font-size: 1.6rem;
  width: 90%;
  &:focus {
    outline: none;
  }
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchForm>
        <form>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <Input placeholder="   여기 입력하세요....🫠"></Input>
        </form>
      </SearchForm>
    </SearchContainer>
  );
};

export default Search;

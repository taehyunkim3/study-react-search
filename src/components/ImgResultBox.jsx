import React from "react";
import { styled } from "styled-components";
import ImgResults from "./ImgResults";

const SearchResults = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 5px;
`;
const ImgResultBox = ({ result, category }) => {
  return (
    <div>
      <SearchResults>
        {result.map((a, i) => (
          <ImgResults key={i} i={i} a={a} />
        ))}
      </SearchResults>
    </div>
  );
};

export default ImgResultBox;

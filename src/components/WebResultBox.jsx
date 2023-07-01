import React from "react";
import { styled } from "styled-components";
import Results from "./Results";

const SearchResults = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const WebResultBox = ({ result, category }) => {
  return (
    <div>
      <SearchResults>
        {result.map((a, i) => (
          <Results key={i} i={i} a={a} />
        ))}
      </SearchResults>
    </div>
  );
};

export default WebResultBox;

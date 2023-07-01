import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ResultBox = styled.div`
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
  flex-direction: column;

  height: 100px;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: center;
  align-items: flex-start;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;
//아래 이거 넣으면 경고창을 무시함.
// eslint-disable-next-line react/prop-types
const Results = ({ i, a }) => {
  return (
    <ResultBox key={i}>
      <a href={a.url} dangerouslySetInnerHTML={{ __html: a.title }}></a>
      {/* dangerously... b태그가 안없어져서 일단 이렇게 해둠. 정규식으로 제거후 가공 필요 Link */}
      <h3 dangerouslySetInnerHTML={{ __html: a.contents }}></h3>
    </ResultBox>
  );
};

export default Results;

import { styled } from "styled-components";
import { faEllipsis, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBarContainer = styled.div`
  padding: 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const IconBox = styled.div`
  display: flex;
  gap: 1.8rem;
  font-size: 2rem;
`;

const ArticleSelect = styled.select`
  border: none;
  border-radius: 20px;
  background: none;
  font-size: 1rem;
  &:focus {
    border: none;
  }
`;
const TopBar = ({ setCategory }) => {
  return (
    //
    <TopBarContainer>
      <ArticleSelect
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option>검색 분야 선택</option>
        <option value="web">웹 검색</option>
        {/* <option value="vclip">비디오</option> */}
        <option value="image">이미지</option>
        {/* <option value="blog">블로그</option> */}
        {/* <option value="blog">블로그</option>
        <option value="blog">블로그</option>
        <option value="blog">블로그</option> */}
      </ArticleSelect>
      <IconBox>
        <FontAwesomeIcon icon={faEllipsis} />
        <FontAwesomeIcon icon={faUser} />
      </IconBox>
    </TopBarContainer>
  );
};

export default TopBar;

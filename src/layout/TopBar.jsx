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
const TopBar = () => {
  return (
    //
    <TopBarContainer>
      <ArticleSelect>
        <option value>All Articles</option>
        <option value="value1">value1</option>
        <option value="value2">value2</option>
      </ArticleSelect>
      <IconBox>
        <FontAwesomeIcon icon={faEllipsis} />
        <FontAwesomeIcon icon={faUser} />
      </IconBox>
    </TopBarContainer>
  );
};

export default TopBar;

import { styled } from "styled-components";

const ResultBox = styled.div`
  background-image: url(${(props) => props.imgURL});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  overflow: hidden;
  width: 19.6%;

  padding: 0px;
  border-radius: 10px;

  box-shadow: 0 10px 40px 0 rgba(68, 86, 92, 0.2);

  height: 200px;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: center;
  transition: all 0.2s;

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
  }
  a p {
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
  }
  &:hover {
    transform: scale(1.2);
  }
`;
//아래 이거 넣으면 경고창을 무시함.
// eslint-disable-next-line react/prop-types
const ImgResults = ({ a }) => {
  return (
    <ResultBox imgURL={a.thumbnail_url}>
      <a href={a.doc_url}>
        <p>{a.display_sitename} </p>
        {/* <img src={a.thumbnail_url} /> */}
        {/* <div style={(backgroundimage = a.thumbnail_url)} /> */}
        <p>{a.collection}</p>
      </a>
    </ResultBox>
  );
};

export default ImgResults;

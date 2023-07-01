import { styled } from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useCallback, useState } from "react";

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

  width: 100%;
  form {
    width: 100%;
    height: 100%;
  }
  form button {
    cursor: pointer;
    background: none;
    border: none;
    height: 3rem;
    width: 3rem;
    font-size: 2rem;
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
  // const API_URL = process.env.REACT_APP_KAKAO_REST_API_KEY;  이건 CRA에서나 통함.
  const API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY; //vite용
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");

  const onChange = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [] //input 넣었다가 필요없어서 뺌.
  );
  //
  const fetchResult = async () => {
    const { data } = await axios.get(`https://dapi.kakao.com/v2/search/web`, {
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
      params: { query: `${input}` }, //쿼리 양식이 계속 틀려서 한참 걸림. 순서랑 괄호 위치 숙지
    });
    console.log(data);
    setResult(data.documents);
  };
  //
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); //철자유의 e.prevent.default 아님.
      fetchResult();

      //즉시호출함수 대신 위로빼줌.
      // (async () => {
      //   const { data } = await axios.get(
      //     `https://dapi.kakao.com/v2/search/web`,
      //     // { params: input }, //1.이거아닌듯

      //     {
      //       headers: {
      //         Authorization: `KakaoAK ${API_KEY}`,
      //       },

      //       // { params: { query: `${input}` } } //2위치변경 위아래
      //       params: { query: `${input}` }, //3.쿼리양식 수정
      //     }
      //   );
      //   console.log(data);
      //   setResult(data.documents); // data 아님.
      //   // console.log(result); 이거 안나옴 왜냐하면 await이 붙어있어서.
      // })();
    },
    [input]
  );

  return (
    <>
      <SearchContainer>
        <SearchForm>
          <form onSubmit={onSubmit}>
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <Input
              type="text"
              placeholder="   여기 입력하세요....🫠"
              onChange={onChange}
              value={input}
            ></Input>
          </form>
        </SearchForm>
      </SearchContainer>
      {result.map((a, i) => {
        return (
          <div key={i}>
            <a href={a.url} dangerouslySetInnerHTML={{ __html: a.title }}></a>
            {/* 이거 위험하다고 하는거 안해주면 b태그가 안없어져서 일단 이렇게 해둠. 정규식으로 제거후 가공 필요 */}
            <h3 dangerouslySetInnerHTML={{ __html: a.contents }}></h3>
          </div>
        );
      })}
    </>
  );
};

export default Search;

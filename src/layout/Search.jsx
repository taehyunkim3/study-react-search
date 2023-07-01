import { styled } from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Results from "../components/Results";
import WebResultBox from "../components/WebResultBox";
import ImgResultBox from "../components/ImgResultBox";

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

const Search = ({ category }) => {
  // const API_URL = process.env.REACT_APP_KAKAO_REST_API_KEY;  이건 CRA에서나 통함.
  const API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY; //vite용
  const [result, setResult] = useState([]);
  const [meta, setMeta] = useState({});
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  // const [isEnd, setIsEnd] = useState(false);
  const resultPerPage = 10;

  const onChange = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [] //input 넣었다가 필요없어서 뺌.
  );
  //
  const fetchResult = async () => {
    setLoading(true);
    console.log(category);
    const { data } = await axios.get(
      `https://dapi.kakao.com/v2/search/${category}`,
      {
        headers: {
          Authorization: `KakaoAK ${API_KEY}`,
        },
        params: { query: `${input}`, page: `${page}` }, //쿼리 양식이 계속 틀려서 한참 걸림. 순서랑 괄호 위치 숙지
      }
    );
    //
    console.log(data);
    setMeta(data.meta); // 페이지 번호, 마지막 페이지 정보
    setResult(data.documents);
    setLoading(false);
    // console.log(meta.pageable_count);   undefined 나옴 ㅠㅠ
    // meta.pageable_count > 50
    //   ? setTotalPage(50)
    //   : setTotalPage(meta.pageable_count);
  };
  //
  useEffect(() => {
    if (meta.pageable_count !== undefined) {
      console.log(meta.pageable_count);
      meta.pageable_count >= 50 * resultPerPage
        ? setTotalPage(50)
        : setTotalPage(meta.pageable_count / resultPerPage);
    }
  }, [meta.pageable_count, result]);
  //
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); //철자유의 e.prevent.default 아님.
      if (input !== "") {
        //빈검색 방지
        fetchResult();
      }
    },
    [input, category]
  );
  //
  useEffect(() => {
    if (input !== "") {
      fetchResult(); //400에러나는거 방지용
    }
    setLoading(false);
  }, [page, category]); //페이지나 카테고리 변경시 다시 fetch 해줌.
  //
  console.log("search" + category);
  //
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
      {loading || result == "" ? null : (
        <p>
          [노출결과수 : {meta.pageable_count} 총 결과수 : {meta.total_count}]
        </p>
      )}
      {loading ? <h1>로딩중</h1> : null}
      {(() => {
        //switch문 사용법..
        switch (category) {
          case "web":
            return <WebResultBox result={result} />;
          case "vclip":
            return result.map((a, i) => <Results key={i} i={i} a={a} />);
          case "image": // 아오씨 image를 img라고 해놓고 한시간반을 찾음.
            console.log("caseIMG");
            return <ImgResultBox result={result} />;
          case "blog":
            return result.map((a, i) => <Results key={i} i={i} a={a} />);
          // return <Results key={i} i={i} a={a} />; 이거 오류남
          default:
            return null;
        }
      })()}
      {/* <SearchResults>
        {(() => {
          //switch문 사용법..
          switch (category) {
            case "web":
              return result.map((a, i) => <Results key={i} i={i} a={a} />);
            case "vclip":
              return result.map((a, i) => <Results key={i} i={i} a={a} />);
            case "image": // 아오씨 image를 img라고 해놓고 한시간반을 찾음.
              console.log("caseIMG");
              return result.map((a, i) => <ImgResults key={i} a={a} />);
            case "blog":
              return result.map((a, i) => <Results key={i} i={i} a={a} />);
            // return <Results key={i} i={i} a={a} />; 이거 오류남
            default:
              return null;
          }
        })()}
      </SearchResults> */}
      {Array.from({ length: totalPage }).map((_, i) => {
        if (i + 1 == page) return <span key={i}>{i + 1}</span>;
        return (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        );
      })}
    </>
  );
};

export default Search;

// const onSubmit = useCallback(
//   (e) => {
//     e.preventDefault(); //철자유의 e.prevent.default 아님.
//     if (input !== "") {
//       //빈검색 방지
//       fetchResult();
//     }

//     //즉시호출함수 대신 위로빼줌.
//     // (async () => {
//     //   const { data } = await axios.get(
//     //     `https://dapi.kakao.com/v2/search/web`,
//     //     // { params: input }, //1.이거아닌듯

//     //     {
//     //       headers: {
//     //         Authorization: `KakaoAK ${API_KEY}`,
//     //       },

//     //       // { params: { query: `${input}` } } //2위치변경 위아래
//     //       params: { query: `${input}` }, //3.쿼리양식 수정
//     //     }
//     //   );
//     //   console.log(data);
//     //   setResult(data.documents); // data 아님.
//     //   // console.log(result); 이거 안나옴 왜냐하면 await이 붙어있어서.
//     // })();
//   },
//   [input, category]
// );

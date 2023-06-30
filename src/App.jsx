import { styled } from "styled-components";
import "./App.css";

const WebContainer = styled.body`
  width: 100%;
  min-height: 100vh;
  padding: 30px;
  font-family: Roboto, sans-serif;
  line-height: 120%;
`;
const Footer = styled.footer`
  position: fixed;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
  display: flex;
  width: 100%;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  background-color: #e0e6eb;
  font-size: 16px;
`;
const TopBar = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 80px;
`;
const SearchContainer = styled.div`
  overflow: hidden;
  width: 780px;
  max-width: 780px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 10px 40px 0 rgba(68, 86, 92, 0.05);
`;

const SearchFormGroup = styled.div`
  display: flex;
  height: 100px;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: space-between;
  align-items: center;
`;

const CollectionListGroup = styled.div`
  display: block;
  width: 100%;
  padding: 20px 10px 10px;
  border-top: 1px solid rgba(68, 86, 92, 0.2);
`;

const NoResultsGroup = styled.div`
  display: flex;
  padding: 20px 20px 40px;
  justify-content: space-between;
  align-items: center;
`;

const SearchForm = styled.div`
  display: flex;
  margin-bottom: 0px;
  align-items: center;
`;

function App() {
  return (
    <>
      <WebContainer>
        <TopBar>topbar</TopBar>
        <SearchContainer>
          <SearchFormGroup>
            searchformgroup
            <SearchForm>
              searchform
              <img
                src="https://assets.website-files.com/600425d25fc1287b9232414b/6004299a0a46b4304521beca_search-fat%201.svg"
                loading="lazy"
                alt=""
                style={{
                  position: "relative",
                  left: "-9px",
                  marginRight: "10px",
                }}
              />
              <form>df</form>
            </SearchForm>
          </SearchFormGroup>
          <CollectionListGroup>collectiongroup</CollectionListGroup>
          <NoResultsGroup>noresultsgroup</NoResultsGroup>
        </SearchContainer>
      </WebContainer>
      <Footer>footer</Footer>
    </>
  );
}

export default App;

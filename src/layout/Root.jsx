import Search from "./Search";
import TopBar from "./TopBar";
import Logo from "./Logo";

import { styled } from "styled-components";
const RootContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 30px;
  font-family: Roboto, sans-serif;
  line-height: 120%;
`;
function Root() {
  return (
    <RootContainer>
      <TopBar />
      <Logo />
      <Search />
    </RootContainer>
  );
}

export default Root;

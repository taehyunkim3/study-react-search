import Search from "./Search";
import TopBar from "./TopBar";
import Logo from "./Logo";

import { styled } from "styled-components";

function Root() {
  const RootContainer = styled.body`
    width: 100%;
    min-height: 100vh;
    padding: 30px;
    font-family: Roboto, sans-serif;
    line-height: 120%;
  `;

  return (
    <RootContainer>
      <TopBar />
      <Logo />
      <Search />
    </RootContainer>
  );
}

export default Root;

import Search from "./Search";
import TopBar from "./TopBar";
import Logo from "./Logo";
import Footer from "./Footer";

import { styled } from "styled-components";
import { useState } from "react";
const RootContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  font-family: Roboto, sans-serif;
  line-height: 120%;
`;
function Root() {
  const [category, setCategory] = useState("web");
  return (
    <RootContainer>
      <TopBar setCategory={setCategory} />
      <Logo />
      <Search category={category} />
      <Footer />
    </RootContainer>
  );
}

export default Root;

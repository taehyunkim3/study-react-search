import { styled } from "styled-components";

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  width: 100%;
`;

const Logo = () => {
  return (
    //
    <LogoBox>
      <img src="https://assets.website-files.com/600425d25fc1287b9232414b/6004282e60565ac5cfd55643_image%202.png" />
    </LogoBox>
  );
};

export default Logo;

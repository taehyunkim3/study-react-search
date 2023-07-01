import { styled } from "styled-components";

const FooterContainer = styled.footer`
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #e0e6eb;
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Made by TaehyunKim / React Study</p>
      <p>Powered by React, KakaoAPI</p>
    </FooterContainer>
  );
};

export default Footer;

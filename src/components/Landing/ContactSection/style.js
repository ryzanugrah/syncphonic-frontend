import styled from "styled-components";
import Bg2 from "../../../assets/images/bg-landing-2.png";

export const ContactContainer = styled.div`
  background-image: url(${Bg2});
  background-color: ${({ lightBg }) => (lightBg ? "#fff" : "#191A19")};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 767.98px) {
    padding: 0;
  }
`;

export const ContactWrapper = styled.div`
  z-index: 1;
  height: auto;
  width: 100%;

  @media screen and (max-width: 767.98px) {
    height: auto;
  }
`;

export const ContactRow = styled.div`
  grid-auto-columns: minmax(auto, 1fr);
  white-space: pre-wrap;
  align-items: center;
  width: 100%;
  padding-right: 0;
  margin-right: 0;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "")};

  @media screen and (max-width: 767.98px) {
    display: grid !important;
    justify-items: center;
  }
`;

export const Column1 = styled.div`
  padding: 24px 16px 24px 24px;
  max-width: 600px;

  @media screen and (max-width: 767.98px) {
    padding: 24px 16px !important;
    max-width: 100%;
  }
`;

export const Column2 = styled.div`
  padding: 48px 24px 0 0;
  text-align: left;

  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const Heading = styled.h1`
  text-align: left;
  font-size: 58.45px;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};

  @media screen and (max-width: 1199.98px) {
    font-size: 51.96px;
  }

  @media screen and (max-width: 991.98px) {
    font-size: 46.18px;
  }

  @media screen and (max-width: 767.98px) {
    font-size: 41.05px;
  }

  @media screen and (max-width: 575.98px) {
    font-size: 36.49px;
  }
`;

export const Subtitle = styled.p`
  font-size: 22.78px;
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};

  @media screen and (max-width: 575.98px) {
    font-size: 18px;
  }
`;

export const BtnWrap = styled.div``;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ContactInfo = styled.p`
  @media screen and (max-width: 767.98px) {
    text-align: center;
  }
`;

export const ContactLink = styled.a``;

export const ContactImage = styled.img`
  width: 20%;
  margin-right: 20px;
  border-radius: 50%;

  &:hover {
    box-shadow: inset 0 5px 5px ${(props) => props.theme.colors.hover},
      0 0 15px ${(props) => props.theme.colors.hover};
  }
`;
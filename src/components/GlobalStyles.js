import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Josefin Sans', sans-serif;
    background-color: ${({ theme }) => theme.background};
    user-select: none;
    position: relative;
    transition: all .3s ease-in;
    &::before {
      transition: all .3s ease-in;
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 30vh;
      background: ${({ theme }) => theme.mainBg} center / cover no-repeat ;
      z-index: -2;
      @media(min-width: 992px) {
        height: 40vh;
      }
    }
    &::after {
      transition: all .3s ease-in;
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 30vh;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
      z-index: -1;
      @media(min-width: 992px) {
        height: 40vh;
      }
    }
  }
  li {
    list-style-type: none;
  }
  ::-webkit-input-placeholder {
    font-family: 'Josefin Sans', sans-serif;
  }
  .App {
    width: 90%;
    margin: 0 auto;
    padding-top: 20%;
    z-index: 10;
    transition: all .3s ease-in;
    @media(min-width: 576px) {
      width: 60%;
    }
    @media(min-width: 768px) {
      width: 50%;
    }
    @media(min-width: 992px) {
      width: 35%;
    }
  }
  .list-style {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.textPrimary};
    background-color: ${({ theme }) => theme.appBackground};
    background-clip: padding-box;
    border: 1px solid ${({ theme }) => theme.listBorder};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }
`;

import styled, { css, keyframes } from "styled-components";
import TL from "./tag-list";
import C from "./close";

const shrink = keyframes`
  0% { height: inherit; }
  100% { height: 0; visibility: hidden; padding: 0; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  10% { height: auto; position: relative; }
  100% { height: auto; visibility: visible; position: relative; }
`;

const fadeOut = keyframes`
  40% { opacity: 0; }
  100% { opacity: 0; height: 0; visibility: hidden; padding: 0; margin: 0; }
`;

const opacity = keyframes`
  100% { opacity: 0; visibility: hidden; padding: 0; height: 0; }
`;

export const Close = styled(C)`
  visibility: hidden;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const CompleteMessage = styled.p`
  margin: 0;
  height: 0;
  visibility: hidden;
  text-align: center;
  color: #71787d;
  transition: all 0.25s ease;
  position: absolute;
`;

export const TagList = styled(TL)``;

export const Label = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Container = styled.div`
  position: relative;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 5px 8px 0 #e9ebec;
  border-radius: 8px;
  transition: all 0.35s ease;
  will-change: box-shadow, transform;
  user-select: none;
  overflow: hidden;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 15px 18px 0 #e9ebec;
  }

  ${props =>
    props.hide &&
    css`
      animation: 0.35s ease-in ${opacity};
      animation-fill-mode: forwards;
    `};

  ${props =>
    props.complete &&
    css`
      &:hover {
        transform: scale(1);
        box-shadow: 0 15px 18px 0 #e9ebec;
      }

      ${CompleteMessage} {
        animation: 0.35s ease-in 0.4s ${fadeIn};
        animation-fill-mode: forwards;
      }

      ${Close} {
        visibility: visible;
      }

      ${Label} {
        animation: 0.35s linear 0.25s ${fadeOut};
        animation-fill-mode: forwards;
      }

      ${TagList} {
        animation: 0.35s linear 0.25s ${fadeOut};
        animation-fill-mode: forwards;
      }
    `};
`;

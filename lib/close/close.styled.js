import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 1.5625rem;
  width: 1.5625rem;
  border-radius: 50%;
  background-color: #e9ebec;
  transition: all 0.2s ease;
  box-shadow: 0 5px 8px 0 #e9ebec;

  &:focus {
    outline: solid;
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    box-shadow: 0 7px 10px 0 #e9ebec;
  }

  &:before, &:after {
    position: absolute;
    content: '';
    background-color: #555a5f;
    width: 1px;
    height: 10px;
    top: 50%;
    left: 50%;
  }

  &:after {
    transform: translate(-52.5%, -52.5%) rotate(45deg);
  }

  &:before {
    transform: translate(-52.5%, -52.5%) rotate(-45deg);
  }
`;

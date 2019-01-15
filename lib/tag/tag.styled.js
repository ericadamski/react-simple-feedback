import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  background-color: #f0f2f3;
  padding: 6px 20px;
  display: flex;
  align-items: center;
  transition: all 0.35s ease;
  will-change: box-shadow, transform;
  box-shadow: 0px 2px 10px 0 transparent;
  user-select: none;

  &:hover {
    box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const Emoji = styled.span`
  margin-right: 6px;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
`;

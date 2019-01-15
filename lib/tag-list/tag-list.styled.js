import styled from "styled-components";

export const Item = styled.li`
  &:before {
    content: "\200B";
  }
`;

export const Container = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;

  ${Item} {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

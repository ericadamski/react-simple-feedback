import React from "react";
import { Container, Item } from "./tag-list.styled";
import Tag from "../tag";

const makeClick = function makeClick(value, handler) {
  return function clickWithValue(event) {
    event.stopPropagation();

    handler && handler(value);
  };
};

export default function TagList(props) {
  return (
    <Container className={props.className}>
      {props.tags.map(({ label, value, emoji }) => (
        <Item key={label}>
          <Tag
            emoji={emoji}
            emojiLabel={label}
            handleClick={makeClick(value, props.handleClick)}
          >
            {label}
          </Tag>
        </Item>
      ))}
    </Container>
  );
}

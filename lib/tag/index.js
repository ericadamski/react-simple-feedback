import React from "react";
import title from "title";
import { Container, Emoji, Text } from "./tag.styled";

export default function Tag(props) {
  return (
    <Container onClick={props.handleClick}>
      <Emoji arial-label={props.emojiLabel} role="img">
        {props.emoji}
      </Emoji>
      <Text>
        {title(props.children)}
      </Text>
    </Container>
  );
}

import React from "react";
import { Container } from "./close.styled";

export default function Close(props) {
  return (
    <Container
      className={props.className}
      onClick={props.handleClick}
      role="button"
      data-testid="close-button"
      tabindex={0}
    />
  );
}

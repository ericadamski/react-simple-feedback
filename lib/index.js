import React, { PureComponent } from "react";
import {
  Container,
  Label,
  CompleteMessage,
  TagList,
  Close
} from "./index.styled";

export default class TagSelect extends PureComponent {
  state = { complete: false, hide: false };

  static getDerivedStateFromProps(props, state) {
    if (props.complete && !state.complete) {
      return { complete: true };
    }

    return null;
  }

  handleClick(value) {
    this.props.onClick && this.props.onClick(value);

    this.setState(
      () => ({ complete: true }),
      () => {
        if (this.props.hideOnComplete) {
          this.timeoutSubscription = setTimeout(
            () =>
              this.setState(
                () => ({ hide: true }),
                () => this.props.onClose && this.props.onClose()
              ),
            // istanbul ignore next - no need to test this defaul
            this.props.hideTimeout || 1500
          );
        }
      }
    );
  }

  handleClose() {
    if (this.timeoutSubscription) {
      clearTimeout(this.timeoutSubscription);
    }

    this.setState(
      () => ({ hide: true }),
      () => this.props.onClose && this.props.onClose()
    );
  }

  render() {
    return (
      <Container hide={this.state.hide} complete={this.state.complete}>
        <CompleteMessage>{this.props.message}</CompleteMessage>
        <Close handleClick={this.handleClose.bind(this)} />
        <Label>{this.props.label}</Label>
        <TagList
          handleClick={this.handleClick.bind(this)}
          tags={this.props.tags}
        />
      </Container>
    );
  }
}

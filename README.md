# React Simple Feedback

A super simple component _similar_ to a single select to be used for single answer feedback gathering

![sample feedback](https://user-images.githubusercontent.com/6516758/51181558-7a27c380-1899-11e9-8dd3-633fc7f9f4de.gif)

# Installation

```
yarn add react-simple-feedback
```

# Usage

> This repo requires [styled-components](https://www.styled-components.com) and [react](https://reactjs.org) as peers.

### Props

```javascript
propTypes = {
  /**
   * Brings the component directly to the complete state.
   * Does not show the tags as options or the label.
   */
  complete: PropTypes.bool,
  /**
   * The function to call when any one of the tags is clicked.
   */
  onClick: PropTypes.func,
  /**
   * The function to call when the close button is clicked.
   */
  onClose: PropTypes.func,
  /**
   * This will automatically hide the element after
   * a timeout of this.props.hideTimeout or 1.5 seconds.
   *
   * The close button will also cause this element to hide.
   */
  hideOnComplete: PropTypes.func,
  /**
   * The amount of time (in seconds) to wait before hiding this component.
   *
   * This will only be taken into account if this.props.hideOnComplete is true
   */
  hideTimeout: PropTypes.number,
  /**
   * The label of the field.
   */
  label: PropTypes.string.isRequired,
  /**
   * The message to display after one of the options is selected
   */
  message: PropTypes.string.isRequired,
  /**
   * The options to render
   */
  tags: PropTypes.arrayOf({
    /**
     * The hardcoded emoji eg: '🤔'
     */
    emoji: PropTypes.string,
    /**
     * The main text to display
     */
    label: PropTypes.string,
    /**
     * The value associated
     */
    value: PropTypes.any,
  })
};
```

```JavaScript
import React from 'react';
import SimpleFeedback from 'react-simple-feedback';

module.exports = function Feedback() {
  return (
    <SimpleFeedback
      label="Eric wants to be a...",
      message="Thank you for your feedback 👍"
      tags={[
        {
          value: 0,
          emoji: "🐫",
          label: "Camel"
        },
        {
          value: 1,
          emoji: "🐄",
          label: "Cow"
        },
        {
          value: 2,
          emoji: "🦉",
          label: "Owl"
        },
        {
          value: 3,
          emoji: "🐎",
          label: "Horse"
        },
      ]}
    />
  );
}
```

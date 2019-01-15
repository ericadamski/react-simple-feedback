import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Tag from "./index";

storiesOf("Tag", module).add("Default", () => (
  <Tag emojiLabel="money" emoji="💵" handleClick={action("Clicked")}>
    Earn More
  </Tag>
));

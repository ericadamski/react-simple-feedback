import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Close from "./index";

storiesOf("Close", module).add("Default", () => (
  <Close handleClick={action("Close")} />
));

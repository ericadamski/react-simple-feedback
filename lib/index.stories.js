import { action } from "@storybook/addon-actions";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { storiesOf } from "@storybook/react";
import React from "react";
import TagSelect from "./index";

const tags = [
  {
    label: "Earn More",
    emoji: "💵",
    value: "earn more"
  },
  {
    label: "Change Jobs",
    emoji: "💼",
    value: "change jobs"
  },
  {
    label: "Work Remotely",
    emoji: "🏠",
    value: "work remotely"
  },
  {
    label: "Build an Idea",
    emoji: "🔧",
    value: "build an idea"
  },
  {
    label: "Something Else",
    emoji: "🤔",
    value: "something else"
  }
];

storiesOf("Tag Select", module)
  .addDecorator(withBackgrounds([{ value: "#f0f2f3", default: true }]))
  .add("Default", () => (
    <TagSelect
      label="Eric's goal is to..."
      message="Thank you for your feedback 👍"
      tags={tags}
      onClick={action("clicked")}
    />
  ))
  .add("Auto hide", () => (
    <TagSelect
      hideOnComplete
      label="Eric's goal is to..."
      message="Thank you for your feedback 👍"
      tags={tags}
      onClick={action("clicked")}
    />
  ))
  .add("Complete", () => (
    <TagSelect
      label="Eric's goal is to..."
      message="Thank you for your feedback 👍"
      tags={tags}
      onClick={action("clicked")}
      complete
    />
  ));

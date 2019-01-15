import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import TagList from "./index";

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


storiesOf("Tag List", module).add("Default", () => (
  <TagList handleClick={action("Clicked")} tags={tags}/>
));

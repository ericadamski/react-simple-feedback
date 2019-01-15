import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import TagSelect from "../index";

const data = {
  tags: [
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
  ],
  message: "Thank you for your feedback 👍",
  label: "Eric's goal is to..."
};

describe("Tag Select", () => {
  beforeEach(cleanup);

  it("should match the snapshot", () => {
    /**
     * default render
     */
    expect(render(<TagSelect {...data} />).container).toMatchSnapshot();
    /**
     * default complete render
     */
    expect(
      render(<TagSelect {...data} complete />).container
    ).toMatchSnapshot();
  });

  it("should toggle on click of a tag", () => {
    const onClick = jest.fn();

    const { getByText } = render(<TagSelect {...data} onClick={onClick} />);

    fireEvent.click(getByText(data.tags[0].label).parentNode);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(data.tags[0].value);
  });

  it("should call onClose on click of the close button", () => {
    const close = jest.fn();

    const { getByTestId } = render(<TagSelect {...data} onClose={close} />);

    fireEvent.click(getByTestId("close-button"));

    expect(close).toHaveBeenCalledTimes(1);
  });

  it("should set a timeout and clear that timeout on close click", () => {
    const timeout = setTimeout;
    const cleartimeout = clearTimeout;
    const close = jest.fn();

    global.setTimeout = jest.fn(fn => (fn(), "called"));
    global.clearTimeout = jest.fn();

    const { getByTestId, getByText } = render(
      <TagSelect {...data} hideOnComplete hideTimeout={1000} onClose={close} />
    );

    fireEvent.click(getByText(data.tags[0].label).parentNode);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);

    expect(close).toHaveBeenCalled();

    fireEvent.click(getByTestId("close-button"));

    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(clearTimeout).toHaveBeenCalledWith("called");

    /**
     * Just want to put these back to make sure they don't get forgotten
     */
    setTimeout = timeout;
    clearTimeout = cleartimeout;
  });
});

import { render, screen, RenderResult } from "../../../utilities/test-utils";

import Message from "../index";

describe("Message", () => {
  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(
      <Message
        id="1"
        content="test content"
        handleIgnore={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render message's content", () => {
    const dummyContent = "test content";
    render(
      <Message
        id="1"
        content={dummyContent}
        handleIgnore={() => {}}
        handleDelete={() => {}}
      />
    );
    const content: HTMLElement = screen.getByText(dummyContent);
    expect(content.textContent).toEqual(dummyContent);
  });

  it("Should render two buttons", () => {
    const dummyContent = "test content";
    render(
      <Message
        id="1"
        content={dummyContent}
        handleIgnore={() => {}}
        handleDelete={() => {}}
      />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toEqual(1);
  });
});

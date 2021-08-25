import { render, screen, RenderResult, cleanup } from "@testing-library/react";
import Item from "../index";

describe("Item", () => {
  afterEach(cleanup);

  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(
      <Item content="item" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render a content", () => {
    const content = "item"
    render(<Item content={content} />);
    const text: HTMLElement = screen.getByText(content);
    expect(text.textContent).toEqual(content);
  });
});

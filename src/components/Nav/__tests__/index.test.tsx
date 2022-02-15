import { render, screen, RenderResult } from "../../../utilities/test-utils";

import Nav from "../index";

describe("Nav", () => {
  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<Nav />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render links in the nav", () => {
    render(<Nav />);
    const linkOne: HTMLElement = screen.getByRole("link", {
      name: /Flagged messages/i,
    });
    const linkTwo: HTMLElement = screen.getByRole("link", {
      name: /Censored words/i,
    });
    expect(linkOne).toBeInTheDocument();
    expect(linkTwo).toBeInTheDocument();
  });
});

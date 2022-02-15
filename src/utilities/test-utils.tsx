import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/user-event";

interface AllTheProvidersProps {
  children?: any;
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return <Router>{children}</Router>;
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

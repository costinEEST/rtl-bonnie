import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  it("renders the component", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test('renders "Home" link', () => {
  const { getByText } = render(<App />);
  const homeLink = getByText(/Home/);
  expect(homeLink).toBeInTheDocument();
});

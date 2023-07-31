import { render } from "@testing-library/vue";
import { BasicWelcome } from "./welcome.composition";

it("should render with the correct text", () => {
  const { getByText } = render(BasicWelcome);
  const rendered = getByText(/Hello World/);
  expect(rendered).toBeTruthy();
});

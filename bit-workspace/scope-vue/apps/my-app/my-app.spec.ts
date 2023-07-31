import { render } from "@testing-library/vue";
import MyApp from "./my-app.vue";

it("should render with the correct text", () => {
  const { getByText } = render(MyApp);
  const rendered = getByText(/App/);
  expect(rendered).toBeTruthy();
});

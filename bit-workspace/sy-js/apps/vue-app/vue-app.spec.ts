import { render } from "@testing-library/vue";
import VueApp from "./vue-app.vue";

it("should render with the correct text", () => {
  const { getByText } = render(VueApp);
  const rendered = getByText(/App/);
  expect(rendered).toBeTruthy();
});

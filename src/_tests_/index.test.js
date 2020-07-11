import ReactDOM from "react-dom";
import * as ReactIntl from "react-intl";

describe(">>>Test index>>>>", () => {
  beforeAll(() => {
    ReactIntl.addLocaleData = jest.fn();
    ReactDOM.render = jest.fn();
    require("../index");
  });
  it("should render my component", () => {
    // expect(shallow(<index />).toMatchSnapshot());
  });
});

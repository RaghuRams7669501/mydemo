import * as redux from "redux";
describe("Test Main Store", () => {
  const rootReducer = jest.fn();
  beforeAll(() => {
    redux.createStore = jest.fn();
    redux.combineReducers = jest.fn().mockReturnValue(rootReducer);
    require("../store");
  });
  it("create a Store", () => {
    expect(redux.combineReducers).toHaveBeenCalled();
  });
});

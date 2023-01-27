const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("adds in commas to numbers in the correct places", () => {
    const num1 = 1234;
    const num2 = 1000000
    const num3 = 9876543210;
    const num4 = 6
    expect(addCommas(num1)).toEqual('1,234')
    expect(addCommas(num2)).toEqual('1,000,000')
    expect(addCommas(num3)).toEqual('9,876,543,210')
    expect(addCommas(num4)).toEqual('6')
  })

  test('adds in commas for negative number in the correct places', () => {
    const num = -10;
    const num2 = -5678;
    expect(addCommas(num)).toEqual('-10')
    expect(addCommas(num2)).toEqual('-5,678')
  })

});

const { mean, median, mostFrequent } = require("./calculaters");

describe("#mean", function () {
  it("finds the mean of an array of numbers", function () {
    expect(mean([2, 4, 5, 8])).toEqual(4.75);
  });
});

describe("#median", function () {
  it("finds the median of an array of numbers", function () {
    expect(median([0, 1, 2, 3, 5, 6])).toEqual(2.5);
  });
  it("finds the median of an empty array", function () {
    expect(median([])).toEqual(null);
  });
});

describe("#mostFruquent", function () {
  it("finds the most fluquent number of an array", function () {
    expect(mostFrequent([2, 3, 3, 3, 4, 5])).toEqual(3);
  });
});

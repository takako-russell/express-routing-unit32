function convertToNums(stringNums) {
  let converted = [];

  for (let i = 0; i < stringNums.length; i++) {
    let newNums = Number(stringNums[i]);
    converted.push(newNums);
  }

  return converted;
}

function mean(nums) {
  if (nums.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total = total + nums[i];
  }
  const ave = total / nums.length;
  return ave;
}

function median(nums) {
  let middleIdx = Math.floor(nums.length / 2);
  let median;
  if (nums.length === 0) {
    return null;
  }
  if (nums.length % 2 === 0) {
    median = (nums[middleIdx] + nums[middleIdx - 1]) / 2;
  } else {
    median = nums[middleIdx];
  }
  return median;
}

function mostFrequent(nums) {
  if (nums.length === 0) {
    return null;
  }

  let frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentNumber;

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];

    if (frequencyMap[currentNumber] === undefined) {
      frequencyMap[currentNumber] = 1;
    } else {
      frequencyMap[currentNumber]++;
    }

    if (frequencyMap[currentNumber] > maxFrequency) {
      maxFrequency = frequencyMap[currentNumber];
      mostFrequentNumber = currentNumber;
    }
  }

  return mostFrequentNumber;
}

module.exports = {
  mean,
  median,
  mostFrequent,
  convertToNums,
};

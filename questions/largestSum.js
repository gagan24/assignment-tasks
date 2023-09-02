function maxSubarraySum(nums) {
  let max = nums[0];
  let maxOverall = nums[0];

  for (let i = 1; i < nums.length; i++) {
    max = Math.max(nums[i], max + nums[i]);
    maxOverall = Math.max(maxOverall, max);
  }

  return maxOverall;
}

const investmentReturns = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubarraySum(investmentReturns);
console.log(
  "The largest possible sum of returns for any contiguous subperiod is:",
  result
);

function subarraySum(nums, k) {
  const sumCountMap = new Map();
  let count = 0;
  let totalSum = 0;

  sumCountMap.set(0, 1);

  for (let num of nums) {
    totalSum += num;

    if (sumCountMap.has(totalSum - k)) {
      count += sumCountMap.get(totalSum - k);
    }

    sumCountMap.set(totalSum, (sumCountMap.get(totalSum) || 0) + 1);
  }

  return count;
}

const nums1 = [1, 1, 1];
const k1 = 2;
console.log(subarraySum(nums1, k1));

const nums2 = [1, 2, 3];
const k2 = 3;
console.log(subarraySum(nums2, k2));

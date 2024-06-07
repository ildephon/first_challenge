// Function to check matching subArray
const hasSubarrayWithSum = (arr, target) => {
  //   Statement that will terminate execution if argument  doesn't meet requirements
  if (
    !(
      arr.length > 1 &&
      arr.length < 100000 &&
      target > -1000000000 &&
      target < 1000000000
    )
  )
    return 'Invalid Input';

  // Initialization of Initial state of sum and subarray position
  let start = 0;
  let currentSum = 0;

  //   Loop to increase subarray length if sum is not equal or greater than target
  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    // Loop contact from start of sub array if sum exceed target
    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    // check and return if current sum equal parsed target
    if (currentSum === target) {
      //   return arr.slice(start, end + 1);
      return true;
    }
  }

  //   return false if no matching subarray found
  return false;
};

// Verify with your oen inputs:
const arr = [4, 2, 7, 1, 9, 5, 100, 500];
const target = 614;
console.log('Array Challenge: ' + hasSubarrayWithSum(arr, target));

/*
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

*/

//https://leetcode.com/problems/sliding-window-maximum/



//solution
var maxSlidingWindow = function(nums, k) {
    let result = [];
    for (let i = 0; i <= nums.length - k; i++) {
        let max = nums[i]
        for (let x = 1; x < k; x++) {
            if (max < nums[i + x]) {
                max = nums[i + x]
            }
        }
        result.push(max)
    }
    return result;
};

  //time complexity: linear O(n)
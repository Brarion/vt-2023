function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > target) continue;
    
    for(let j = i + 1; j < nums.length; j++) {
        if (nums[j] > target) continue;

        if (nums[i]  + nums[j] === target){
            return [i, j]
        }
    }
  }

  return [-1, -1]; 
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2));

const nums3 = [3, 4];
const target3 = 6;
console.log(twoSum(nums3, target3));

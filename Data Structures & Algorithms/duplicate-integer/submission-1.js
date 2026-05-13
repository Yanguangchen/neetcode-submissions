class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //sort the nums, if there is duplicate, it will be next to it
        nums = nums.sort();

        //loop through array
        for(let i = 0; i < nums.length; i++)
        {
            //if the first element is equal to the second element, then its a duplicate, return true
            if(nums[i] == nums[i + 1])
            {
                return true;
            }
        }
        return false;
            }
}

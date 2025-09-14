func moveZeroes(nums []int) []int  {
    left, right := 0, len(nums) - 1

    for left <= right {
        if nums[right] == 0 {
            nums = append(nums[:right], nums[right + 1:]...)
            nums = append(nums, 0);
        }

        if nums[left] == 0 {
            nums = append(nums[:left], nums[left + 1:]...)
            nums = append(nums, 0);
        }

        if nums[left] != 0 {
            left++
        }

        right--
    }

    return nums
}
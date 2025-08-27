// First Solution
func productExceptSelf(nums []int) []int {
    n := len(nums)
    result := make([]int, n)

    for i := 0; i < n; i++{
        res := 1
        for j := 0; j < n; j++{
            if i != j {
                res *= nums[j]
            }
        }
        result[i] = res
    }

    return result
}

// Best Solution
func productExceptSelf(nums []int) []int {
	n := len(nums)
	result := make([]int, n)

	// Prefix
	prefix := 1
	for i := 0; i < n; i++ {
		result[i] = prefix
		prefix *= nums[i]
	}

	// Suffix
	suffix := 1
	for i := n - 1; i >= 0; i-- {
		result[i] *= suffix
		suffix *= nums[i]
	}

	return result
}

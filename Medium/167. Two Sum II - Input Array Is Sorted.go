func twoSum(numbers []int, target int) []int {
    left, right := 0, len(numbers) - 1
    acc := 0

    for left < right{
        acc = numbers[left] + numbers[right]

        if acc > target{
            right--
        }
        
        if acc < target{
            left++
        }

        if acc == target{
            return []int{left + 1, right + 1}
        }
    }

    return []int{0, 0}
}
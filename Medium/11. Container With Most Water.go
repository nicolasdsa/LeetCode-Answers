func maxArea(height []int) int {
    left, right, max_acc := 0, len(height) - 1, 0

    for left < right {
        width := right - left
        minHeight := min(height[left], height[right])

        area := minHeight * width

        if area > max_acc {
            max_acc = area
        }

        if height[left] < height[right] {
            left++
        } else {
            right--
        }
    }

    return max_acc
}
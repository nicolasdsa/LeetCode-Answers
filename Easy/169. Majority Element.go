func majorityElement(nums []int) int {
    counts := make(map[int]int)

    for _, value := range nums {
        counts[value]++
	} 
    
    var maxKey,maxVal int

    for k, v := range counts {
        if v > maxVal {
            maxVal = v
            maxKey = k
        }
    }

    return maxKey
}
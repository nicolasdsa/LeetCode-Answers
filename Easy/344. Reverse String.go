func reverseString(s []byte) []byte  {
    left, right := 0, len(s) - 1

    for left < right {
        temp := s[left]
        s[left] = s[right]
        s[right] = temp

        right--
        left++
    }

    return s
}
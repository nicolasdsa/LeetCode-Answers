func isSubsequence(s string, t string) bool {
    initKey := 0
    result := false

    if len(s) == 0{
        return true
    }

    for i, _  := range t {
        if !result && s[initKey] == t[i]{
            initKey++
        }

        
        if initKey == len(s){
            result = true
        }
    }

    
    return result
}
test("Palindrome Checker", () => {
    let word = "kayak"
    let pallyCheck = (word) => {
        return word.split("").reverse().join("")
        
    }
    expect(pallyCheck(word)).toBe(word)
 
})
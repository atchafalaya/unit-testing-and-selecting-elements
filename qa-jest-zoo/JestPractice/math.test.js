const operations = {
    add: (num1, num2) => {
        return num1 + num2
    },

    subtract: (num1, num2) => {
        return num1 - num2
    },

    multiply: (num1, num2) => {
        return num1 * num2
    },

    divide: (num1, num2) => {
        return num1/num2
    }
}

describe("Math Tests", () => {
    
    it("Can add", () => {
        expect(operations.add(2,2)).toBe(4)
        //console.log(add)
    })

    it("Can subtract", () => {
        expect(operations.subtract(2,2)).toBe(0)
        //console.log(subtract)
    })

    it("Can multiply", () => {
        expect(operations.multiply(2,2)).toBe(4)
       // console.log(multiply)
    })

    it("Can divide", () => {
        expect(operations.divide(2,2)).toBe(1)
        //console.log(2/2)
    })
})
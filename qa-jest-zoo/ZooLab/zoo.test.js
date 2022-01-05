const myAnimals = require('./animal')
//import { Animal } from "./animal";

const myZoo = [
    new myAnimals("Alex", "Lion", ["meat"]),
    new myAnimals("Marty", "Zebra", ["grass", "leaves", "shrubs", "bark"]),
    new myAnimals("Melman", "Giraffe", ["leaves", "hay", "carrots"]),
    new myAnimals("Gloria", "Hippopotamus", ["grass", "reeds", "shoots"]),
]

describe("Zookeeper Feeding Tests", () => {
    it(feed, () => {

        expect(feed("meat")).toBe("meat")
        expect(feed.type("Lion")).toBe("meat")
        expect(feed.preferredFoods("meat")).toBe("meat")
      })
})
//console.log(Animal)
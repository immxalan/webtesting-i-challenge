const {succeed} = require('./enhancer.js');
const {fail} = require('./enhancer.js');
const {repair} = require('./enhancer.js');
const {get} = require('./enhancer.js');
// test away!

describe("enhancer", ()=> {
    describe("succeed", () => {
        it("should increase item enhancement by 1", () => {
            const testItem = {enhancement: 0};
            const enhanced = succeed(testItem)
            expect(enhanced.enhancement).toBe(1);
        })
    })


    describe("fail", () => {
        it("should lower durability by 5 if enhancement < 15, lower durability by 10 if enhancement >=15, lower enhancement level by 1 if enhancement level >16", () => {
            const testItem = {enhancement: 17, durability: 20};
            const enhanced = fail(testItem)
            expect(enhanced.durability).toBe(10);
            expect(enhanced.enhancement).toBe(16);
        })
    })

    describe("repair", () => {
        it("should restore item durability to 100", () => {
            const testItem = {durability: 0};
            const repaired = repair(testItem)
            expect(repaired.durability).toBe(100);
        })
    })
    
    describe("get", () => {
        it("should apply the proper prefix to an item's name", () => {
            const testItem = {enhancement: 25, name: "Iron Sword"};
            const newItem = get(testItem)
            expect(newItem.name).toBe("[+25] Iron Sword");
        })
    })
})
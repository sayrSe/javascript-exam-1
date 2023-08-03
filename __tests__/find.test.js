import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {

    test('should find first grownUp', () => {
        //GIVEN
        let ages = [9, 16, 10, 20, 19, 45, 6];

        //WHEN
        let result = firstGrownUp(ages);

        //THEN
        expect(result).toStrictEqual(20);
    });

    test('should find first orange', () => {
        //GIVEN
        let fruits = ['banana', 'apple', 'orange', 'grapes', 'melon'];

        //WHEN
        let result = firstOrange(fruits);

        //THEN
        expect(result).toStrictEqual('orange');
    });

    test('should find first length over 5 name', () => {
        //GIVEN
        let names = ['Mark', 'Jan', 'Carl', 'Samantha', 'Joseph', 'Don', 'Denise'];

        //WHEN
        let result = firstLengthOver5Name(names);

        //THEN
        expect(result).toStrictEqual('Samantha');
    });
});

import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {

    test('should map half numbers', () => {
        //GIVEN
        let ages = [8, 16, 10, 20, 14, 44, 6];
        let expected = [4, 8, 5, 10, 7, 22, 3];

        //WHEN
        let result = halfNumbers(ages);

        //THEN
        expect(result).toStrictEqual(expected);
    });

    test('should map splice names', () => {
        //GIVEN
        let names = ['Samantha', 'Joseph', 'Don', 'Denise'];
        let expected = ['Hello Samantha', 'Hello Joseph', 'Hello Don', 'Hello Denise'];

        //WHEN
        let result = spliceNames(names);

        //THEN
        expect(result).toStrictEqual(expected);
    });

    test('should map add serial number', () => {
        //GIVEN
        let names = ['Computer', 'Cellphone', 'Keyboard', 'Mouse'];
        let expected = ['1. Computer', '2. Cellphone', '3. Keyboard', '4. Mouse'];

        //WHEN
        let result = addSerialNumber(names);

        //THEN
        expect(result).toStrictEqual(expected);
    });
});

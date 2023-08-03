import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    
    test('should filter even numbers', () => {
        //GIVEN
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let expected = [2, 4, 6, 8, 10];

        //WHEN
        let result = filterEvenNumbers(numbers);

        //THEN
        expect(result).toStrictEqual(expected);
    });

    test('should filter length with 4', () => {
        //GIVEN
        let words = ['Dawn', 'Break', 'Dog', 'Jump', 'Tall', 'Short'];
        let expected = ['Dawn', 'Jump', 'Tall']

        //WHEN
        let result = filterLengthWith4(words);

        //THEN
        expect(result).toStrictEqual(expected);
    });

    test('should filter start with A', () => {
        //GIVEN
        let words = ['awaken', 'break', 'cat', 'assign', 'zoo', 'apex'];
        let expected = ['awaken', 'assign', 'apex']

        //WHEN
        let result = filterStartWithA(words);

        //THEN
        expect(result).toStrictEqual(expected);
    });
});
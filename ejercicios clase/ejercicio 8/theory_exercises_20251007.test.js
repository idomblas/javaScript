// test generated during the session

const theoryExercises = require('./theory_exercises_20251007');

describe('difference between to match and to be', () => {
    test('ToBE', () => {
        expect('2').not.toBe(2);
        expect('2').toBe('2');

        expect([2]).not.toBe([2]);
        expect([2]).toEqual([2]);
    });

    test('ToMatch', () => {
        expect('team').not.toMatch(/I/);
        expect('isabel').not.toMatch(/I/);
        expect('isIbel').toMatch(/I/);
        expect('isIbel').toMatch('isIbel');
    });
});

describe('digit counter tests', () => {
    test('check different values', () => {
        expect(theoryExercises.digitCounter('2', '22334324')).toBe(3);
        expect(theoryExercises.digitCounter('9', '356719')).toBe(1);
        expect(theoryExercises.digitCounter('1', '345000')).toBe(0);
        expect(theoryExercises.digitCounter('0', '468592')).toBe(0);
        expect(theoryExercises.digitCounter('5', '-600034')).toBe(0);
        expect(theoryExercises.digitCounter('3', '33333333')).toBe(8);
    });

    test('check different values', () => {
        expect(theoryExercises.digitCounter(2, '22334324')).toBe(3);
        expect(theoryExercises.digitCounter(9, '356719')).toBe(1);
        expect(theoryExercises.digitCounter(1, '345000')).toBe(0);
        expect(theoryExercises.digitCounter(0, '468592')).toBe(0);
        expect(theoryExercises.digitCounter(5, '-600034')).toBe(0);
        expect(theoryExercises.digitCounter(3, '33333333')).toBe(8);
    });

    test('check different values', () => {
        expect(theoryExercises.digitCounter(2, 22334324)).toBe(3);
        expect(theoryExercises.digitCounter(9, 356719)).toBe(1);
        expect(theoryExercises.digitCounter(1, 345000)).toBe(0);
        expect(theoryExercises.digitCounter(0, 468592)).toBe(0);
        expect(theoryExercises.digitCounter(5, -600034)).toBe(0);
        expect(theoryExercises.digitCounter(3, 33333333)).toBe(8);
    });
});

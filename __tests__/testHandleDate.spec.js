import { calculateDaysUntilTrip } from "../src/client/js/handleDate";

describe("Testing the calculateDaysUntilTrip", () => {
    test('testing today', () => {
        let today = new Date();
        const testInput = {date:today}
        const inputType = calculateDaysUntilTrip(testInput)
        const expectedResult = {"countdown": 1}
        expect(inputType).toEqual(expectedResult);
    });
});
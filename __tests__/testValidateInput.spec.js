import { validateInput } from "../src/client/js/validateInput";

describe("Testing the validateInput", () => {
    test('testing positive case', () => {
        const testInput = {location:"Berlin"}
        const inputType = validateInput(testInput)
        const expectedResult = true;
        expect(inputType).toBe(expectedResult);
    });
    test('testing negative case', () => {
        const testInput = {location:""}
        const inputType = validateInput(testInput)
        const expectedResult = false;
        expect(inputType).toBe(expectedResult);
    });
});
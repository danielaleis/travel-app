import { validateInput } from "../src/client/js/validateInput";

describe("Testing the validateInput", () => {
    test('testing positive case', () => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = jest.fn(); // provide an empty implementation for window.alert
        const testInput = {location:"Berlin"}
        const inputType = validateInput(testInput)
        const expectedResult = true;
        expect(inputType).toBe(expectedResult);
        window.alert = jsdomAlert;  // restore the jsdom alert
    });
});
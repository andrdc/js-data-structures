const Stack = require('../../stack/stack');

describe("size()", () => {
	var myStack = new Stack();

	it("Check size for an empty Stack", () => {
		expect(myStack.size()).toBe(0);
	});
});

const Stack = require('../../stack/stack');

describe("Basic methods : size()", () => {
	var myStack = new Stack();

	it("Check size", () => {
		expect(myStack.size()).toBe(0);
	});
});

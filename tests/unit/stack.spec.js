const Stack = require('../../stack/stack');

describe("size()", () => {
	var myStack = new Stack();

	it("Size of an empty Stack", () => {
		expect(myStack.size()).toBe(0);
	});
});

describe("push(element)", () => {
	var myStack = new Stack();

	it("Add new element to a Stack", () => {
		expect(myStack.push('Andres')).toStrictEqual(['Andres']);
	});
});

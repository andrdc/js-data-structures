const Stack = require('../../stack/stack');

describe("size()", () => {
	var myStack = new Stack();

	it("Size of an empty Stack", () => {
		expect(myStack.size()).toBe(0);
	});

	it("Size of an non-empty Stack", () => {
		myStack.push('Andres');
		myStack.push('Arturo');
		expect(myStack.size()).toBe(2);
	});
});

describe("push(element)", () => {
	var myStack = new Stack();

	it("Add new element to a Stack", () => {
		expect(myStack.push('Andres')).toStrictEqual(['Andres']);
	});
});

describe("pop()", () => {
	var myStack = new Stack();

	it("Remove element from the Stack", () => {
		myStack.push('Andres');
		expect(myStack.pop()).toEqual('Andres');
		expect(myStack.size()).toBe(0);
	});
});

describe("peek()", () => {
	var myStack = new Stack();

	it("Return top element of the Stack", () => {
		myStack.push('Andres');
		myStack.push('Arturo');
		expect(myStack.peek()).toEqual('Arturo');
	});
});

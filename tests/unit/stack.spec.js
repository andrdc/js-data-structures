const Stack = require('../../stack/stack');

describe("size()", () => {
	var myStack = new Stack();

	it("Size of an empty Stack", () => {
		expect(myStack.size()).toBe(0);
	});

	it("Size of an non-empty Stack", () => {
		myStack.push('Coqueta');
		myStack.push('Gizmo');
		expect(myStack.size()).toBe(2);
	});
});

describe("isEmpty()", () => {
	var myStack = new Stack();

	it("Stack is empty", () => {
		expect(myStack.isEmpty()).toBeTruthy();
	});

	it("Stack isn't empty", () => {
		myStack.push('Coqueta');
		expect(myStack.isEmpty()).toBeFalsy();
	});
});

describe("push(element)", () => {
	var myStack = new Stack();

	it("Add new element to a Stack", () => {
		expect(myStack.push('Coqueta')).toStrictEqual(['Coqueta']);
	});
});

describe("pop()", () => {
	var myStack = new Stack();

	it("Remove element from the Stack", () => {
		myStack.push('Coqueta');
		expect(myStack.pop()).toEqual('Coqueta');
		expect(myStack.size()).toBe(0);
	});
});

describe("peek()", () => {
	var myStack = new Stack();

	it("Return top element of the Stack", () => {
		myStack.push('Coqueta');
		myStack.push('Gizmo');
		expect(myStack.peek()).toEqual('Gizmo');
	});
});

describe("clear()", () => {
	var myStack = new Stack();

	it("Return empty Stack", () => {
		myStack.push('Coqueta');
		myStack.push('Gizmo');
		myStack.push('Maia');
		myStack.push('Tyra');
		expect(myStack.clear()).toStrictEqual([]);
	});
});

describe("toString()", () => {
	var myStack = new Stack();
	myStack.push('Coqueta');
	myStack.push('Gizmo');
	myStack.push('Maia');
	myStack.push('Tyra');

	it("Return Stack as String", () => {
		expect(myStack.toString()).toStrictEqual("Tyra, Maia, Gizmo, Coqueta");
	});
});

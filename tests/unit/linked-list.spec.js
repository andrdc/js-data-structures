const LinkedList = require('../../linked-lists/linked-list');
const Node = require('../../linked-lists/node');

describe("Basic methods : size(), isEmpty(), getHead(), indexOf(item)", () => {
	let myLinkedList = new LinkedList();
	myLinkedList.append("G6");
	myLinkedList.append("G5");
	myLinkedList.append("G4");

	let myLinkedList2 = new LinkedList();
	let node = new Node("A1");
	myLinkedList2.append("A1");

	test("Check size", () => {
		expect(myLinkedList.size()).toBe(3);
	});

	test("Check emptiness", () => {
		expect(myLinkedList.isEmpty()).toBeFalsy();
	});

	test("Return list's head", () => {
		expect(myLinkedList2.getHead()).toMatchObject(node);
	});

	test("Return item's index", () => {
		expect(myLinkedList.indexOf("G5")).toBe(1);
	});

	test("Item is not in the list therefore there's no index", () => {
		expect(myLinkedList.indexOf("B4")).toBe(-1);
	});
});

describe("append()", () => {
	let myLinkedList = new LinkedList();

	test("Insert first node", () => {
		expect(myLinkedList.append("A1")).toMatch("A1");
	});

	test("Insert another node", () => {
		expect(myLinkedList.append("G5")).toMatch("A1, G5");
	});
});

describe("removeAt(position)", () => {
	let myLinkedList = new LinkedList();
	myLinkedList.append("A1");
	myLinkedList.append("G5");
	myLinkedList.append("F4");

	test("Remove item that is not the head", () => {
		expect(myLinkedList.removeAt(1)).toMatch("A1, F4");
	});

	test("Try remove at invalid position", () => {
		expect(myLinkedList.removeAt(5)).toBeFalsy();
	});

	test("Remove Head", () => {
		expect(myLinkedList.removeAt(0)).toMatch("F4");
	});
});

describe("remove(item)", () => {
	let myLinkedList = new LinkedList();
	myLinkedList.append("A1");
	myLinkedList.append("G5");
	myLinkedList.append("F4");

	test("Remove item", () => {
		expect(myLinkedList.remove("G5")).toMatch("A1, F4");
	});
});

describe("insert(position, item)", () => {
	let myLinkedList = new LinkedList();
	myLinkedList.append("A1");
	myLinkedList.append("F4");

	test("Check out of bounds values", () => {
		expect(myLinkedList.insert(6, "G5")).toBeFalsy();
	});

	test("Insert in the head", () => {
		expect(myLinkedList.insert(0, "G5")).toMatch("G5, A1, F4");
	});

	test("Insert in another position", () => {
		expect(myLinkedList.insert(1, "D2")).toMatch("G5, D2, A1, F4");
	});
});

describe("toString()", () => {
	let myLinkedList = new LinkedList();
	myLinkedList.append("A1");
	myLinkedList.append("G5");
	myLinkedList.append("F4");

	test("Return list as string", () => {
		expect(myLinkedList.toString()).toMatch("A1, G5, F4");
	});
});

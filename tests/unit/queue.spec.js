const Queue = require('../../queue/queue');

describe("size()", () => {
	var myQueue = new Queue();

	it("Size of an empty Queue", () => {
		expect(myQueue.size()).toBe(0);
	});
});

const Queue = require('../../queue/queue');

describe('size()', () => {
	var myQueue = new Queue();

	it('Size of an empty Queue', () => {
		expect(myQueue.size()).toBe(0);
	});
});

describe('isEmpty()', () => {
	var myQueue = new Queue();

	it('Check size of empty Queue', () => {
		expect(myQueue.isEmpty()).toBeTruthy();
	});
});

describe('enqueue(item)', () => {
	var myQueue = new Queue();

	it('Add new item to the Queue', () => {
		expect(myQueue.enqueue('Tyra')).toStrictEqual(['Tyra']);
		expect(myQueue.enqueue('Coqueta')).toStrictEqual(['Tyra', 'Coqueta']);
	});
});

const Queue = require('../../queue/queue');

var myQueue = new Queue();

describe('size()', () => {
	it('Size of an empty Queue', () => {
		expect(myQueue.size()).toBe(0);
	});
});

describe('isEmpty()', () => {
	it('Check size of empty Queue', () => {
		expect(myQueue.isEmpty()).toBeTruthy();
	});
});

describe('enqueue(item)', () => {
	it('Add new item to the Queue', () => {
		expect(myQueue.enqueue('Tyra')).toStrictEqual(['Tyra']);
		expect(myQueue.enqueue('Coqueta')).toStrictEqual(['Tyra', 'Coqueta']);
	});
});

describe('dequeue()', () => {
	it('Delete first element of the Queue', () => {
		expect(myQueue.dequeue()).toMatch('Tyra');
		expect(myQueue.dequeue()).toMatch('Coqueta');
	});
});


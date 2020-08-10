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

describe('dequeue()', () => {
	var myQueue = new Queue();
	myQueue.enqueue('Tyra');
	myQueue.enqueue('Coqueta');
	it('Delete first element of the Queue', () => {
		expect(myQueue.dequeue()).toMatch('Tyra');
		expect(myQueue.dequeue()).toMatch('Coqueta');
	});
});

describe('front()', () => {
	var myQueue = new Queue();
	it('Return first item of the Queue', () => {
		expect(myQueue.front()).toBeUndefined();
		myQueue.enqueue('Gizmo');
		expect(myQueue.front()).toMatch('Gizmo');
	});
});

describe('print()', () => {
	var myQueue = new Queue();
	myQueue.enqueue('Gizmo');
	myQueue.enqueue('Maia');
	myQueue.enqueue('Tyra');
	myQueue.enqueue('Coqueta');
	it('Return Queue as String', () => {
		expect(myQueue.print()).toMatch('Gizmo, Maia, Tyra, Coqueta');
	});
});

let Queue = (function() {
	const items = new WeakMap();
	class Queue{
		constructor() {
			items.set(this, []);
		}

		/* Get size of the queue
		 * @param none : none
		 * @return length : int */
		size(){
			let myItems = items.get(this);
			return myItems.length;
		}
	}
	return Queue;
})();
module.exports = Queue;

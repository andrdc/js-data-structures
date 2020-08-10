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

		/* Check wether or not the queue is empty
		 * @param none : none
		 * @return isEmpty : bool */
		isEmpty(){
			let myItems = items.get(this);
			return this.size() === 0 ? true : false;
		}

		/* Add new item to the queue
		 * @param item : Any
		 * @return items : Array */
		enqueue(item){
			let myItems = items.get(this);
			myItems.push(item);
			return myItems;
		}

		/* Delete first queue element
		 * @param none : none
		 * @return item : Any */
		dequeue(){
			let myItems = items.get(this);
			return myItems.splice(0, 1)[0];
		}

		/* Return first element of the Queue
		 * @param none : none
		 * @return item : Any */
		front(){
			let myItems = items.get(this);
			return myItems[0];
		}
	}
	return Queue;
})();
module.exports = Queue;

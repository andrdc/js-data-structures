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
			return myItems.shift();
		}

		/* Return first element of the Queue
		 * @param none : none
		 * @return item : Any */
		front(){
			let myItems = items.get(this);
			return myItems[0];
		}

		/* Print Queue. The first element is the front.
		 * @param none : none
		 * @return queue : String */
		print(){
			let myItems = items.get(this);
			let str = '';

			myItems.forEach((item, index) => {
				str += (item += (index != myItems.length - 1) ? ', ' : '');
			});

			return str;
		}
	}
	return Queue;
})();
module.exports = Queue;

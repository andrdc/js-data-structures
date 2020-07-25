class Stack{
	constructor(){
		this.items = [];
	}

	/* Get size of the stack
	 * @param none : none
	 * @return length : int */
	size(){
		return this.items.length;
	}

	/* Check Stack emptiness
	 * @param none : none
	 * @return empty : boolean */
	isEmpty(){
		if(this.size() === 0)
			return true;
		else
			return false;
	}

	/* Add new element to the Stack. This means that the new element
	 * is going to the be at top of all of the other elements.
	 * @param element : any
	 * @return items : array */
	push(element){
		this.items.push(element);
		return this.items;
	}

	/* Remove an element from the Stack. The top element is going to
	 * be pop out the Stack.
	 * @param none : none
	 * @return element : any */
	pop(){
		return this.items.pop();
	}

	/* Return top element of the Stack
	 * @param none : none
	 * @return element : any */
	peek(){
		return this.items[this.size() - 1];
	}
}
module.exports = Stack;

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

	/* Clear out the Stack. Looping until the size is 0
	 * and pop one element by iteration.
	 * @param none : none
	 * @return elements : array */
	clear(){
		while(this.size() > 0){
			this.pop();
		}
		return this.items;
	}
}
module.exports = Stack;

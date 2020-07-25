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

	/* Add new element to the Stack. This means that the new element
	 * is going to the be at top of all of the other elements.
	 * @param element : any
	 * @return items : array */
	push(element){
		this.items.push(element);
		return this.items;
	}
}
module.exports = Stack;

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
}
module.exports = Stack;

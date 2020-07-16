const Node = require('./node');

class LinkedList{
	constructor(){
		this.head = null;
		this.length = 0;
	}

	/* Get size of list
	 * @param none : none
	 * @return length : int */
	size(){
		return this.length;
	}

	/* Check wether or not the list is empty
	 * @param none : none
	 * @return isEmpty : boolean */
	isEmpty(){
		if(this.head === null && this.length === 0)
			return true;
		else
			return false;
	}

	/* Get list's head
	 * @param none : none
	 * @return node : Any */
	getHead(){
		return this.head;
	}

	/* Add item at the end of the list.
	 * @param item : Any
	 * @return list.length : int */
	append(item){
		let node = new Node(item);
		let current;

		/* Check wether or not the list has no items */
		if(this.head === null){
			this.head = node;
		}else{
			current = this.head;

			/* Loop through the list to find the last item */
			while(current.next){
				current = current.next;
			}

			/* Get the last item and assign next to node to make
			 * the link */
			current.next = node;
		}
		this.length++;

		return this.toString();
	}

	/* Remove an item from the desire position
	 * @param position : int
	 * @return node.item : Any */
	removeAt(position){
		if(position > -1 && position < this.length){
			let current = this.head;
			let previous;
			let index = 0;

			/* Removing head */
			if(position === 0){
				this.head = current.next;
			}else{
				while(index < position){
					previous = current;
					current = current.next;
					index++;
				}

				/* Link previous with current's next: skip it to remove */
				previous.next = current.next;
			}
			this.length--;

			return this.toString();
		}else{
			return null;
		}
	}

	/* Remove the specified item
	 * @param item : Any
	 * @return list : String */
	remove(item){
		let index = this.indexOf(item);
		this.removeAt(index);
		return this.toString();
	}

	/* Add an item in the desire position.
	 * @param position : int, item : Any
	 * @return node.item : Any */
	insert(position, item){
		/* Check for out of bounds values */
		if(position >= 0 && position <= this.length){
			let node = new Node(item);
			let current = this.head;
			let previous;
			let index = 0;

			/* To insert at the beginning of the list we need to set the
			 * new node as the list's head and set our new head's next
			 * to the previous head. */
			if(position === 0){
				node.next = current;
				this.head = node;
			}else{
				while(index < position){
					previous = current;
					current = current.next;
					index++;
				}

				/* We loop through our list items until we reach the desired
				 * position. Then we switch the pointers to what we want.
				 * In this case our new node's next will be the current and
				 * the previous's next will be our new node. */
				node.next = current;
				previous.next = node;
			}

			this.length++;
			return this.toString();
		}else{
			return false;
		}
	}

	/* Return list as a string
	 * @param none : none
	 * @return list : String */
	toString(){
		let current = this.head;
		let str = '';

		while(current){
			str += ( current.item + (current.next ? ', ' : '') );
			current = current.next;
		}

		return str;
	}

	/* Return index of item
	 * @param item : Any
	 * @return index : int */
	indexOf(item){
		let current = this.head;
		let index = 0;

		while(current){
			if(item === current.item)
				return index;

			index++;
			current = current.next; /* Move around our list */
		}

		return -1;
	}
}
module.exports = LinkedList;

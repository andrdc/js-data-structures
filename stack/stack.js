/* With this approach using a WeakMap to have private attributes
 * we can not inheritance the same way as any other normal ES6 class.
 * But we make sure that the Stack object is used as intented. In
 * this particular case, we don't want to extent our class to be
 * inheritance by other obect. */

let Stack = (function() {
	const items = new WeakMap();
	class Stack{
		constructor(){
			items.set(this, []);
		}

		/* Get size of the stack
		 * @param none : none
		 * @return length : int */
		size(){
			let myItems = items.get(this);
			return myItems.length;
		}

		/* Check Stack emptiness
		 * @param none : none
		 * @return empty : boolean */
		isEmpty(){
			return this.size() === 0;
		}

		/* Add new element to the Stack. This means that the new element
		 * is going to the be at top of all of the other elements.
		 * @param element : any
		 * @return items : array */
		push(element){
			let myItems = items.get(this);
			myItems.push(element);
			return myItems;
		}

		/* Remove an element from the Stack. The top element is going to
		 * be pop out the Stack.
		 * @param none : none
		 * @return element : any */
		pop(){
			let myItems = items.get(this);
			return myItems.pop();
		}

		/* Return top element of the Stack
		 * @param none : none
		 * @return element : any */
		peek(){
			let myItems = items.get(this);
			return myItems[this.size() - 1];
		}

		/* Clear out the Stack. Looping until the size is 0
		 * and pop one element by iteration.
		 * @param none : none
		 * @return elements : array */
		clear(){
			let myItems = items.get(this);
			while(this.size() > 0){
				this.pop();
			}
			return myItems;
		}

		/* Print Stack as a String. The first is the top, the last is
		 * the base.
		 * @param none : none
		 * @return stack : String */
		toString(){
			let str = '';
			let myItems = items.get(this);
			for(let itemPos = this.size() - 1; itemPos >= 0; itemPos--){
				str += (myItems[itemPos] + ((itemPos !== 0) ? ', ' : '') );
			}
			return str;
		}
	}
	return Stack;
})();
module.exports = Stack;

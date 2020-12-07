class MaxHeap {
	constructor() {
		this.store = [];
	}

	reset() {
		this.store = [];
	}

	size() {
		return this.store.length;
	}

	push(val) {
		this.store.push(val);
		this.heapifyUp(this.store.length - 1);
	}

	heapifyUp(child) {
		while (child) {
			let parent = Math.floor((child - 1) / 2);

			if (this.shouldSwap(child, parent)) {
				this.swap(child, parent);
				child = parent;
			} else {
				break;
			}
		}
	}

	pop() {
		if (this.store.length === 1) return this.store.pop();

		let value = this.store[0];
		this.store[0] = this.store.pop();
		this.heapifyDown(0);

		return value;
	}

	heapifyDown(parent) {
    while (true) {
      let [child1, child2] = [1, 2]
        .map((n) => parent * 2 + n)
        .filter(n => n < this.store.length);
			let small = Math.min(child1, child2);
			
      if (this.store[small] > this.store[parent]) {
        this.swap(small, parent);
				parent = small;
				
      } else {
        break;
      }
    }
  }

	shouldSwap(child, parent) {
		return child && this.store[child] > this.store[parent];
		// by changing > to < this class becomes a minHeap.
	}

	swap(one, two) {
		[this.store[one], this.store[two]] = [this.store[two], this.store[one]];
	}
}
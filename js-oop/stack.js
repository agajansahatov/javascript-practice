class Stack {
    #items = [];

    push(obj) {
        this.#items.push(obj);
    }

    pop(){
        if(this.#items.length === 0)
            throw new Error("Stack is empty!");
        return this.#items.pop();
    }
        
    peek(){        
        if(this.#items.length === 0)
            throw new Error("Stack is empty!");
        return this.#items[this.#items.length - 1];
    }

    get length(){
        return this.#items.length;
    }
}

const stack = new Stack();
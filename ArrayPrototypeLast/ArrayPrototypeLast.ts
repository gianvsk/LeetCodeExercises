declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function() {

    return this.length > 0 ? this.pop() : -1  

};

export {};
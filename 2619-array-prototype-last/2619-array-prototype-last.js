Array.prototype.last = function() {
    const length = this.length;
    if(length === 0) return -1;
    return this[length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
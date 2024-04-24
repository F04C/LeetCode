Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    } else {
        return this[this.length - 1];
    }
};

// Test Example 1
const nums1 = [null, {}, 3];
console.log(nums1.last()); // Output: 3

// Test Example 2
const nums2 = [];
console.log(nums2.last()); // Output: -1
function compose(functions) {
    return function(x) {
        if (functions.length === 0) {
            return x; // Identity function
        } else {
            // Compose the functions recursively
            return functions.reduceRight((acc, fn) => fn(acc), x);
        }
    };
}

// Test Example 1
const functions1 = [x => x + 1, x => x * x, x => 2 * x];
const result1 = compose(functions1);
console.log(result1(4)); // Output: 65

// Test Example 2
const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const result2 = compose(functions2);
console.log(result2(1)); // Output: 1000

// Test Example 3
const functions3 = [];
const result3 = compose(functions3);
console.log(result3(42)); // Output: 42

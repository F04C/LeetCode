function createCounter(init) {
    let currentValue = init;

    return {
        increment() {
            return ++currentValue;
        },
        decrement() {
            return --currentValue;
        },
        reset() {
            currentValue = init;
            return currentValue;
        }
    };
}

const calls = ["increment", "reset", "decrement"];
const counter = createCounter(5);
const result = [];

for (const call of calls) {
    result.push(counter[call]());
}

console.log(result);

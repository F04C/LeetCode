function* fibGenerator() {
    let [prev, curr] = [0, 1];
    yield prev;
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const callCount = 5;
const gen = fibGenerator();
const result = [];
for (let i = 0; i < callCount; i++) {
    result.push(gen.next().value);
}
console.log(result);

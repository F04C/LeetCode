function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

// Test Example 1
let t1 = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t1); // Output: 100
});

// Test Example 2
let t2 = Date.now();
sleep(200).then(() => {
  console.log(Date.now() - t2); // Output: 200
});

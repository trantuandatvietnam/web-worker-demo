// Function to calculate Fibonacci
function fibonacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Listener for messages from the main thread
self.addEventListener("message", (e) => {
  const n = e.data;
  const start = performance.now();
  const result = fibonacci(n);
  const end = performance.now();

  // Send result back to the main thread
  postMessage({
    result: result,
    time: (end - start).toFixed(2),
  });
});

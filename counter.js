// // Main JS file

// // Create a new Web Worker
// const worker = new Worker('worker.js');

// // Listen for messages from the worker
// worker.onmessage = function(event) {
//   const counter = event.data;
//   document.getElementById('counterDisplay').textContent = counter;
// };

// // Start the worker when the page loads
// worker.postMessage('start');





// // worker.js
// let counter = 0;

// function incrementCounter() {
//   counter++;
//   postMessage(counter); // Send updated counter back to the main thread
// }

// // Increment every second
// setInterval(incrementCounter, 1000);
//your JS code here. If required.
const promises = [
  new Promise(resolve => setTimeout(() => resolve(), Math.floor(Math.random() * 2000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(), Math.floor(Math.random() * 2000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(), Math.floor(Math.random() * 2000) + 1000))
];

// Add the results to the table after all the Promises resolve using Promise.all
Promise.all(promises)
  .then(() => {
    // Calculate the time taken for each Promise to resolve
    const times = promises.map(promise => (promise._settledValueTimestamp - promise._settledValue).toFixed(3));

    // Remove the loading row from the table
    const loadingRow = document.getElementById("loading");
    loadingRow.parentNode.removeChild(loadingRow);

    // Add the results to the table
    const table = document.querySelector("table");
    table.insertAdjacentHTML(
      "beforeend",
      `<tr><td>Promise 1</td><td>${times[0]}</td></tr>` +
      `<tr><td>Promise 2</td><td>${times[1]}</td></tr>` +
      `<tr><td>Promise 3</td><td>${times[2]}</td></tr>` +
      `<tr><td>Total</td><td>${(times.reduce((a, b) => parseFloat(a) + parseFloat(b)) / 1000).toFixed(3)}</td></tr>`
    );
  });
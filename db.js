// db.js
function connect() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an internal connection error
      reject(new TypeError("Cannot read properties of undefined (reading 'pool')"));
    }, 100);
  });
}

module.exports = { connect };

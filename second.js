// // second.js
// const loader = global[Symbol.for('loader')];
// module.exports = loader(__filename);

module.exports = {
  init: () => {
    console.log("🔒 Running hidden logic from x_real.js");
  }
};

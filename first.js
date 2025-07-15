// // b.js
// const loader = global[Symbol.for('loader')];
// module.exports = loader(__filename);

// c.js
module.exports = {
  run: () => {
    console.log("🔥 Running secret logic from c.js");
  }
};

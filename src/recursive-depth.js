module.exports = class DepthCalculator {
  calculateDepth = arr => +arr.every(item => !Array.isArray(item)) || this.calculateDepth(arr.flatMap(_ => _)) + 1;
};

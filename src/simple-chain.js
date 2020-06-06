const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position < this.getLength() && position > 0) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const item = this.chain.map(e => `( ${new String(e)} )`).join("~~");
    this.chain = [];
    return item;
  }
};

module.exports = chainMaker;

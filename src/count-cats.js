module.exports = countCats = matrix => matrix.flatMap(_ => _).filter(isCatItem).length

const isCatItem = item => /^[\^]{2}$/.test(item);

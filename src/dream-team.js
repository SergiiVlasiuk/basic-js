module.exports = function createDreamTeam(members) {
  const isString = (par) => typeof par === 'string';
  if (Array.isArray(members)) {
    return members
      .filter(isString)
      .map(item => item.trim())
      .filter(item => item && /[a-zA-Z]+/.test(item))
      .map(str => str.charAt(0).toUpperCase())
      .sort()
      .join('');
  }
  return false;
};

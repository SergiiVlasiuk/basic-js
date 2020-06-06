module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  } else if (date instanceof Date && !isNaN(date)) {
    let season;
    switch (date.getMonth()) {
      case 11:
      case 0:
      case 1:
        season = 'winter';
        break;
      case 2:
      case 3:
      case 4:
        season = 'spring';
        break;
      case 5:
      case 6:
      case 7:
        season = 'summer';
        break;
      default:
        season = 'fall';
    }
    return season;
  }
  throw new Error('the data type is incorrect');
};

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const turnSpeedInSeconds = turnsSpeed / 60 / 60;
  const seconds = Math.floor(turns / turnSpeedInSeconds);
  return { turns, seconds };
};

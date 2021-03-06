const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  const activity = parseFloat(sampleActivity);
  if (!activity || activity <= 0 || activity > MODERN_ACTIVITY) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / Number(activity)) / (0.693 / HALF_LIFE_PERIOD));
};

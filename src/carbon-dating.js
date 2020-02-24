const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 
  if (isNaN(Number.parseFloat(sampleActivity))) return false
  if (Number.parseFloat(sampleActivity) <= 0 || Number.parseFloat(sampleActivity) > 15) return false
  if (typeof sampleActivity === 'number') return false
  if (typeof sampleActivity === 'object') return false
  if (typeof sampleActivity === 'null') return false
  if (typeof sampleActivity === 'undefined') return false
  if (typeof sampleActivity === 'boolean') return false

  return Math.ceil(Math.log(MODERN_ACTIVITY / Number.parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD))
  
};

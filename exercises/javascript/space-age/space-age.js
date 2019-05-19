const EARTH_YEAR_SECONDS = 31557600;

const planetToEarthSeconds = {
  earth: EARTH_YEAR_SECONDS,
  mercury: EARTH_YEAR_SECONDS * 0.2408467,
  venus: EARTH_YEAR_SECONDS * 0.61519726,
  mars: EARTH_YEAR_SECONDS * 1.8808158,
  jupiter: EARTH_YEAR_SECONDS * 11.862615,
  saturn: EARTH_YEAR_SECONDS * 29.447498,
  uranus: EARTH_YEAR_SECONDS * 84.016846,
  neptune: EARTH_YEAR_SECONDS * 164.79132
};

const age = (planet, seconds) => {
  return Math.round((seconds / planetToEarthSeconds[planet]) * 100) / 100;
};

module.exports = { age };

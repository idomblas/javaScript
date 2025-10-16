function isLeapYear(yearString) {
  if (typeof yearString !== "string") return false;
  if (
    (yearString % 4 === 0 && yearString % 100 !== 0) ||
    yearString % 400 === 0
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = isLeapYear;

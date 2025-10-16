class SuperArray {
  constructor(nums) {
    this.nums = nums;
  }
  snail(rowsCount, colsCount) {
    if (
      !Array.isArray(this.nums) ||
      this.nums.length < 0 ||
      this.nums.length > 250 ||
      !this.nums.every((n) => typeof n === "number" && n >= 1 && n <= 1000)
    ) {
      return [];
    }

    if (
      rowsCount <= 0 ||
      colsCount <= 0 ||
      rowsCount > 250 ||
      colsCount > 250
    ) {
      return [];
    }

    if (rowsCount * colsCount !== this.nums.length) {
      return [];
    }
    const result = Array.from({ length: rowsCount }, () =>
      Array(colsCount).fill(0)
    );
    let index = 0;

    for (let col = 0; col < colsCount; col++) {
      if (col % 2 === 0) {
        for (let row = 0; row < rowsCount; row++) {
          result[row][col] = this.nums[index++];
        }
      } else {
        for (let row = rowsCount - 1; row >= 0; row--) {
          result[row][col] = this.nums[index++];
        }
      }
    }

    return result;
  }
}

module.exports = { SuperArray };

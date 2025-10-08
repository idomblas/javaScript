class SuperArray {
  constructor(nums) {
    this.nums = nums;
  }
  snail(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.nums.length) {
      return [];
    }
  }
}

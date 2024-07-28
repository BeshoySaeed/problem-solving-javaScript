var RandomizedSet = function () {
  this.map = new Map();
  this.nums = [];
};

RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  this.map.set(val, this.nums.length);
  this.nums.push(val);
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  const idx = this.map.get(val);
  const last = this.nums[this.nums.length - 1];
  // Swap the element to be removed with the last element
  this.nums[idx] = last;
  this.map.set(last, idx);
  this.nums.pop();
  this.map.delete(val);
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

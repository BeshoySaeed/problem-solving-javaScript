Array.prototype.last = function () {
  if (this.length == 1) return this[0];
  if (this.length == 0) return -1;
  return this[this.length - 1];
};

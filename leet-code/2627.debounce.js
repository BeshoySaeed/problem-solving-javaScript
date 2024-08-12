var debounce = function (fn, t) {
  let time;
  return function (...args) {
    clearTimeout(time);
    time = setTimeout(() => fn(...args), t);
  };
};

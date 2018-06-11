var gimme = function (inputArray) {
  let arr1 = inputArray.slice().sort((a,b) => {
  return a - b;
});

return inputArray.indexOf(arr1[1]);
};
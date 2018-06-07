function capitalize(s){
  let first = '';
  for (let i in s) {
    if (i % 2 === 1) {
      first += (s[i].toUpperCase());
    } else {
      first += (s[i].toLowerCase());
      }
    i++
  }
  let second = '';
  for (let i in s) {
    if (i % 2 === 0) { 
      second += (s[i].toUpperCase());
    } else {
    second += (s[i].toLowerCase());
      }
    i++
  }
  return [second, first];
};
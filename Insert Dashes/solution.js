function insertDash(num) {
   
  let numStr = num.toString();
  let dash = '';
  
  for (let i = 0; i < numStr.length; i++) {
    let num1 = numStr[i];
    let num2 = numStr[i + 1];
    dash += num1;
    if (num1 % 2 && num2 % 2) {
      dash += '-';
    }
  }
  
  return dashed; 
}
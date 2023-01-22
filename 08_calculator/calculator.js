const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(numberArray) {
  return numberArray.reduce((total, num) => total + num,0);
};

const multiply = function(numberArray) {
  if (numberArray.length < 1) {
    return 0;
  }
  return numberArray.reduce((total,num) => total*num, 1);

};

const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(num) {
  let finalVal = 1;
  while (num > 0) {
    finalVal *= num;
    num--;
  }
  return finalVal;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

let operation = prompt('What operation do you want to do: add, sub, mult, div?');
let firstNumber = prompt('Enter the first number:');
let secondNumber = prompt('Enter the second number:');

if (operation == '+') {
  let result = (Number(firstNumber) + Number(secondNumber));
  alert('${firstNumber} ${operation} ${secondNumber} = ${result}');
}

else if (operation =='-') {
  let result = (firstNumber) - (secondNumber);
  alert('${firstNumber} ${operation} ${secondNumber} = ${result}');
}

else if (operation =='*') {
  let result = (firstNumber) - (secondNumber);
  alert('${firstNumber} ${operation} ${secondNumber} = ${result}');
}

else if (operation =='/') {
  let result = (firstNumber) - (secondNumber);
  alert('${firstNumber} ${operation} ${secondNumber} = ${result}');
}

else {
  alert('Error.Please try again.');
};
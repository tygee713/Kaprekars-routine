//finds the largest digit given a string of digits
function largestDigit(num) {
  var largest = parseInt(num.charAt(0));
  
  for (var i=1; i<num.length; i++) {
    var currentDigit = parseInt(num.charAt(i));
    if (currentDigit > largest) {
      largest = currentDigit;
    }
  }
  return largest;
}

//returns a string of digits in descending order
function descendingDigits(num) {
  var newNum = '';
  var tempNum = num;
  for (i=0; i<num.length; i++) {
    var largest = largestDigit(tempNum);
    newNum += largest;
    tempNum = tempNum.replace(largest, '');
  }
  return newNum;
}

//makes sure that all digits entered by the user are four digits by adding trailing zeros
function changeToFourDigits(num) {
    for (i=num.length; i<4; i++) {
      num = '0' + num;
    }
  return num;
}

//takes a number in descending order and returns a number in ascending order
function changeToAscending(num) {
  var newNum = '';
  for (i=num.length-1; i>=0; i--) {
    newNum += num.charAt(i);
  }
  return newNum;
}

//counts the iterations that it takes to reach Kaprekar's number
function countIterations(num, count) {
  if (num == 6174) {
    return count;
  }
  else {
    if (num.length < 4) {
      num = changeToFourDigits(num);
    }
    var descendingNum = descendingDigits(num);
    var ascendingNum = parseInt(changeToAscending(descendingNum));
    descendingNum = parseInt(descendingNum);
    var difference = descendingNum - ascendingNum;
    if (difference == 0) {
      return count;
    }
    else {
      count += 1;
      console.log(descendingNum + ',' + ascendingNum + ',' + difference);
      difference = difference.toString();
      return countIterations(difference, count);
    }
  }
}

var number = process.argv[2];
if (number.length < 4) {
  number = changeToFourDigits(number);
}
console.log("Full number: " + number);
console.log("Largest digit: " + largestDigit(number));
console.log("Descending order: " + descendingDigits(number));
console.log(countIterations(number, 0));
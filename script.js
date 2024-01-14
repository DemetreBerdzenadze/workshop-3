// TASK 1 

function positiveSum() {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {

    if (array[i] > 0) {
      sum += array[i];
    }

  }
  return sum;
}

let array = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];

let result = positiveSum();

console.log(result);



// TASK 2 

let sumAll = 0;

function calcSumAll(num1) {

  if (num1.length > 0) {

    for (let i = 0; i < num1.length; i++) {
      sumAll += num1[i];
    }

    return sumAll;

  } else {
    console.log("not an array");
  }
}
q
console.log(calcSumAll([10, 50, 6, 7, 8, 11, 6, 3, 9]));




// TASK 5

function evenOrOdd(number) {

  if (number % 2 == 0) {
    console.log('this number is even');
  }
  else {
    console.log("this number is odd");
  }

}

evenOrOdd(5)


// TASK 3

let user = {
  firstname: 'tom',
  lastname: 'tobias',
  age: 32,
  isloggedin: true
}

function fullname(user) {

  if (user.isloggedin) {
    return "${user.firstname} ${user.lastname}";
  } else {
    return false;
  }

}
console.log(fullname(user));


// TASK 4

let numbers2 = [10, 11, 12, 13, 14, 15, 16, 17];
function findMax(numbers2) {
  let max = -Infinity;

  for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
      max = numbers2[i];
    }
  }
  return max;

}

console.log(findMax(numbers2));


// TASK 6


let array2 = ["html", "css", "python", "javascript", "bootstrap"];

for (i = 0; i < array.length; i++) {
  if (array[i].length > 4) {
    console.log(array[i]);
  }
}

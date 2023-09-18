// const _ = require('underscore');

const testListOne = ['a', 'b', 'c'];
const testListTwo = [1, 2, 3];
function zipList(listOne, listTwo) {
  const combinedList = [];
  for (let i = 0; i < listOne.length; i++) {
    combinedList.push(listOne[i], listTwo[i]);
  }
  return combinedList;
}

console.log(zipList(testListOne, testListTwo));

function zipListTheSimpleWay(listOne, listTwo) {
  return _.flatten(_.zip(listOne, listTwo));
}

console.log(zipListTheSimpleWay(testListOne, testListTwo));

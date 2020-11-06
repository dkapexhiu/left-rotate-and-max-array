const rotations = 3;
const myArray = [1, 2, 3, 4, 5];

function leftRotation(array, noOfRotations) {
  const rotatedArray = array.concat();
  for (let i = 0; i < noOfRotations; i++) {
    const startingItems = rotatedArray.shift();
    rotatedArray.push(startingItems);
  }
  return rotatedArray;
}

function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }
  var max = arr[0];
  var maxIndex = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  return maxIndex;
}

var rotated = leftRotation(myArray, rotations);
var index = indexOfMax(rotated);

console.log("original: [" + myArray + "]");
console.log("rotated: [" + rotated + "]");
console.log("biggest element: [" + index + "]");

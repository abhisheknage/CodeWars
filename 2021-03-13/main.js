// Difference of Volumes of Cuboids
function findDifference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}

console.log(findDifference([3, 3, 3], [2, 2, 2]));
